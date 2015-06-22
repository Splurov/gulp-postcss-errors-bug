var gulp = require('gulp');
var tap = require('gulp-tap');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('test', function() {

    gulp.src('src/test.css')
        .pipe(postcss([autoprefixer()]))
        .pipe(tap(function(file) {
            throw new Error('this error never shown due to postcss');
        }))
        .pipe(gulp.dest('dest/'));

});
