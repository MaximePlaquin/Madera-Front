(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.components.components#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('components', {
                url: '/components',
                template: '<components></components>',
                ncyBreadcrumb: {
                    label: 'Composants',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module gestion des composants
     * @ngdoc overview
     * @name app.cors.components
     */
    angular
        .module('app.cors.components', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);