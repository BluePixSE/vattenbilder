'use strict';


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


var includes = require('../includes').css;


module.exports = function() {

    gulp.task('build-css', function() {
        gulp.src(includes)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./www/css/'));
    });

};