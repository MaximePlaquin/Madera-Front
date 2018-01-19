(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.stocks.stocks#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('stocks', {
                url: '/stocks',
                template: '<stocks></stocks>',
                ncyBreadcrumb: {
                    label: 'Stocks',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module espace membre
     * @ngdoc overview
     * @name app.cors.stocks
     */
    angular
        .module('app.cors.stocks', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);