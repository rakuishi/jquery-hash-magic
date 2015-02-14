var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('jsmin', function() {
  gulp.src('./jquery.hash-magic.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'))
    .pipe(gulp.dest('./demo/js/'));
});