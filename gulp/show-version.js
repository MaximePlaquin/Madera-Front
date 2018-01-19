var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var common = require('./common');
var fs = require('fs');

gulp.task('show-version', function(){
    var package = JSON.parse(fs.readFileSync('./package.version', 'utf8'));
    var constants = {version: package.version};
    console.log('show version : '+ package.version);

    return ngConstant({
        constants: constants,
        stream: true,
        name: 'app.constants'
    }).pipe(gulp.dest('./src'));
});