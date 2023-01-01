# Wipe script v210615(to run from epoptes)
#bcdedit /default {current}	
#bcdedit /timeout 3
TARGET_FOLDER="/mnt/home/schdog64clnt/";rm -r "$TARGET_FOLDER";leafpad "OK 1";
TARGET_FOLDER="/mnt/home/downloads_linux/";rm -r "$TARGET_FOLDER";leafpad "OK 2";
TARGET_FOLDER="/mnt/home/stretchdog-debdive64/live/";rm -r "$TARGET_FOLDER";
TARGET_FOLDER="/mnt/home/dogbuster_mklive64/live/";rm -r "$TARGET_FOLDER";leafpad "OK 4";TARGET_FOLDER="/mnt/home/LICK-1.3.3-win32";rm -r "$TARGET_FOLDER";leafpad "OK 5";
TARGET_FOLDER="/mnt/home/stretchdog-debdive32/";rm -f "$TARGET_FOLDER""*.ini";rm -f /mnt/home/stretchdog-debdive32/*.ini;rm -f /mnt/home/stretchdog-debdive32/*.lst;rm -f /mnt/home/stretchdog-debdive32/*.tgz;rm -f /mnt/home/stretchdog-debdive32/*.cfg;rm -f /mnt/home/stretchdog-debdive32/*.txt;rm -f /mnt/home/stretchdog-debdive32/live/*.sh;rm -f /mnt/home/stretchdog-debdive32/live/*.*OLD;rm -f /mnt/home/stretchdog-debdive32/live/*.*DISABLED;


TARGET_FOLDER="/mnt/home/schdog64clnt_OLD/";rm -r "$TARGET_FOLDER";TARGET_FOLDER="/mnt/home/downloads_linux/uploads/";rm -r "$TARGET_FOLDER";mv /mnt/home/lickmenu.lst /mnt/home/lickmenu.TST;rm -f /mnt/home/*.lst;rm -f /mnt/home/lick*.cfg;mv /mnt/home/lickmenu.TST /mnt/home/lickmenu.lst;rm -f /mnt/home/iron*.tgz;rm -f /mnt/home/downloads_linux/*.*;

# Put restore bat to windows : File Contains #bcdedit /default {current}	#bcdedit /timeout 3
cd /mnt/home/downloads_linux/;wget http://192.168.1.200/uploads/restore_bootbcd.bat;


#windows 10 startup folder download file  to start up
cd "/mnt/home/ProgramData/Microsoft/Windows/Start Menu/Programs/StartUp";wget http://192.168.1.200/uploads/windows_startup_test01.bat;