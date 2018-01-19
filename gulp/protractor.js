var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;

gulp.task('protractor', function(done){
    gulp.src(['./e2e-tests/scenaris.js'])
        .pipe(protractor({
            configFiles: 'e2e-tests/protractor.conf.js',
            args: ['--baseUrl', 'http://127.0.0.1/8000']
        }))
        .on('error', function(e){ throw e });
});

gulp.task('e2e', ['protractor']);