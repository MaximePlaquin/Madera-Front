(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.login.login#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/',
                template: '<login></login>',
                ncyBreadcrumb: {
                    label: 'Accueil'
                }
            });
    }

    /**
     * @description Module accueil
     * @ngdoc overview
     * @name app.cors.login
     */
    angular
        .module('app.cors.login', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);