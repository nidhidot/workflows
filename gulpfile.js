var gulp = require('gulp'),
gutil = require('gulp-util'),
coffee = require('gulp-coffee'),
browserify = require('gulp-browserify'),
compass = require('gulp-compass'),
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

var sassSources = ['components/sass/style.scss'];

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
   .pipe(browserify())
   .pipe(gulp.dest('builds/development/js'))
});


gulp.task('compass', function() {
   gulp.src(sassSources)
   .pipe(compass({
     sass: 'components/sass',
     image: 'builds/development/images',
     style: 'expanded'
   }))
   .on('error', gutil.log)
   .pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function() {
 // gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);

});

//gulp.task('all', ['coffee', 'js', 'compass']);
gulp.task('default', ['coffee', 'js', 'compass', 'watch']);


















