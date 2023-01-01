####################run-chromium-based-puppy.appimage.sh###############

#!/bin/sh
#Version v01
xhost +local:puppy
IMAGE_NAME=$1
#echo ${IMAGE_NAME:0:10}

PROFILE_PATH=/home/puppy/${IMAGE_NAME:0:10}/
sysctl kernel.unprivileged_userns_clone=1
echo $PROFILE_PATH
#sudo -u puppy /appimages/Internet/Google_Chrome-87.0.4280.141.glibc2.17-x86_64.AppImage --user-data-dir=$PROFILE_PATH.data/google-chrome-stable_puppy_user_data_dir --disk-cache-dir=$PROFILE_PATH.cache/google-chrome-stable_puppy_user_cache_dir --ppapi-flash-path=/usr/lib/adobe-flashplugin/libpepflashplayer.so  --ppapi-flash-version=29.0.0.171 --disable-features=TranslateUI --always-authorize-plugins --media-cache-size=10000000 "$@"
sudo -u puppy /appimages/Internet/"$@" --user-data-dir=$PROFILE_PATH.data --disk-cache-dir=$PROFILE_PATH.cache --ppapi-flash-path=/usr/lib/adobe-flashplugin/libpepflashplayer.so  --ppapi-flash-version=29.0.0.171 --disable-features=TranslateUI --always-authorize-plugins --media-cache-size=10000000 


=====================run-chromium-based-mnt-home-puppy.appimage.sh===================
#!/bin/sh
#Version v01
xhost +local:puppy
IMAGE_NAME=$1
#echo ${IMAGE_NAME:0:10}

PROFILE_PATH=/mnt/home/downloads_linux/.data/${IMAGE_NAME:0:10}/
sysctl kernel.unprivileged_userns_clone=1
echo $PROFILE_PATH
mkdir -p "$PROFILE_PATH"
#sudo -u puppy /appimages/Internet/Google_Chrome-87.0.4280.141.glibc2.17-x86_64.AppImage --user-data-dir=$PROFILE_PATH.data/google-chrome-stable_puppy_user_data_dir --disk-cache-dir=$PROFILE_PATH.cache/google-chrome-stable_puppy_user_cache_dir --ppapi-flash-path=/usr/lib/adobe-flashplugin/libpepflashplayer.so  --ppapi-flash-version=29.0.0.171 --disable-features=TranslateUI --always-authorize-plugins --media-cache-size=10000000 "$@"
sudo -u puppy /appimages/Internet/"$@" --user-data-dir=$PROFILE_PATH.data --disk-cache-dir=$PROFILE_PATH.cache --ppapi-flash-path=/usr/lib/adobe-flashplugin/libpepflashplayer.so  --ppapi-flash-version=29.0.0.171 --disable-features=TranslateUI --always-authorize-plugins --media-cache-size=10000000 



