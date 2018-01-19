var gulp = require('gulp');
var conf = require('./conf');

gulp.task('copy-html', function () {
    return gulp.src(conf.params.copyHtml)
        .pipe(gulp.dest(conf.params.targetDir + '/app'));
});

gulp.task('copy-assets', function () {
    return gulp.src(conf.params.copyAssets)
        .pipe(gulp.dest(conf.params.targetDir + '/assets'));
});

gulp.task('copy-languages', function () {
    return gulp
        .src('src/app/modules/**/languages/*')
        .pipe(gulp.dest('dist/app/modules'));
});

//copie les assets et html dans /dist
gulp.task('copy', ['copy-html', 'copy-assets', 'copy-languages']);