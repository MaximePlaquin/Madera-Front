var gulp = require('gulp');
var war = require('gulp-war');
var zip = require('gulp-zip');
var conf = require('./conf');

gulp.task('war', function(){
    return gulp.src([conf.params.targetDir + '/**', '!'+ conf.params.targetDir + '/*.war'])
        .pipe(war({
            welcome:'index.html',
            displayName: 'infotel'
        }))
        .pipe(zip(conf.params.warName))
        .pipe(gulp.dest(conf.params.targetDir));
});