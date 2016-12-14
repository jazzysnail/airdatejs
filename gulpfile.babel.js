'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import es2016 from 'babel-preset-es2016';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';

const paths = {
  dist: 'build/',
  source: 'source/',
  test: 'test/'
};

gulp.task('build', () => {
  gulp.src(`${paths.source}airDate.js`)
    .pipe(babel({presets:[es2016]}))
    .pipe(gulp.dest(`${paths.dist}`));
  gulp.src(`${paths.dist}airDate.js`)
    .pipe(uglify())
    .pipe(rename('airDate.min.js'))
    .pipe(gulp.dest(`${paths.dist}`));
});

gulp.task('dev', () => {
  gulp.watch(`${paths.source}airDate.js`, () => {
    return gulp.src(`${paths.source}airDate.js`)
      .pipe(babel({presets:[es2016]}))
      .pipe(gulp.dest(`${paths.test}`))
  });
});
