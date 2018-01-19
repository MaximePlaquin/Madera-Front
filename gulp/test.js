var gulp = require('gulp');
var karma = require('karma');
var path = require('path');

gulp.task('test', function(done){
    karma.server.start({
        configFile: path.join(__dirname, '../karma.config.js'),
        singleRun: true,
        autoWatch: false
    }, function(){
        done();
    })
});