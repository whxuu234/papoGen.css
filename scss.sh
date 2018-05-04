#!/bin/bash
# Program: Compile papogen.scss and generate papogen.css file in /lib/asset/ 

sass scss/papogen.scss docs/css/papogen.css
echo SCSS compiled successful. 
