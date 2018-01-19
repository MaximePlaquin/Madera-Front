var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');


gulp.task('templates-cache-modules', function() {
        return gulp.src('src/app/modules/**/*.html')
            .pipe(templateCache('module.js', {root: 'modules/', module: 'templates-cache-modules'}))
            .pipe(gulp.dest('app/cache'));
});

gulp.task('templates-cache-layout', function() {
    return gulp.src('src/app/layout/*.html')
        .pipe(templateCache('laout.js', {root: 'layout/', module: 'templates-cache-layout'}))
        .pipe(gulp.dest('app/cache'));
});

gulp.task('templates-cache', ['template-cache-modules', 'template-cache-layout']);