var gulp = require('gulp');
var reactify = require('gulp-reactify')
var reactTools = require('react-tools');

// Task: Default
// ------------------------------------------
gulp.task('default', ['jsx']);

gulp.task('jsx', function() {
  gulp.src('*.jsx')
    .pipe(reactify({reactTools: reactTools}))
    .pipe(gulp.dest('.'));
});
