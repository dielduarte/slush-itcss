/*
 * slush-itcss
 * https://github.com/dielduarte/slush-itcss
 *
 * Copyright (c) 2015, Diel Duarte
 * Licensed under the MIT license.
 */

'use strict';

var gulp     = require('gulp'),
    install  = require('gulp-install'),
    conflict = require('gulp-conflict'),
    _        = require('underscore.string');


gulp.task('default', function(done) {

    gulp.src(__dirname + '/templates/**')
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', function() {
            done();
        });
});