'use strict';

var gulp = require('gulp');


module.exports = function() {

    gulp.task('run', [
        'build-js',
        'build-css',
        'copy-index',
        'copy-templates'
    ])

};