var gulp = require('gulp');
var svn = require('gulp-svn');
var common = require('./common');

gulp.task('tag', function() {
        var argv = require('yargs')
            .alias('c', 'credentials')
            .describe('c', 'username:password')
            .help('h')
            .argv;

    var credentials = argv = argv.credentials.split(':');

    return svn.tag(common.name + '-' + common.version, 'release' + common.name + 'version ' + common.version, {
        quiet:false,
        password:credentials[1],
        username:credentials[0]
    });

});

gulp.task('svn-tag', ['tag']);