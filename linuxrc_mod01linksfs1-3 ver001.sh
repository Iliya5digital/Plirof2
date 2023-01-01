Bulleye Link SFS1 files to live (with smaller names) to avoid overlay limit
https://forum.puppylinux.com/viewtopic.php?f=46&t=1857&start=250
DOESN'T get parameter

#!/bin/sh
### linuxrc script by brokenman <http://www.porteus.org>
### modified for Debiandog by fredx181

export PATH=/bin:/usr/bin:./

# Source functions
. ./finit

# Enable pivot_root in initramfs to let it behave like initrd:
if [ -d /m ]; then
    mount -nt tmpfs tmpfs -o mode=0755 /m
    cp -a ??* /m 2>/dev/null
    exec switch_root /m linuxrc "$@"
fi

mount -nt proc proc /proc
mount -nt sysfs sysfs /sys
echo 0 >/proc/sys/kernel/printk

echo "`cat /proc/cmdline|sed -e 's/^/ /'`" > /etc/cmdline
param() { egrep -qo " $1( |\$)" /etc/cmdline; }
value() { egrep -o " $1=[^ ]+" /etc/cmdline | cut -d= -f2; }
debug() { param debug && { echo -e "\n=====\n: Debugging started. Here is the shell for you.\n: Type your desired commands, hit Ctrl+D to continue booting\n: or press Ctrl+Alt+Del to reboot."; sh; echo -e "\n\n"; }; }

## Check for debug
if [ `grep -q debug /proc/cmdline` ]; then DBUG=0; fi

clear
echo -e "${BOLD}Starting init script.${RST}"

# Variables:
i=`echo "[1;33m""^ ""[0m"`
m=`echo "[1;33m""->""[0m"`
arch=`uname -m`; [ $arch = x86_64 ] || arch=i586
CFG=`value cfgfile`; [ $CFG ] || CFG=initrd1.xz
FROM=`value from`; ISO=`echo $FROM | egrep ".*\.iso( |\$)"`
IP=`value ip | cut -d: -f2`
MOPT=`value mopt`; [ $MOPT ] || MOPT="noatime,nodiratime,suid,dev,exec,async"
CHANGES=`value changes`
RAMSIZE=`value ramsize`; [ $RAMSIZE ] || RAMSIZE=60%
LOAD=`value load | sed 's/;/|/g'`; [ $LOAD ] || LOAD=._null
NOLOAD=`value noload | sed 's/;/|/g'`; [ $NOLOAD ] || NOLOAD=._null
EXTRAMOD=`value extramod | sed 's/;/ /g'`
RAMMOD=`value rammod | sed 's/;/|/g'`
ROOTCOPY=`value rootcopy`
FOLDER=live
livedbg=/var/log/livedbg
LOGFILE=/var/log/boot.log

## Let's start!
echo $i"loading kernel modules..."

for MODULE in $(cat modlist)
do
modprobe $MODULE 2> /dev/null
done


mount -nt devtmpfs none /dev

# Perform filesystem check:
if param fsck; then
    echo $i"performing linux filesystem check on all available devices:" 
    draw
    for x in `blkid | grep 'TYPE="ext' | cut -d: -f1`; do e2fsck -C 0 -p $x; wait; done
    for x in `blkid | grep 'TYPE="reiserfs"' | cut -d: -f1`; do reiserfsck -p $x; wait; done
    draw
fi

# Create /etc/fstab and mount devices:
fstab


#JON v210824 START+++++++++++++++++++++++++++
#remove linked from folder sfs1
if param linkremovesfs1; then
    echo $i"remove linked from folder sfs1, this may take some time..."
	for i in *_sfs1.squashfs; do
		rm "${i}"
	done
fi
# remove linked from folder sfs2
if param linkremovesfs2; then
    echo $i"remove linked files from folder sfs2, this may take some time..."
	for i in *_sfs2.squashfs; do
		rm "${i}"
	done
fi
# remove linked from folder sfs3
if param linkremovesfs3; then
    echo $i"remove linked files from folder sfs3, this may take some time..."
	for i in *_sfs3.squashfs; do
		rm "${i}"
	done
fi

