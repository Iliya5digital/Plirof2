# replace {41b17a2d-263a-11eb-8871-8b8512b6fe20} with the ID that is returned after the first command
#grub4dos  Booting GRUB for DOS via the Windows Vista boot manager
#Use bcdedit to configure the startup menu:
bcdedit /create /d "Start GRUB4DOS" /application bootsector
bcdedit /set {41b17a2d-263a-11eb-8871-8b8512b6fe20} device boot
bcdedit /set {41b17a2d-263a-11eb-8871-8b8512b6fe20} path \grldr.mbr
bcdedit /displayorder {41b17a2d-263a-11eb-8871-8b8512b6fe20} /addlast

#Then copy grldr.mbr to C:\, 
#grldr and menu.lst to the root directory of any FAT16/FAT32/NTFS/EXT2 partition.https://github.com/noryb009/lick/releases/tag/v1.1.0