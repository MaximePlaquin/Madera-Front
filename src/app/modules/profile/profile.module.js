(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.profile.profile#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                template: '<profile></profile>',
                ncyBreadcrumb: {
                    label: 'Espace membre',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module espace membre
     * @ngdoc overview
     * @name app.cors.profile
     */
    angular
        .module('app.cors.profile', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);