'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    filter = require('gulp-filter');

gulp.task('styles', function() {
    return gulp
        .src('src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(
            // {outputStyle: 'compressed'}
            )
            .on('error', function(err) {
                console.error('\x07'); // so it doesn't just fail (literally) silently!
                sass.logError.bind(this)(err);
            }))
        .pipe(autoprefixer(
            {
                grid: true
                // ,overrideBrowserslist: ['>1%, ie 11']
            }))
        .pipe(sourcemaps.write('.'))
        .pipe(filter('**/*.css'))
        .pipe(gulp.dest('assets'));
});

gulp.task('sprites', function () {
    return gulp
        .src('src/icons/*.svg')
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                    cleanupIDs: {
                        minify: true
                    }
                }]
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch', function () {
    gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
    // gulp.watch('src/icons/*.svg', gulp.series('sprites'));
    // gulp.watch('src/styles/component-facets.scss', gulp.series('styles'));

});


gulp.task('default', gulp.series('styles', 'watch'));