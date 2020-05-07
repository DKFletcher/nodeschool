#!/usr/bin/env bash  
#newArray[0]=I
#newArray[1]=am
newArray=(I am ${@:2:2} and ${@:4:1})
echo ${newArray[@]}