# link SFS1
if param linksfs1; then
    echo $i"linking files from folder sfs1, this may take some time..."
    a=1
	for i in sfs1/*.squashfs; do
		new=$(printf "%03d_sfs1.squashfs" "$a")
		ln -s "${i}" "$new"
		let a=a+1
	done
fi
# link SFS2
if param linksfs2; then
    echo $i"linking files from folder sfs1, this may take some time..."
    a=1
	for i in sfs2/*.squashfs; do
		new=$(printf "%03d_sfs2.squashfs" "$a")
		ln -s "${i}" "$new"
		let a=a+1
	done
fi

# link SFS3
if param linksfs3; then
    echo $i"linking files from folder sfs3, this may take some time..."
    a=1
	for i in sfs3/*.squashfs; do
		new=$(printf "%03d_sfs3.squashfs" "$a")
		ln -s "${i}" "$new"
		let a=a+1
	done
fi

#rm *_sfs2.aaa

#JON END -----------------------------



debug
# Find *.cfg file:
echo $i"searching for $CFG file"
if [ $IP ]; then BOOTDEV=network; CFGDEV=/mnt/nfs
#   softdep for r8169 https://bugzilla.kernel.org/show_bug.cgi?id=204343
    modprobe realtek 2>/dev/null
    for x in `lspci | grep 0200: | cut -d: -f3-4 | sed s/:/.*/g | tr a-z A-Z`; do modprobe `grep $x /lib/modules/$(uname -r)/modules.alias | tail -n1 | rev | cut -d" " -f1 | rev` 2>/dev/null; done
    ls /sys/class/net | grep -q eth || { for x in `find /lib/modules/$(uname -r)/kernel/drivers/net -name "*.ko" | sed 's/.ko//g'`; do modprobe `basename $x` 2>/dev/null; ls /sys/class/net | grep -q eth && break || modprobe -r `basename $x` 2>/dev/null; done; }
    mkdir -p /mnt/nfs/storage; udhcpc; modprobe nfsv4; mount -t nfs4 $IP:/srv/pxe /mnt/nfs -o ro,nolock 2>/dev/null || { modprobe nfsv3; mount -t nfs $IP:/srv/pxe /mnt/nfs -o ro,nolock 2>/dev/null; }
    MAC=`ifconfig | grep eth0 | cut -d: -f5-7 | sed s/://g | cut -d" " -f1`
    if [ "$CHANGES" = /srv/pxe/storage ]; then
	if lsmod | grep -q nfsv3; then
	    mount -t nfs $IP:/srv/pxe/storage /mnt/nfs/storage -o rw,nolock 2>/dev/null && { mkdir -p /mnt/nfs/storage/client-$MAC/changes/home; CHANGES="/storage/client-$MAC"; }
	else
	    mount -t nfs4 $IP:/srv/pxe/storage /mnt/nfs/storage -o rw,nolock 2>/dev/null && { mkdir -p /mnt/nfs/storage/client-$MAC/changes/home; CHANGES="/storage/client-$MAC"; }
	fi
    fi
    if [ $FROM ]; then
        FOLDER=$FROM/live
    fi
elif [ $ISO ]; then CFGDEV=/mnt/isoloop
    locate -e $FROM && { BOOTDEV=/mnt/$DEV; mkdir /mnt/isoloop; mount -o loop /mnt/$DEV/$LPTH /mnt/isoloop; ISOSRC=/mnt/$DEV/$LPTH; }
else
    if [ $FROM ]; then
	locate -e $FROM/live/$CFG
	if [ $? -eq 0 ]; then
	    DIR=`echo $LPTH | rev | cut -d/ -f3- | rev`; [ $DIR ] && FOLDER=$DIR/live
	else
	    echo -e "${YELLOW}from= cheatcode is incorrect, press enter to search through all devices${RST}"
	    read -s; search -e live/$CFG
	fi
    else
	search -e live/$CFG || lazy -e live/$CFG
    fi
    CFGDEV=/mnt/$DEV
fi

[ -e $CFGDEV/$FOLDER/$CFG ] && PTH=$CFGDEV/$FOLDER || . fatal

