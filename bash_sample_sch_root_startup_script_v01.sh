#bash put this script to your /root/Startup/
#This will call the code that is contained in another pastebin (eg https://pastebin.com/raw/REcWVfcL), rename it and execute it
SCHOOL_SCRIPT=john_downloads_remote_dim-ONOMA.sh
SCHOOL_SCRIPT=john_downloads_remote_dim-kavala.sh

cd /tmp/
##change dimotiko number/name to what is needed##
(SCHOOL_SCRIPT=pastebin.sh; cd /tmp/;wget  -T 10 "https://pastebin.com/raw/REcWVfcL" -O "$SCHOOL_SCRIPT" --directory-prefix=/tmp/; chmod a+x "/tmp/""$SCHOOL_SCRIPT";./"$SCHOOL_SCRIPT")