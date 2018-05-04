#!/bin/bash
# Program: Compile papogen.scss and generate papogen.css file in /lib/asset/ 

sass scss/papogen.scss test/css/papogen.css
echo SCSS compiled successful. 
