'use strict';


var gulp = require('gulp'),
    templateCache = require('gulp-angular-templatecache');



module.exports = function() {

    gulp.task('copy-index', function() {
        return gulp.src('./assets/*.html')
            .pipe(gulp.dest('./www/'));
    });

    gulp.task('copy-templates', function() {
        return gulp.src('./assets/templates/**/*.html')
            .pipe(templateCache({module:'vattenbilder'}))
            .pipe(gulp.dest('./www/js/'));
    });

    gulp.task('copy-images', function() {
        return gulp.src('./assets/img/*')
            .pipe(gulp.dest('./www/img/'));
    });

    gulp.task('copy-fonts', function() {
        return gulp.src('./assets/fonts/*')
            .pipe(gulp.dest('./www/fonts/'));
    });

};