#Basic
=======
cd
ls
pwd
mv
cp
rm
mkdir
clear
exit
whoami
hostname
uname -a

#Utility
========
ssh
pssh
scp
rsync
kill
pkill
service
unzip
tar -xzvf
script
awk
find . -name '*.cfg'
screen
tmux
which
whatis
du -hsx * | sort -rh | head -10 #largest files
neofetch

#Filesystem
==========
df -h
inxi -Sp # paritions and mountpoints
swapon # swap info
mount
umount
chmod
chown
free -m
head -n 4 /proc/meminfo 

#Package Manager
===============
apt-get update
apt-get upgrade
apt install
apt remove

#Text
=========
echo
cat
head
tail
more
less
grep -rni
diff
wc -l

#Grep
=======
grep "pattern" fileName
-x (exact match)
-v (exact unmatch)
-w (full words)
-o (output matched string, not line)
-i (ignore case)
-r (curr dir, and subdirs)
-c (count # matches)

#Network
=============
ifconfig
ping
curl
http
ncat
nmap
netstat

#Graphics
=============
nvidia-smi
vdpauinfo
