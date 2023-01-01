JON_epoptes_key_commands.txt v221021,v220516tinymce back+refresh shortcut __(older v210915,v210606 ,with v210527 , v210511a)

examples ready commands
wmctrl -a Iron;xdotool key Ctrl+2;xdotool key Ctrl+m; # focus iron & Maximize window/browser

COMMANDS shortcuts 
wmctrl -a Iron;  #focus Iron browser

#Maximize window/browser
xdotool key Ctrl+m;  #Maximize window/browser

xdotool key F5; # refresh
xdotool key F11; # FULL screen

xdotool key ctrl+Tab;
xdotool key ctrl+Tab;xdotool key ctrl+Tab;

xdotool key alt+Tab;
xdotool key 0xff1b;  // ESCAPE key (eg exit from tuxmath)
xdotool key Ctrl+2;
xdotool key Alt+F4 ;#Close browser (softer than pkill)

xdotool key alt+Left; xdotool key F5; # press back button + refresh(for tinymce submited forms)

https://support.google.com/chrome/answer/157179?hl=en&co=GENIE.Platform%3DDesktop

_________________________

xdotool key Ctrl+F4; (close current browser tab)
xdotool key Ctrl+1-8 – Switch to the specified tab, counting from the left.
________________________________________
watch -n 30 'wmctrl -a Iron; xdotool key Ctrl+1;'; BASH REPEAT Command exery x seconds

______________________________
# Focus address bar and type url
xdotool key Ctrl+l ; xdotool type "hello world"; xdotool key Return;
____________________________________
#reload page (no need for probeserver refresh )
xdotool key alt+Tab;wmctrl -a Iron;xdotool key Ctrl+l ;  xdotool key Return;

_______________________________________
# Code org (1.close tab,2.open new tab,3.load code org URL)
xdotool key ctrl+F4 ;xdotool key ctrl+t;xdotool key Ctrl+l ; xdotool type "https://studio.code.org/s/course1/stage/3/puzzle/1"; xdotool key Return;
_____________________________________
NOT WORKING (lang change)
xdotool key alt+Shift;
xdotool key alt+Shift+alt;
_______________________
amixer set Master mute ; mute
amixer -c 0 set Master playback 100% unmute ; unmute
amixer -c 0 set Master playback 100% unmute ;amixer -c 0 set Speaker playback 100% unmute ;#unmute both Master+Speaker
#speaker-test & sleep 2; killall -1 speaker-test #works right away! #test ALSA sound for 2 seconds

_______________________

pkill -f chrome -SIGILL
pkill -f eduActiv8 -SIGILL;# for 32bit eduActiv8
pkill -f python2 -SIGILL;# for BullsEye eduActiv8
pkill -f /opt/eduActiv8/eduActiv8  (βγαζει μηνυμα για κλεισιμο - πρέπει χειροκίνητα)
pkill -f tuxpaint -SIGILL   

______________
sleep 3
hiawatha.sh stop
/opt/lampp/xampp startapache
/opt/lampp/manager-linux-x64.run


#/opt/lampp/xampp startapache

_______________


labrat mikres takseis week42
 <a href="http://192.168.1.200/swf/fun/maze/labrat__maze-kids_needFastPC_unencr2noAdsURL_cheat_GR01_!!.swf" target="sideframe1">labrat_cheat_GR01_!!.swf<br></a>



OLOHMERO Pack refresh_browser ADDON
 <a href="http://192.168.1.200/swf/fun/treasure_of_cutlass_reef-__pirate-ship-battle__NoNavUrl!!!.swf" target="sideframe1">treasure_of_cutlass_reef-__pirate-ship-battle__NoNavUrl!!!.swf<br></a>

  <a href="http://192.168.1.200/swf/fun/pointclick/snail-bob2_noNavUrl.swf" target="sideframe1">snail-bob2_noNavUrl.swf<br></a>

  pirate_chaos_abroy_pointclick_NoNavUrl.swf
  adam-and-eve__point-click_NoNavUrl.swf

  ---------------
  <a href="http://192.168.1.200/swf/fun/puzzle_board/floodedVillage_BoysLife2_puzzle_unlocked_NoNavUrl.swf" target="sideframe1">floodedVillage_BoysLife2_puzzle_unlocked_NoNavUrl.swf<br></a>
_________________________
RUN AS ROOT (swf/john_exec_cmd_on_client.sh)
set time
date +%T -s "7:55:05"

____________________________
rm /root/.config/xfce4/panel/launcher-2/13879159301.desktop # remove logout option RIGHT-DOWN button


__________________
fetch from 192.168.1.200/uploads (and put to 32bit OS live folder)
file_fetch32.sh "myfile.sfs"

__________________
test

xdotool search --class chrome windowfocus key ctrl+Tab

______________________________

TARGET_FOLDER="/mnt/home/schdog64clnt/sch_appimages_start64_v01_.squashfs";rm -r "$TARGET_FOLDER";leafpad "DELETE REMOVE OK 1";
_______________________________________
TARGET_FOLDER="/mnt/home/schdog64clnt/live/";cd "$TARGET_FOLDER";wget --no-clobber --directory-prefix="$TARGET_FOLDER" -O "nameoffile.squashfs" "https://1fichier.com/?pvbidk0jx2piklgm5ub8";# DOWNLOAD file to live folder

_________________________________
Game Design (epoptes)
google-chrome-stable-puppy-home.sh --start-maximized https://make.gamefroot.com/games/new

____________________
# Code org (1.close tab,2.open new tab,3.load code org URL)
xdotool key ctrl+F4 ;xdotool key ctrl+t;xdotool key Ctrl+l ; xdotool type "https://studio.code.org/s/course1/stage/3/puzzle/1"; xdotool key Return;  

#open funbrain page
[[ $(xset -q) =~ (Caps Lock: *on) ]] && xdotool key Caps_Lock;xdotool key ctrl+t;xdotool key Ctrl+l ; xdotool type "http://192.168.1.200/swf/funbrain.html?timer3&probeserver"; xdotool key Return; 

# Disable CAPS lock and Open page
[[ $(xset -q) =~ (Caps Lock: *on) ]] && xdotool key Caps_Lock;xdotool key ctrl+t;xdotool key Ctrl+l ; xdotool type "http://192.168.1.200/swf/pack_pointclick1.html"; xdotool key Return;                                                                   