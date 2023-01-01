Iron32 & 64
==================================================
# TEST run iron32 /64
SERVER="http://192.168.1.200/";
SWFlocal=""$SERVER"swf/"


ironstartincognito() {

# . iron_flash_puppy_pepper_home.sh "--incognito ""$@"   #OK work 32bit
 AAA="--incognito ""$@" 
 . iron_flash_puppy_pepper_home.sh $AAA
#. iron_flash_puppy_pepper.sh "--incognito "$@
return 5
}

ironstartincognito ""$SWFlocal"pack_paint1.html?timer3\&norightclick\&probeserver hello"


ironstartincognito32() {
# . iron_flash_puppy_pepper_home.sh "--incognito ""$@"   #OK work 32bit
# . iron_flash_puppy_pepper_home.sh "--incognito ""$@" 
 AAA="--incognito ""$@" 
. /tmp/iron32_flash_puppy_pepper.sh $AAA
return 5
}

ironstartincognito32 ""$SWFlocal"pack_paint1.html?timer3\&norightclick\&probeserver hello"


==================================================
Iron32 ---:
#ORIG#su - puppy -c "/usr/share/iron_flash/chrome-wrapper $1 --disable-translate --user-data-dir=/home/puppy/iron_flash_puppy_user_data_dir --disk-cache-dir=/home/puppy/.cache/iron_flash  --ppapi-flash-path=/usr/share/iron_flash/extensions/libpepflashplayer.so --ppapi-flash-version=31.0.0.108 --always-authorize-plugins"

sudo -u puppy /usr/share/iron_flash/chrome-wrapper $@ --disable-translate --user-data-dir=/home/puppy/iron_flash_puppy_user_data_dir --disk-cache-dir=/home/puppy/.cache/iron_flash  --ppapi-flash-path=/usr/share/iron_flash/extensions/libpepflashplayer.so --ppapi-flash-version=31.0.0.108 --always-authorize-plugins
==================================================
Iron64bit---
xhost +
sudo -u puppy /usr/share/iron_flash/chrome-wrapper $@ --disable-translate --disable-features=TranslateUI --user-data-dir=/home/puppy/iron61_flash --disk-cache-dir=/home/puppy/.cache/iron61_flash  --ppapi-flash-path=/usr/share/iron_flash/extensions/libpepflashplayer.so --ppapi-flash-version=32.0.0.101 --always-authorize-plugins
