(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.webApp.webApp#config
     * @description Retourne l'etat par defaut de ui-router
     *
     * @requires $urlRouterProvider
     */
    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

    /**
     * @description Module ngApp
     * @ngdoc overview
     * @name app.modules.webApp
     */
    angular.module('app.cors.webApp', ['ui.router'])
        .config(['$urlRouterProvider', config]);

})(angular);