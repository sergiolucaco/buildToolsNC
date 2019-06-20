'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
const del = require('del');
 
sass.compiler = require('node-sass');
var dist = './dist/';
var src = './src/';
var paths = {
    srcScss: `${src}scss/main.scss`,
    distCSS: `${dist}css`
} 
gulp.task('sass', function () {
  return gulp.src(paths.srcScss)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(paths.distCSS));
});

gulp.task('clean', function () {
    return del([`${dist}*`]);
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass')));