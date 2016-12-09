'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import es2015 from 'babel-preset-es2015';

const paths = {
  dest: 'build/',
  source: 'source/',
  test: 'test/'
};

gulp.task('build', () => {
  gulp.src(`${paths.source}airDate.js`)
    .pipe(babel({presets:[es2015]}))
    .pipe(gulp.dest(`${paths.dest}`))
});

gulp.task('watcher', () => {
  gulp.watch('./**/*.less', () => {
    return gulp.src(`${paths.source}airDate.js`)
      .pipe(babel({presets:[es2015]}))
      .pipe(gulp.dest(`${paths.test}`))
  });
});
