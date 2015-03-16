var gulp            = require('gulp'),
    server          = require('gulp-webserver')
    ;

gulp.task('serve', function(){
    return gulp.src('src/')
        .pipe(server({
          open: true,
          port: 8833
      }));
});
