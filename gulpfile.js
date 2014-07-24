var gulp 	= require('gulp');
var nodemon = require('gulp-nodemon');
var jshint	= require('gulp-jshint');
var lab		= require('gulp-lab');

// validate lint
gulp.task('lint', function() {
	gulp.src(['./server/**/*.js', './test/**/*.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// run test
gulp.task('test', ['lint'], function() {
	gulp.src('./test/**/*.js')
		.pipe(lab());
});

// restart the server for changes through nodemon
gulp.task('default', function() {
	nodemon({ script: 'server.js', ext: 'html js css' });
});