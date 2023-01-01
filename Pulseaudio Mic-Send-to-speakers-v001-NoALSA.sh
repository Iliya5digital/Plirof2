#!/bin/sh

pulseaudio --system &

#https://languor.us/kubuntu-pulseaudio-record-both-mic-and-system-audio
alias micon='pactl load-module module-loopback latency_msec=1'
alias micoff='pactl unload-module module-loopback'
pactl load-module module-loopback latency_msec=1


pavucontrol &

sudo chown root /opt/google/chrome/chrome-sandbox
sudo chmod 4755 /opt/google/chrome/chrome-sandbox
google-chrome-stable --no-sandbox --disable-features=TranslateUI --always-authorize-plugins --media-cache-size=10000000 "$@" &


/appimages/streaming/obs-studio-plus-25.0.8-x86_64.AppImage