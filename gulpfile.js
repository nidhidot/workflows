var gulp = require('gulp'),
gutil = require('gulp-util'),
coffee = require('gulp-coffee'),
concat = require('gulp-concat');

//gulp.task('log', function() {
  //gutil.log('Workflows are awesome');

//for more coffee scripts we use variables
//var coffeeSources = ['components/coffee/tagline or *.coffee']

var jsSources = [
  'components/scripts/bootstrap.js',
  'components/scripts/jquery.fancybox.js',
  'components/scripts/modernizr.custom.js',
  'components/scripts/tagline.js'
];

gulp.task('coffee', function() {
   gulp.src('components/coffee/tagline.coffee')
   //gulp.src(coffeeSources)
     .pipe(coffee({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))
     
});

gulp.task('js', function() {
   gulp.src(jsSources)
   .pipe(concat('script.js'))
   .pipe(gulp.dest('builds/development/js'))
});






















