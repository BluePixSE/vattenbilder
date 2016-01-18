'use strict';

var gulp = require('gulp');


module.exports = function() {

    gulp.task('watch', function() {
        gulp.watch('./assets/js/**/*.js', ['build-js']);
        gulp.watch('./assets/sass/**/*.scss', ['build-css']);
        gulp.watch('./assets/*.html', ['copy-index']);
        gulp.watch('./assets/templates/**/*.html', ['copy-templates']);
    });

};