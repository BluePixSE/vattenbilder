'use strict';


var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    ngAnnotate  = require('gulp-ng-annotate');


var includes = require('../includes').js;


module.exports = function() {

    gulp.task('build-js', function() {
        return gulp.src(includes)
            .pipe(concat('main.js'))
            .pipe(gulp.dest('./www/js/'));
    })

};