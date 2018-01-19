'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var runSequence = require('run-sequence');

//Charge les fichiers de configuration Gulp
wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

//gulp build --environment <environment>
gulp.task('build', function () {
    var argv = require('yargs')
        .alias('e', 'environment')
        .default('e', 'local')
        .choices('e', ['dev', 'local', 'prod'])
        .describe('e', 'specifie l\'environement du build')
        .demand(['environment'])
        .help('h')
        .argv;

    runSequence(['lint'], ['clean'], ['minify'], ['copy'], ['copy-config-local']);

});


gulp.task('default', ['build']);