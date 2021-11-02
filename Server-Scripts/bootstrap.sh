#!/bin/bash

#Upadte height on website
./getheight.sh | jq -r . > height.json
sleep 5
mv -f height.json /var/www/html
sleep 5

#Stop the node
pkill -SIGINT -f "kryptokrona"

#Wait for the node to stop
sleep 30m

#ZIP the .bin files
zip -r bootstrap.zip .kryptokrona/*.bin

#Move it to webfolder
mv -f bootstrap.zip /var/www/html

#Start the node
screen -S node -X stuff './startnode.sh\n'