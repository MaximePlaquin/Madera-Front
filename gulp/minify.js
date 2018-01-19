var gulp = require('gulp');
var conf = require('./conf');
var minifyHtml = require('gulp-minify-html');
var jsonminify = require('gulp-jsonminify');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

//minifyHtml: minimifie le code html
gulp.task('minify-html', function () {
    return gulp.src(conf.params.minifyHtml)
        .pipe(minifyHtml())
        .pipe(gulp.dest(conf.params.targetDir));
});

//minifyHtml: minimifie le code json
gulp.task('minify-json', function () {
    return gulp.src(conf.params.minifyJson)
        .pipe(jsonminify())
        .pipe(gulp.dest(conf.params.targetDir));
});

// usemin: concatène les fichiers inclus dans index.html et les copie dans dist/assets
gulp.task('usemin', function () {
    return gulp.src('src/index.html')
        .pipe(usemin(
            {
                cssapp: [sourcemaps.init(), minifyCss, rev, sourcemaps.write('.')],
                //cssappie: [sourcemaps.init(), minifyCss, rev, sourcemaps.write('.')],
                jsapp: [sourcemaps.init(), uglify, rev, sourcemaps.write('.')],
                html: [minifyHtml],
                cssvendor: [minifyCss, rev],
                jsvendor: [uglify, rev]
            }
        ))
        .pipe(gulp.dest('dist'));
});


//minifie les html et json
gulp.task('minify', function () {
    runSequence(['usemin'], ['minify-html', 'minify-json']);
});