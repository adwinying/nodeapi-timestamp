var gulp    = require('gulp')
var nodemon = require('nodemon')
var jshint  = require('gulp-jshint')
var mocha   = require('gulp-mocha')

var jsfiles = ['*.js', './tests/*.js']

gulp.task('lint', () => {
	return gulp.src(jsfiles)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish', {
      verbose: true
    }))
    .on('error', function() {
      console.log('Tests failed!');
      error = true;
    })
})

gulp.task('watch', () => {
	return nodemon({
		script: 'app.js',
		watch: jsfiles,
		delayTime: 1,
		env: {
			'PORT': 3000
		}
	}).on('restart', () => {
		console.log('Restarting server...\n')
	})
})

gulp.task('default', ['lint'], () => {
	gulp.start('watch');
	gulp.watch(['*.js'], ['lint'])
})
