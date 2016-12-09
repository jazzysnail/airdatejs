'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import es2016 from 'babel-preset-es2016';

const paths = {
  dest: 'build/',
  source: 'source/',
  test: 'test/'
};

gulp.task('build', () => {
  gulp.src(`${paths.source}airDate.js`)
    .pipe(babel({presets:[es2016]}))
    .pipe(gulp.dest(`${paths.dest}`))
});

gulp.task('watcher', () => {
  gulp.watch(`${paths.source}airDate.js`, () => {
    return gulp.src(`${paths.source}airDate.js`)
      .pipe(babel({presets:[es2016]}))
      .pipe(gulp.dest(`${paths.test}`))
  });
});
