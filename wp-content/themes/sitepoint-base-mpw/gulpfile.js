var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('scripts', function() {
  return gulp.src('./js/vendor/*.js')
    .pipe(concat('vendors.js'))
    .pipe(gulp.dest('./js/'))
});
gulp.task('scriptsmin', function() {
  return gulp.src('./js/vendors.min.js')
    .pipe(gulpIf('./js/vendors.js', uglify()))
    .pipe(gulp.dest('./js/'));
});
