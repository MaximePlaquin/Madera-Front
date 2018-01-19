(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.suppliers.suppliers#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('suppliers', {
                url: '/suppliers',
                template: '<suppliers></suppliers>',
                ncyBreadcrumb: {
                    label: 'Fournisseurs',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module fournisseur
     * @ngdoc overview
     * @name app.cors.suppliers
     */
    angular
        .module('app.cors.suppliers', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);