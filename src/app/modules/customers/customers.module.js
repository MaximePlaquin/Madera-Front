(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.customers.customers#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('customers', {
                url: '/customers',
                template: '<customers></customers>',
                ncyBreadcrumb: {
                    label: 'Composants',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module client
     * @ngdoc overview
     * @name app.cors.customers
     */
    angular
        .module('app.cors.customers', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);