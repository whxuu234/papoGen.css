#!/bin/bash
# Program: Compile papogen.scss and generate papogen.css file in /lib/asset/ 

sass scss/papogen.scss docs/css/papogen.css --quiet
echo Sass/SCSS compiled finished. 