# Set some variables to export as environment variables
DELAY=`value delay`; [ $DELAY ] && { echo $i"delaying $DELAY sec (waiting for slow devices to settle)"; sleep $DELAY; }
BOOTDEV=$CFGDEV
MODDIR=$PTH/modules
BASEDIR=${PTH%/*}
PORTDIR=$PTH
PORTCFG=$CFGDEV/$FOLDER/$CFG
echo $i"using data from $PTH"
echo  $PTH > /etc/homedrv
# Make all drivers available:
#mount -o loop $PTH/base/000-kernel.xzm /opt/000-kernel 2>/dev/null
#mount -o bind /opt/000-kernel/lib/modules /lib/modules 2>/dev/null

# Create symlinks used often by porteus scripts:
if [ $CFGDEV = /mnt/nfs -o $CFGDEV = /mnt/isoloop ];then
    ln -sf /mnt/live$PTH/modules  /porteus/modules
    ln -sf /mnt/live$PTH/optional /porteus/optional
else
    ln -sf $PTH/modules  /porteus/modules
    ln -sf $PTH/optional /porteus/optional
fi

debug
pos_fail () {
		rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
		echo && echo -e "[1;33m""A Windows filesystem (FAT, NTFS) or other non-posix compatible filesystem\nhas been detected on $CHANGES or $(echo $CHANGES |sed 's|\(.*\)/.*|\1|') .\nYour changes cannot be saved directly to the specified storage media with this\nsetup.""[0m"
		echo "press enter to continue in '[1;36mAlways Fresh[0m' mode for this session"
		read; rmdir /mnt/$DEV/$LPTH/changes 2>/dev/null; fail_chn
}

pos_fail1 () {
		rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
echo && echo -e "[1;33m""A Windows filesystem (FAT, NTFS) or other non-posix compatible filesystem\nhas been detected on $(echo $CHANGES |sed 's|\(.*\)/.*|\1|').\nYour changes cannot be saved directly to the specified storage media with this\nsetup.""[0m"
		echo "press enter to continue in '[1;36mAlways Fresh[0m' mode for this session"
		read; rmdir /mnt/$DEV/$LPTH/changes 2>/dev/null; fail_chn

}

# Setup changes:
if [ $CHANGES ]; then
    echo $i"setting up directory for changes"
    CHNEXIT=`echo $CHANGES | cut -d: -f1`; 
    [ $CHNEXIT = EXIT ] && CHANGES=`echo $CHANGES | cut -d: -f2-`
    [ $CHNEXIT = +EXIT ] && CHANGES=`echo $CHANGES | cut -d: -f2-`   
    
    [ -r $CFGDEV/$CHANGES ] && { DEV=`echo $CFGDEV | sed s@/mnt/@@`; LPTH=$CHANGES; } || locate -r $CHANGES
    if [ $? -eq 0 ]; then
	if [ -d /mnt/$DEV/$LPTH ]; then
	    mkdir -p /mnt/$DEV/$LPTH/changes 2>/dev/null && \
	    mount -o bind /mnt/$DEV/$LPTH/changes /memory/changes && touch /memory/changes/._test1 2>/dev/null
	else
	    if blkid /mnt/$DEV/$LPTH 2>/dev/null | cut -d" " -f3- | grep -q _LUKS; then
		for x in dm_crypt cryptd cbc sha256_generic aes_generic aes_x86_64; do modprobe $x 2>/dev/null; done
		losetup /dev/loop2 /mnt/$DEV/$LPTH
		echo $i"found encrypted .dat container"
		cryptsetup luksOpen /dev/loop2 crypt
		fsck_dat /dev/mapper/crypt
		mount /dev/mapper/crypt /memory/changes 2>/dev/null && touch /memory/changes/._test1 2>/dev/null
	    else
		fsck_dat /mnt/$DEV/$LPTH
		mount -o loop /mnt/$DEV/$LPTH /memory/changes 2>/dev/null && touch /memory/changes/._test1 2>/dev/null
	    fi
	fi
	if [ $? -eq 0 ]; then
	    echo $i"testing filesystem on "$CHANGES" for posix compatibility"
	    ln -s /memory/changes/._test1 /memory/changes/._test2 2>/dev/null && chmod +x /memory/changes/._test1 2>/dev/null && [ -x /memory/changes/._test1 ] && chmod -x /memory/changes/._test1 2>/dev/null && [ ! -x /memory/changes/._test1 ] && rm -f /memory/changes/._test1 /memory/changes/._test2
ret=$? 
	    if [ $ret -ne 0 ]; then
            posfail=yes
            fi
if [ $CHNEXIT = +EXIT ];then
  if [ ! -d /mnt/$DEV/$LPTH ]; then
  APTH=$(echo /mnt/$DEV/$LPTH |sed 's|\(.*\)/.*|\1|')
    rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
	    mkdir -p $APTH/changes 2>/dev/null && \
	    mount -o bind $APTH/changes /memory/changes && touch /memory/changes/._test1 2>/dev/null
  else
    rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
	    mkdir -p /mnt/$DEV/$LPTH/changes 2>/dev/null && \
	    mount -o bind /mnt/$DEV/$LPTH/changes /memory/changes && touch /memory/changes/._test1 2>/dev/null
  fi
	    ln -s /memory/changes/._test1 /memory/changes/._test2 2>/dev/null && chmod +x /memory/changes/._test1 2>/dev/null && [ -x /memory/changes/._test1 ] && chmod -x /memory/changes/._test1 2>/dev/null && [ ! -x /memory/changes/._test1 ] && rm -f /memory/changes/._test1 /memory/changes/._test2
fi
ret1=$?

            if [ $ret -ne 0 ] && [ "$posfail" = "yes" ]; then
		rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
		echo && echo -e "[1;33m""A Windows filesystem (FAT, NTFS) or other non-posix compatible filesystem\nhas been detected on $CHANGES or $(echo $CHANGES |sed 's|\(.*\)/.*|\1|') .\nYour changes cannot be saved directly to the specified storage media with this\nsetup. Please use the '[1;36m Save file manager[1;33m' to create a .dat container\nand use it for saving your changes after your next reboot.""[0m"
		echo "boot will continue in '[1;36mAlways Fresh[0m' mode for this session"
		sleep 10; rmdir /mnt/$DEV/$LPTH/changes; fail_chn

            elif [ $ret1 -ne 0 ] && [ -z "$posfail" ]; then
		rm -f /memory/changes/._test1 /memory/changes/._test2; umount /memory/changes
echo && echo -e "[1;33m""A Windows filesystem (FAT, NTFS) or other non-posix compatible filesystem\nhas been detected on $(echo $CHANGES |sed 's|\(.*\)/.*|\1|').\nYour changes cannot be saved directly to the specified storage media with this\nsetup.""[0m"
		echo "press enter to continue in '[1;36mAlways Fresh[0m' mode for this session"
		read; rmdir /mnt/$DEV/$LPTH/changes 2>/dev/null; fail_chn

	    else
		echo $i"filesystem is posix compatible"; CHNDEV=/mnt/$DEV

        	if [ -f /memory/changes/clear-changes-on-reboot ]; then
                      echo $i"[1;36m""changes content signalled to be cleared""[0m"
                      rm -rf /memory/changes/*
		fi
	    	    	    
		if [ "$CHNEXIT" = EXIT -o "`egrep -o " changes-ro( |\$)" /proc/cmdline`" ]; then
		    CHNEXIT=$CHNDEV/$LPTH; echo $CHNEXIT >/tmp/changes-exit
		    param changes-ro && echo $i"[1;36m""changes will not be saved for this session""[0m" || echo $i"[1;36m""changes will be saved only during reboot/shutdown""[0m"

			setClean
			mkdir -p /memory/images/changes-exit
			mount -n --move /memory/changes /memory/images/changes-exit
			umount /memory/changes 2>/dev/null;
			mount -nt tmpfs -o size=$RAMSIZE tmpfs /memory/changes;
			CHANGES=memory
		fi

		 if [ $CHNEXIT = +EXIT ]; then
		    CHNEXIT=$CHNDEV/$LPTH; echo $CHNEXIT >/tmp/changes-exit
		    echo $i"[1;36m""changes will be saved only during reboot/shutdown""[0m"

  	      if [ ! -d /mnt/$DEV/$LPTH ]; then
              APTH=$(echo /mnt/$DEV/$LPTH |sed 's|\(.*\)/.*|\1|')
  	      echo $i"[1;36m""option +EXIT is being used, changes are NOT written in memory""[0m"
  	      echo $i"[1;36m""temporary changes will be in $APTH/tmp-changes ""[0m"
umount /memory/changes 2>/dev/null; rmdir $APTH/changes 2>/dev/null
mount -o loop /mnt/$DEV/$LPTH /memory/changes 2>/dev/null
			setClean

			mkdir -p /memory/images/changes-exit
			mount -n --move /memory/changes /memory/images/changes-exit
			#umount /memory/changes 2>/dev/null;
			#mount -nt tmpfs -o size=$RAMSIZE tmpfs /memory/changes;
			#CHANGES=memory
  	      rm -rf $APTH/tmp-changes 2> /dev/null
  	      mkdir -p $APTH/tmp-changes
  	      mount -o bind $APTH/tmp-changes /memory/changes
  	      else
  	      echo $i"[1;36m""option +EXIT is being used, changes are NOT written in memory""[0m"
  	      echo $i"[1;36m""temporary changes will be in /mnt/$DEV/$LPTH/tmp-changes""[0m"
		    #umount /memory/changes;
			setClean
			mkdir -p /memory/images/changes-exit
			mount -n --move /memory/changes /memory/images/changes-exit
			umount /memory/changes 2>/dev/null;
			#mount -nt tmpfs -o size=$RAMSIZE tmpfs /memory/changes;
			#CHANGES=memory
  	      rm -rf /mnt/$DEV/$LPTH/tmp-changes 2> /dev/null
  	      mkdir -p /mnt/$DEV/$LPTH/tmp-changes
  	      mount -o bind /mnt/$DEV/$LPTH/tmp-changes /memory/changes


  	      fi
		fi
	    fi
	else
	    echo $i"changes not writable, using memory instead"; CHGERR=2; umount /memory/changes 2>/dev/null; fail_chn
	fi
    else
	fail $CHANGES; fail_chn
    fi
else
     echo $i"changes cheatcode not found, using memory only"; fail_chn
fi

mkdir -p /memory/changes/upperdir/mnt/live

debug
# Setup aufs:
#echo $i"creating live filesystem and inserting modules"
#mount -t aufs -o nowarn_perm,xino=/memory/xino/.aufs.xino,br:/memory/changes=rw aufs /union
#if [ $? -ne 0 ]; then echo -e "[31m""cant setup union (aufs) - read only filesystem?\nWhen you finish debugging press Ctrl+Alt+Del to reboot.""[0m"; sh; fi

# Check for base modules update
if [ -d $CFGDEV/$FOLDER/updates ]; then
	echo $i"[1;36m""Base updates detected ...""[0m"
	# Check if user has booted over network or from ISO
	if [ $ISO ]||[ $IP ]||[ "$CFGDEV" = /mnt/isoloop ]; then
		echo $i"Booting from ISO or network detected. Skipping updates ..."
	else
		if is_writable $CFGDEV/$FOLDER/base; then
			echo $i"Copying base updates ... please wait"
			basemods=`ls -1 $CFGDEV/$FOLDER/updates | grep "^00[1-3]-[a-z|A-Z]"`
			for x in $basemods; do
				echo "Copying: $x ot $CFGDEV/$FOLDER/porteus/"
				cp $CFGDEV/$FOLDER/updates/$x $CFGDEV/$FOLDER/base/ 2>/dev/null
				rm $CFGDEV/$FOLDER/updates/$x
			done
			rm -rf $CFGDEV/$FOLDER/updates && echo "Removed updates folder" echo "Copying: $x ot $CFGDEV/$FOLDER/porteus/" || echo "COuld not remove updates folder"
		else
			echo $i"Non writable media. Skipping updates ..."
		fi
	fi
fi

# Find modules:
find $PTH $PTH/base $PTH/modules -maxdepth 1 -name "*.squashfs" 2>/dev/null | egrep -ve "$NOLOAD" | sort >/tmp/modules
find $PTH/optional -name "*.squashfs" 2>/dev/null | egrep -e "$LOAD" | sort >>/tmp/modules

if param vga_detect; then
    echo $i"detecting GPU"
    lspci >/tmp/lspci; nv=`grep "0300: 10de:" /tmp/lspci | cut -d":" -f4`; amd=`grep "0300: 1002:" /tmp/lspci | cut -d":" -f4`
    if [ $nv ]; then
	echo $i"$nv chipset found, checking which nvidia driver supports it"
	cd /usr/share/pciids/NVIDIA; NV=`grep $nv * | cut -d: -f1`; cd /
	if [ $NV ]; then
	    echo $i"nvidia-$NV.xx driver will be activated -"
	    echo $i"if present in $PTH/optional folder"
	    find $PTH/optional -name "nvidia-$NV*" 2>/dev/null >>/tmp/modules
	else
	    echo $i"latest nvidia driver will be activated -"
	    echo $i"if present in $PTH/optional folder"
	    find $PTH/optional -name "nvidia-*" 2>/dev/null | egrep -v '96.43.|173.14.|304.' >>/tmp/modules
	fi
    elif [ $amd ]; then
	echo $i"checking if $amd GPU belongs to 'Radeon HD' series"
	cd /usr/share/pciids/AMD; HD=`grep $amd * | cut -d: -f1`; cd /
	if [ $HD ]; then
            echo $i"$HD-xx driver will be activated -"
            echo $i"if present in $PTH/optional folder"
            find $PTH/optional -name "$HD-*" 2>/dev/null >>/tmp/modules
        else
            echo $i"$amd GPU is not supported by amd-catalyst driver - refusing activation"
        fi
    else
        echo $i"could not find any nVidia/AMD GPU on this PC"
    fi
fi

if param base_only; then
grep live /tmp/modules | grep -v modules > /tmp/mod
#    grep base/0 /tmp/modules > /tmp/mod
    mv /tmp/mod /tmp/modules
else
    if [ "$EXTRAMOD" ]; then
	for folder in $EXTRAMOD; do
	    echo $i"searching for additional modules in $folder"
	    locate -d $folder && { find /mnt/$DEV/$LPTH -name "*.squashfs" 2>/dev/null | egrep -ve "$NOLOAD" | sort >>/tmp/modules; } || fail $folder
	done
    fi
fi

# Copy data to RAM:
if param copy2ram; then
    echo $i"copying data to RAM, this may take some time..."
    [ $RAMMOD ] && { egrep -e "$RAMMOD" /tmp/modules > /tmp/rammod; cpmod /tmp/rammod; } || cpmod /tmp/modules
fi

# Populate aufs with modules:
umount /lib/modules /opt/000-kernel 2>/dev/null

#while read line; do
#    NAME=`basename "$line"`
#    mkdir /memory/images/"$NAME"
#    mount -o loop "$line" /memory/images/"$NAME" 2>/dev/null
#    if [ $? -eq 0 ]; then
#	echo "  $m  $NAME"; mount -no remount,add:1:/memory/images/"$NAME"=rr aufs /union
#    else
#	echo $i"[1;36m""Cannot read $NAME - corrupted module?""[0m"; rmdir /memory/images/"$NAME"
#    fi
#done < /tmp/modules

IncludeModules


#mount -no bind /union/lib/modules /lib/modules 2>/dev/null

# Add "changes on exit" device/file/folder:
#if [ -e /tmp/changes-exit ]; then
#    mkdir /memory/images/changes
#    if [ -d $CHNEXIT ]; then
#	mount -o bind $CHNEXIT/changes /memory/images/changes
#    elif [ -b /dev/mapper/crypt ]; then
#	mount /dev/mapper/crypt /memory/images/changes
#    else
#	mount -o loop $CHNEXIT /memory/images/changes
#    fi
#    echo "  $m  changes"; mount -no remount,add:1:/memory/images/changes=ro aufs /union
#    echo $CHNEXIT/changes >>/tmp/modules
#    param changes-ro && rm /tmp/changes-exit
#fi

debug
# Copy /rootcopy folder:
if param norootcopy; then
    ROOTCOPY=none
    echo $i"skipping /rootcopy directory"
else
    if [ $ROOTCOPY ]; then
	locate -d $ROOTCOPY
	if [ $? -eq 0 ]; then echo $i"copying content of $ROOTCOPY directory"; cp -af /mnt/$DEV/$LPTH/. /union/. 2>/dev/null; else fail $ROOTCOPY; ROOTCOPY=none; fi
    else
	ROOTCOPY=none
	echo $i"copying content of $PTH/rootcopy directory"
	cp -af $PTH/rootcopy/. /union/. 2>/dev/null
    fi
fi

# Collect boot arguments
#grep "^[aA0-zZ9]" $PORTCFG > /union/etc/bootcmd.cfg
#cat /proc/cmdline | tr ' ' '\n' >> /union/etc/bootcmd.cfg

## Finish:
# Create 7 free loop devices for truecrypt, etc...
#x=`losetup | tail -n1 | cut -d: -f1 | sed 's@/dev/loop@@'`
x=`grep -oE 'loop[0-9]+$' /proc/partitions  | tail -n1 | tr -d [:alpha:]`
let y=x+255
#while [ $x -le $y ]; do [ -b /dev/loop$y ] && break || mknod /dev/loop$y b 7 $y; let y=y-1; done
#x=`losetup | tail -n1 | cut -d: -f1 | sed 's@/dev/loop@@'`; let y=x+20
while [ $x -le $y ]; do [ -b /dev/loop$y ] && break || mknod /dev/loop$y b 7 $y; chmod g+rw-x,o-rwx /dev/loop$y; let y=y-1; done

if param nonetwork; then
    echo $i"disabling dhcpcd and NetworkManager services"
    chmod -x /union/etc/rc.d/rc.inet1 /union/etc/rc.d/rc.networkmanager 2>/dev/null
    nma=/union/etc/xdg/autostart/nm-applet.desktop
    test -e $nma && ! grep -q "Hidden=true" $nma && echo "Hidden=true" >> $nma
fi

if [ "$IP" -a -x /union/etc/rc.d/rc.networkmanager ]; then
    if [ -z "`egrep -o "copy2ram( |\$)" /proc/cmdline`" -o -d /mnt/nfs/storage/client-$MAC ]; then
#    if [ -z "`egrep -o "^copy2ram" /union/etc/bootcmd.cfg`" -o -d /mnt/nfs/storage/client-$MAC ]; then
	echo "nameserver $IP" > /union/etc/resolv.conf
	nmc=/union/etc/NetworkManager/NetworkManager.conf; HW=`ifconfig | grep eth0 | cut -dW -f2 | cut -d" " -f2`
	! grep -q "unmanaged-devices=mac:$HW" $nmc && sed -i '/\[keyfile\]/ a\unmanaged-devices=mac:'$HW'' $nmc
    fi
fi

if [ $IP ] && [ -f /etc/resolv.conf ]; then
    cp /etc/resolv.conf /union/etc/resolv.conf
fi

# Start bluetooth if cheat exists
if param bluetooth; then
	echo "Starting bluetooth ..."
	[ -e /union/etc/rc.d/rc.bluetooth ] && chmod +x /union/etc/rc.d/rc.bluetooth
fi

cp -af /dev/console /union/dev
#cat > /union/etc/mtab << EOF
#aufs / aufs rw 0 0
#proc /proc proc rw 0 0
#sysfs /sys sysfs rw 0 0
#devtmpfs /dev devtmpfs rw 0 0
#devpts /dev/pts devpts rw,mode=0620,gid=5 0 0
#EOF

fstab

debug
#if param copy2ram; then
if param copy2ram; then
    [ $CFGDEV = /mnt/isoloop -o $CFGDEV = /mnt/nfs ] && { umount `grep $CFGDEV /etc/mtab | sed -n 1p | cut -d" " -f2` 2>/dev/null; CFGDEV=$BOOTDEV; }
    CHNDISK=`echo $CHNDEV | cut -b6-8`; CFGDISK=`echo $CFGDEV | cut -b6-8`; REMOVABLE=`cat /sys/block/$CFGDISK*/removable 2>/dev/null`
    if [ -z "`egrep -o " noeject( |\$)" /etc/cmdline`" -a "$CHNDISK" != "$CFGDISK" ]; then
	if [ "$REMOVABLE" = 1 ]; then
	    for rdisk in `ls /mnt | grep $CFGDISK`; do
		umount -n /mnt/$rdisk 2>/dev/null && rmdir /mnt/$rdisk
		if [ $? -eq 0 ]; then
		    ! grep -qw "/dev/$rdisk.*iso9660" /etc/fstab && echo $rdisk >> /tmp/ejected || /union/bin/eject /dev/$rdisk
		    sed -i "/$rdisk/d" /etc/fstab
		fi
	    done
	    [ `ls /mnt | grep $CFGDISK` ] || echo $i"[1;36m""finished copying to RAM - booting media can be removed safely""[0m"
	else
	    if param nohd; then umount $CFGDEV 2>/dev/null; rmdir $CFGDEV 2>/dev/null; fi
	fi
    fi
fi

# Create debug file:
[ -e /tmp/devices ] && { echo "# Recognized devices:" >$livedbg; cat /tmp/devices >>$livedbg; }
[ $BOOTDEV ] && CFGDEV=$BOOTDEV
echo -e "\n# Booting device:\n$CFGDEV\n\n# data found in:\n$PTH\n\n# Changes are stored in:\n$CHANGES\n\n# Non standard /rootcopy dir:\n$ROOTCOPY\n\n# Modules activated during boot time:" >>$livedbg; cat /tmp/modules >>$livedbg
grep "^/mnt/isoloop" $livedbg && echo "" >> $livedbg && echo "ISO=$ISOSRC" >> $livedbg
#if [ $ISO ]; then
#	[ -d /union/mnt/isoloop ] && rmdir /union/mnt/isoloop
#	ln -sf /mnt/live/mnt/isoloop /union/mnt/isoloop
#fi
cp -af $livedbg /union/var/log/porteus-livedbg

## Check for text mode cheat code
#chk_bootcfg 3 && export OPTS="3"

cat /proc/cmdline

echo $i"changing root directory" 
for x in `ls -1 /union/mnt | grep -v live`; do
 echo $x
 [ -d /union/mnt/$x ] && rmdir /union/mnt/$x # Will fail if dir not empty!
 [ -L /union/mnt/$x ] && rm -f /union/mnt/$x
done
#if chk_bootcfg noauto; then
if grep -q noauto /proc/cmdline; then
  FDEV=`echo $CFGDEV | sed s@/mnt/@@`
  CDEV=`echo $CHNDEV | sed s@/mnt/@@`
[ $CDEV ] && echo $CDEV > /tmp/cdev
    for x in `grep /mnt/ /etc/fstab | cut -d/ -f3`; do mkdir -p /union/mnt/$x;
if grep -q copy2ram /proc/cmdline; then
  if [ $CFGDEV = $CHNDEV ]; then
[ "$FDEV" = "$x" ] && continue  # keep $x mounted
  else
[ "$CDEV" = "$x" ] && continue  # keep $x mounted
  fi
fi
if grep -qv copy2ram /proc/cmdline; then
 [ "$CDEV" = "$x" ] && continue  # keep $x mounted
fi
 umount -n /mnt/$x 2>/dev/null && rmdir /mnt/$x;
 done
else
    #grep /mnt/ /etc/fstab >> /union/etc/mtab
    for x in `grep /mnt/ /etc/fstab | cut -d/ -f3`; do mkdir -p /union/mnt/$x; mount -n --move /mnt/$x /union/mnt/$x; rmdir /mnt/$x; done
fi

sed -i 's/ ntfs / ntfs-3g /g' /etc/fstab
#cp -f /etc/fstab /union/etc 2>/dev/null

# Add all symlinks of all mount points at /mnt to union
#for x in `ls -1 /mnt`; do
# [ -d /union/mnt/$x ] && rmdir /union/mnt/$x
# ln -sf /mnt/live/mnt/$x /union/mnt/$x
#done

#cp -r /etc/porteus /union/etc 2>/dev/null
umount -n /lib/modules 2>/dev/null
rm -r /lib/* /usr/*

debug

echo "[1m""live system is ready now - starting Debian""[0m"

if param init=/bin/systemd; then
	if [ -f /union/lib/systemd/systemd ]; then
cp -f /union/lib/systemd/systemd /bin
		if [ $? -eq 0 ]; then
	mkdir -p /union/mnt/live
echo "[1m""using systemd...""[0m"
    pivot_root /union  /union/mnt/live
    exec usr/sbin/chroot . /mnt/live/bin/systemd "$@" <dev/console >dev/console 2>&1
		else
    echo -e "[31m""!!ERROR!!\nSomething went wrong and I cannot continue.\nPress Ctrl+Alt+Del to reboot.""[0m"
    sh  
		fi
	else
 echo "[1m""systemd not found, trying to use initscripts...""[0m" 
cp -f /union/sbin/init /bin
		if [ $? -eq 0 ]; then
	mkdir -p /union/mnt/live
    pivot_root /union  /union/mnt/live
    exec usr/sbin/chroot . /mnt/live/bin/init "$@" <dev/console >dev/console 2>&1
		else
    echo -e "[31m""!!ERROR!!\nSomething went wrong and I cannot continue.\nPress Ctrl+Alt+Del to reboot.""[0m"
    sh
		fi
	fi
else
    if [ -L /union/sbin/init ]; then
echo "[1m""/sbin/init appears to be a symlink, assuming systemd-sysv is installed""[0m"
echo "[1m""trying to switch to systemd now...""[0m"
cp -f /union/lib/systemd/systemd /bin
		if [ $? -eq 0 ]; then
	mkdir -p /union/mnt/live
echo "[1m""using systemd...""[0m"
    pivot_root /union  /union/mnt/live
    exec usr/sbin/chroot . /mnt/live/bin/systemd "$@" <dev/console >dev/console 2>&1
		else
    echo -e "[31m""!!ERROR!!\nSomething went wrong and I cannot continue.\nPress Ctrl+Alt+Del to reboot.""[0m"
    sh  
		fi
    else
cp -f /union/sbin/init /bin
		if [ $? -eq 0 ]; then
	mkdir -p /union/mnt/live
    pivot_root /union  /union/mnt/live
    exec usr/sbin/chroot . /mnt/live/bin/init "$@" <dev/console >dev/console 2>&1
		else
    echo -e "[31m""!!ERROR!!\nSomething went wrong and I cannot continue.\nPress Ctrl+Alt+Del to reboot.""[0m"
    sh
		fi
    fi
fi



