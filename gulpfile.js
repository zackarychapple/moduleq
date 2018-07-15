"use strict";

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  fileinclude = require('gulp-file-include'),
  connect = require('gulp-connect'),
  shorthand = require('gulp-shorthand'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCSS = require('gulp-minify-css');


var scss_path = ['scss/*.scss', 'scss/*/*.scss'],
  inc_file = 'template/*.html',
  template_file = 'template/include/*.html',
  img_file = 'images/*',
  img_file_sprite = 'images/icon/*.*';


gulp.task('connect', function () {
  connect.server({
    port: 8888,
    root: '',
    livereload: true
  });
});


gulp.task('scss', function () {
  gulp.src(scss_path)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    //.pipe(shorthand())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('css/'))
    .pipe(connect.reload());
});


gulp.task('include', function () {
  gulp.src([inc_file])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(connect.reload())
    .pipe(gulp.dest('./'))

});

gulp.task('js', function () {
  gulp.src('js/*.js') // path to your files
    .pipe(connect.reload())
});


gulp.task('watch', function () {
  gulp.watch([inc_file, template_file], ['include']);
  gulp.watch([scss_path], ['scss']);
  gulp.watch([img_file_sprite], ['sprite']);
  gulp.watch(['js/*.js', 'js/libs/*.js'], ['js']);
});

gulp.task('build', function () {
  gulp.src(['./*.html']).pipe(gulp.dest('./dist/'));
  gulp.src(['./css/**']).pipe(gulp.dest('./dist/css'));
  gulp.src(['./js/**']).pipe(gulp.dest('./dist/js'));
  gulp.src(['./fonts/**']).pipe(gulp.dest('./dist/fonts'));
  gulp.src(['./images/**']).pipe(gulp.dest('./dist/images'));
});

gulp.task('default', ['include', 'connect', 'watch']);



