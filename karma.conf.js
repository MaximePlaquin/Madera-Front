module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-resource/angular-resource.js',
            'node_modules/angular-ui-router/build/angular-ui-router.min.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/ng-describe/dist/ng-describe.js',
            'node_modules/angular-translate/dist/angular-translate.min.js',
            'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',
            'node_modules/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
            'node_modules/angular-cookies/angular-cookies.min.js',
            'src/app/app.js',
            'src/app/app.config.js',
            'src/app/app.run.js',
            'src/app/common/*.module.js',
            'src/app/common/**/*.directive.js',
            'src/app/common/**/*.filter.js',
            'src/app/common/**/*.service.js',
            'src/app/common/**/*.spec.js',
            'src/app/modules/**/*.module.js',
            'src/app/modules/**/*.controller.js',
            'src/app/modules/**/*.directive.js',
            'src/app/modules/**/*.filter.js',
            'src/app/modules/**/*.component.js',
            'src/app/modules/**/*.service.js',
            'src/app/modules/**/*.spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    })
};