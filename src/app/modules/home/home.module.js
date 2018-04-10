(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.home.home#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home></home>',
                ncyBreadcrumb: {
                    label: 'Accueil'
                }
            });
    }

    /**
     * @description Module accueil
     * @ngdoc overview
     * @name app.cors.home
     */
    angular
        .module('app.cors.home', ['ui.router', 'angular.directives-chartjs-doughnut'])
        .config(['$stateProvider', config]);
})(angular);