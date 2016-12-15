'use strict';

import gulp from 'gulp';
import less from 'gulp-less';

const paths = {
  dest: '../../build/theme',
  test: '../../test/theme'
};

gulp.task('theme', () => {
  gulp.src(`./**/*.less`)
    .pipe(less())
    .pipe(gulp.dest(`${paths.dest}`));
});

gulp.task('weaving', () => {
  gulp.watch('./**/*.less', () => {
    return gulp.src(`./**/*.less`)
      .pipe(less())
      .pipe(gulp.dest(`${paths.test}`));
  });
});
