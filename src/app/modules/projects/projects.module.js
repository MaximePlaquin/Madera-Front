(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.projects.projects#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('projects', {
                url: '/projects',
                template: '<projects></projects>',
                ncyBreadcrumb: {
                    label: 'Projet',
                    parent:'home'
                }
            });
    }

    /**
     * @description Module projet
     * @ngdoc overview
     * @name app.cors.projects
     */
    angular
        .module('app.cors.projects', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);