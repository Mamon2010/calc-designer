var gulp = require('gulp');
var browserSync = require('browser-sync').create();
//var less = require('gulp-less');
var sass = require('gulp-sass');

gulp.task('server', ['styles'], function() {
    browserSync.init({
    	server: { baseDir: './src/'}
    });
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./src/sass/**/*.sass', ['styles']);
});

gulp.task('styles', function() {
    return gulp.src('./src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['server']);
