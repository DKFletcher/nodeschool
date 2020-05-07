#!/usr/bin/env bash  
widths=(320 360 375 412 414 480 600 768 800 1024 1280)
len=${#widths[@]}
for ((i=0; i<len; i++))
do
    echo $widths[i]
done