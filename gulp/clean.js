var gulp = require('gulp');
var conf = require ('./conf');
var del = require('del');

//supprime le repertoire dist et le cache de l'app
gulp.task('clean', function(){
    return del(conf.params.cleanFiles);
});
