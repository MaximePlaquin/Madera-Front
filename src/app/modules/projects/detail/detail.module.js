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
            .state('projectsDetail', {
                url: '/projects/detail/:id',
                template: '<projects-detail></projects-detail>',
                ncyBreadcrumb: {
                    label: 'Detail projet',
                    parent:'projects'
                }
            });
    }

    /**
     * @description Module projet
     * @ngdoc overview
     * @name app.cors.projects
     */
    angular
        .module('app.cors.projectsDetail', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);