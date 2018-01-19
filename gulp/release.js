var gulp = require('gulp');
var bump = require('gulp-bump');
var svn = require('gulp-svn');
var common = require('./common');
var runSequence = require('run-sequence');

//gulp release --version <version semver> -c login:pass
//gulp release --type <major minor patch prerelease> -c login:pass
gulp.task('bump-release', function(){

    var argv = require('yargs')
        .alias('v', 'version')
        .describe('v', 'spécifie la version à changer')
        .alias('t', 'type')
        .default('t', 'patch')
        .choices('t', ['patch', 'minor', 'major', 'prerelease'])
        .describe('t', 'spécifie le type de montée de version')
        .help('h')
        .argv;

    var packageFile = './package.json';
    var bumpType = {type:'patch'};

    if(argv.version) {
        bumpType = {version: argv.version};
    } else if(argv.type) {
        bumpType = {type: argv.type};
    }

    console.log('Release : ' + JSON.stringify(bumpType));

    return gulp.src(packageFile)
        .pipe(bump(bumpType))
        .pipe(gulp.dest('./'));

});

gulp.task('commit-release', function() {

    var argv = require('yargs')
        .alias('c', 'credentials')
        .describe('c', 'username:password')
        .help('h')
        .argv;

    var credentials = argv.credentials.split(':');

    return svn.commit('bumping to version ' + common.version + ' for release', {
        quiet:false,
        password:credentials[1],
        username:credentials[0]
    });
});

gulp.task('release', function() {
    runSequence(['bump-release'], ['commit-release'], ['show-version']);
});

