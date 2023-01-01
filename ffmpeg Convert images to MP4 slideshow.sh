#bash-linux scan folder and create .desktop files 
# Convert images to MP4 

yourfilenames=`ls ./*/*.JPG`

#framerate 0.2 seems more normal FPS for slideshow
FRAMERATE=0.2
FILEFILTER='*.JPG'

for D in *; do
    if [ -d "${D}" ]; then
        echo "${D}"   # your processing here
        ffmpeg -framerate $FRAMERATE -pattern_type glob -i "${D}/"'*.JPG' "${D}/""${D}"_output.mp4
    fi
done