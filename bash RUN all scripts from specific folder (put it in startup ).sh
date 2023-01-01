# RUN all scripts from specific folder (put it in startup )
#for f in "/mnt/home/downloads_linux/linux_/BULLSEYE/*.sh"; do
cd /tmp/aaaa/
for f in *.sh; do
	echo "$f"	
  bash "$f" &
done