import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import rename from 'gulp-rename';

function optimizeSVG() {
  return gulp
    .src('public/**/*.svg')
    .pipe(svgmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('public')); 
}


gulp.task('default', optimizeSVG);


