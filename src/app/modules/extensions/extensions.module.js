(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.extensions.extensions#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('extensions', {
                url: '/modules',
                template: '<extensions></extensions>',
                ncyBreadcrumb: {
                    label: 'Modules',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module gestion des modules
     * @ngdoc overview
     * @name app.cors.extensions
     */
    angular
        .module('app.cors.extensions', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);