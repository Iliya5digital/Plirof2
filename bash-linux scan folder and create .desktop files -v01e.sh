#bash-linux scan folder and create .desktop files 
# v01 -201216d
yourfilenames=`ls /appimages/*/*.?pp?mage`

for FILE in $yourfilenames;
	do 
		LAST_FOLDER=$(basename $(dirname $FILE))
		#echo $(basename "${FILE%.*}".AppImage)
		echo $(basename "${FILE%}")
		echo "LAST FOLDER="$LAST_FOLDER
		#echo $FILE; 
	done



yourfilenames=`ls /appimages/*/*.?pp?mage`

#for FILE in /appimages/*.?pp?mage; 
for FILE in $yourfilenames;
	do 
LAST_FOLDER=$(basename $(dirname $FILE))
DESKTOP_FILENAME=$LAST_FOLDER"-"$(basename "${FILE%}")".desktop"
#echo $FILE;

#cat > "/tmp/aa/chromium-browser_changesdat-aa.xx" << EOF3
#cat > "/tmp/aa/chromium-browser_changesdat-"${FILE%%.*}.desktop << EOF3
#mkdir -p /tmp/aa/;cat > "/tmp/aa/AppImage-"$(basename "${FILE%}").desktop << EOF3
#mkdir -p /root/Desktop/AppImages;cat > "/root/Desktop/AppImages/AppImage-"$(basename "${FILE%}").desktop << EOF3
#cat > "/usr/local/share/applications/AppImage-"$LAST_FOLDER"-"$(basename "${FILE%}").desktop << EOF3
#mkdir -p /root/Desktop/AppImages;cat > "/usr/local/share/applications/AppImage-"$DESKTOP_FILENAME << EOF3
mkdir -p /root/Desktop/AppImages;cat > "/root/Desktop/AppImages/AppImage-"$DESKTOP_FILENAME << EOF3
[Desktop Entry]
Version=1.0
Name=$DESKTOP_FILENAME
Exec=$FILE
Terminal=false
#X-MultipleArgs=false
Type=Application
#Icon=/usr/share/pixmaps/chromium.xpm
Categories=X-AppImages;
StartupNotify=true
EOF3
chmod u+x "/root/Desktop/AppImages/AppImage-"$DESKTOP_FILENAME
ln -s "/root/Desktop/AppImages/AppImage-"$DESKTOP_FILENAME /usr/local/share/applications

	done