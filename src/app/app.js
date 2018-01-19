(function (angular){
    'use strict';

    angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'angular-logger',
        'ngResource',
        'ngMessages',
        'ngFileUpload',
        'toaster',
        'ncy-angular-breadcrumb',
        'app.constant',
        'app.cors',
        'app.common',
        'app.layout'
    ]);

})(angular);