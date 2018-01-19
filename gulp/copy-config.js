var gulp = require('gulp');
var conf = require('./conf');
var ngConstant = require('gulp-ng-constant');
var fs = require('fs');

gulp.task('copy-config-local', function(){
    var config = JSON.parse(fs.readFileSync('./environment/config.json', 'utf8'));
    var package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    var constants = {BASE : config.env.local.BASE};

    constants.BASE['version'] = package.version;

    console.log('url : ', config.env.local.BASE.url);

    return ngConstant({
        constants: constants,
        stream: true,
        name: 'app.constant'
    }).pipe(gulp.dest('./src'));

});