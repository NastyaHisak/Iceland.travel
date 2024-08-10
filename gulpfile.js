'use strict';

const { src, dest, watch, series} = require('gulp');     
  const less = require('gulp-less');
  const cssmin = require('gulp-cssmin');
  const rename = require('gulp-rename');
  
  exports.less = function() {
    return src('./less/style.less') 
    .pipe(less()) 
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./dist')) 
  }

  exports.watch = function () {
    watch('./less/*.less', series('less'));
 };