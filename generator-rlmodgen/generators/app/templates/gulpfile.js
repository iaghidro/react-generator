var gulp = require('gulp');
var babel = require('gulp-babel');
var ngTemplateStrings = require('gulp-ng-template-strings');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var runSequence = require('run-sequence');

function scripts() {

  return gulp.src('src/js/**/*')
    .pipe(ngTemplateStrings({ cwd: 'templatebuild/'}))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build/js/'));
}

function styles() {
  return gulp.src('src/styles/**/*.scss')
  .pipe(gulp.dest('build/'));
}

function templates() {
  return gulp.src('src/templates/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('templatebuild/'));
}

gulp.task('scripts', scripts);
gulp.task('templates', templates);

gulp.task('default', function() {
  runSequence('templates', 'scripts');
  styles();

  gulp.watch(['src/js/**', 'src/templates/**'], function(event) {
    runSequence('templates', 'scripts');
  });

  gulp.watch(['src/styles/**'], function(event) {
    styles();
  });
});

gulp.task('build', function() {
  runSequence('templates', 'scripts');
  styles();
});
