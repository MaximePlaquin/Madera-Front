var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var runSequence = require('run-sequence');
var conf = require('./conf');

//jshint: vérifie la syntaxe javascript
gulp.task('jshint', function () {
    return gulp.src(conf.params.jshintFiles)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
});

//jscs: vérifie la syntaxe javascript
gulp.task('jscs', function () {
    return gulp.src(conf.params.jshintFiles)
        .pipe(jscs({configPath: '.jscsrc'}))
        .pipe(jscs.reporter());
});

gulp.task('lint', function () {
    runSequence(['jshint'], ['jscs']);
});