var gulp = require('gulp'),
gutil = require('gulp-util'),
coffee = require('gulp-coffee');

//gulp.task('log', function() {
  //gutil.log('Workflows are awesome');

//for more coffee scripts we use variables
//var coffeeSources = ['components/coffee/tagline or *.coffee']

gulp.task('coffee', function() {
   gulp.src('components/coffee/tagline.coffee')
   //gulp.src(coffeeSources)
     .pipe(coffee({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
     
});