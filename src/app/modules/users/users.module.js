(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.users.users#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                template: '<users></users>',
                ncyBreadcrumb: {
                    label: 'Utilisateurs',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module utilisateurs
     * @ngdoc overview
     * @name app.cors.users
     */
    angular
        .module('app.cors.users', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);