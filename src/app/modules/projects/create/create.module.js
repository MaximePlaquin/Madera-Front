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
            .state('projectsCreate', {
                url: '/projects/create',
                template: '<projects-create></projects-create>',
                ncyBreadcrumb: {
                    label: 'Creation projet',
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
        .module('app.cors.projectsCreate', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);
