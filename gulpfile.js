
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const del = require('del');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const nunjucks = require('gulp-nunjucks');
const htmlmin = require('gulp-htmlmin');
const gulpIf = require('gulp-if');

const isProduction = process.env.NODE_ENV === 'production';

sass.compiler = require('node-sass');
const dist = './dist/';
const src = './src/';
const paths = {
  srcScss: `${src}scss/main.scss`,
  watchSrcScss: `${src}scss/**/*.scss`,
  watchSrcJs: `${src}js/**/*.js`,
  watchSrcHtml: `${src}**/*.html`,
  srcJs: `${src}js/index.js`,
  srcHtml: `${src}/*.html`,
  distCSS: `${dist}css`,
  distJs: `${dist}js`
}

gulp.task('sass', function () {
  return gulp.src(paths.srcScss)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(paths.distCSS));
});

gulp.task('js', () => {
  return gulp.src(paths.srcJs)
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(webpack({ mode: process.env.NODE_ENV }))
    .pipe(rename('index.js'))
    .pipe(gulp.dest(paths.distJs))
});

gulp.task('html', () =>
  gulp.src(paths.srcHtml)
    .pipe(nunjucks.compile())
    .pipe(gulpIf(isProduction, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(dist))
);

gulp.task('clean', function () {
  return del([`${dist}*`]);
});

gulp.task('build', gulp.series('clean', gulp.parallel('sass', 'js', 'html')));

gulp.task('watch', gulp.series('build', function () {
  gulp.watch(paths.watchSrcScss, gulp.series('sass'))
  gulp.watch(paths.watchSrcJs, gulp.series('js'))
  gulp.watch(paths.watchSrcHtml, gulp.series('html'))
}))