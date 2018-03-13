(function (angular){
    'use strict';

    function  config($httpProvider, logEnhancerProvider, $compileProvider, $logProvider, $locationProvider){


        $locationProvider.html5Mode(false);

        $logProvider.debugEnabled(true);

        $httpProvider.interceptors.push('httpInterceptor');

        logEnhancerProvider.prefixPattern = '%s::[%s]>';
        logEnhancerProvider.datetimePattern = 'dddd h:mm:ss a';
        logEnhancerProvider.logLevels = {
            '*' : config.logLevels
        };

        $compileProvider.debugInfoEnabled(config.debugInfoEnabled);

        if(!$httpProvider.defaults.headers.get){
            $httpProvider.defaults.headers.get = {};
        }
    }

    config.$inject = ['$httpProvider', 'logEnhancerProvider', '$compileProvider', '$logProvider', '$locationProvider'];

    angular.module('app')
        .config(config);

})(angular);