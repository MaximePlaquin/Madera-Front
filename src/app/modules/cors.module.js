(function (angular) {
    'use strict';

    /**
     * @description Module cors
     * @ngdoc overview
     * @name app.cors
     */
    angular.module('app.cors', [
        'app.cors.webApp',
        'app.cors.home',
        'app.cors.profile',
        'app.cors.users',
        'app.cors.suppliers',
        'app.cors.projects',
        'app.cors.stocks',
        'app.cors.ranges',
        'app.cors.components',
        'app.cors.extensions',
        'app.cors.login'
    ]);
})(angular);