var gulp = require('gulp'),
gutil = require('gulp-util'),
coffee = require('gulp-coffee'),
browserify = require('gulp-browserify'),
compass = require('gulp-compass'),
connect = require('gulp-connect'),
concat = require('gulp-concat');

var env,
    coffeeSources,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

var env = process.env.NODE_ENV || 'development';
  
//var env = process.env.NODE_ENV = 'production';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'expanded';
}
else {
 outputDir = 'builds/production/';
 //sassStyle = 'Compressed';
}

//gulp.task('log', function() {
  //gutil.log('Workflows are awesome');

//for more coffee scripts we use variables
//var coffeeSources = ['components/coffee/tagline or *.coffee'];
coffeeSources = ['components/coffee/tagline or *.coffee'];


//var jsSources = [
jsSources = [
  'components/scripts/bootstrap.js',
  'components/scripts/jquery.fancybox.js',
  'components/scripts/modernizr.custom.js',
  'components/scripts/tagline.js'
];

//var sassSources = ['components/sass/style.scss'];
sassSources = ['components/sass/style.scss'];

//var htmlSources = ['builds/development/*.html'];
htmlSources = [outputDir + '*.html'];

gulp.task('coffee', function() {
  // gulp.src('components/coffee/tagline.coffee')
   gulp.src(coffeeSources)
     .pipe(coffee({ bare: true })
        .on('error', gutil.log))
        .pipe(gulp.dest('components/scripts'))     
});

gulp.task('js', function() {
   gulp.src(jsSources)
   .pipe(concat('script.js'))
   .pipe(browserify())
   .pipe(gulp.dest('outputDir + js'))
   .pipe(connect.reload());
});


gulp.task('compass', function() {
   gulp.src(sassSources)
   .pipe(compass({
     sass: 'components/sass',
     image: 'outputDir + images',
     //style: 'expanded'
     style: sassStyle
   }))
   .on('error', gutil.log)
   .pipe(gulp.dest(outputDir + 'css'))
   .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*.scss', ['compass']);
  gulp.watch(htmlSources, ['html']);
  

});

gulp.task('connect', function() {
  connect.server({
     root: outputDir,
     livereload: true
   });
});

gulp.task('html', function() {
  gulp.src(htmlSources)
.pipe(connect.reload())
});

//gulp.task('all', ['coffee', 'js', 'compass']);
gulp.task('default', ['html', 'coffee', 'js', 'compass', 'connect', 'watch']);


















