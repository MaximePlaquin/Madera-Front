/**
 * Created by florentinBouchez on 25/06/2017.
 */
var gulp = require('gulp');
var conf = require('./conf');
var gls = require('gulp-live-server');
var inject = require('gulp-inject');
var watch = require('gulp-watch');

gulp.task('server', ['watch'], function(){
    var server = gls.new(['app.js']);
    server.start();
});

gulp.task('server-local', ['watch','copy-config-local'], function(){
    var server = gls.new(['app.js']);
    server.start();
});

gulp.task('inject', function(){
    var target = gulp.src(conf.params.indexPage);
    var sources = gulp.src(conf.params.injectJs, {read:false});

    return target
        .pipe(inject(sources, {addRootSlash: false, relative:true, ignorepath: 'src/'}))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function(){
    gulp.watch('src/app/**/*.js',['inject']);
});