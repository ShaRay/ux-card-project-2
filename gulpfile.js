var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

gulp.task('default', ['scss:watch', 'serve']);

gulp.task('scss', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scss:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['scss']);
});

gulp.task('serve', serve('./'));