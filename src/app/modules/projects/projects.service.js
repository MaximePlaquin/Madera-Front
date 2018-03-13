(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.projects.projectsService
     * @description Service du module projects
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function projectsService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.projects.projectsService#url
         * @methodOf app.cors.projects.projectsService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'projects';

        /**
         * @ngdoc property
         * @name app.cors.projects.projectsService#restProjects
         * @methodOf app.cors.projects.projectsService
         * @description Initialise objet
         *
         */
        var restProjects = new restService(url);

        var service = {
            GetAllProjects: GetAllProjects
        };

        /**
         * @ngdoc function
         * @name app.cors.projects.projectsService#GetAllProjects
         * @methodOf app.cors.projects.projectsService
         * @description Initialise requete Get
         *
         */
        function GetAllProjects() {
            return restProjects.GetAll();
        }

        return service;
    }

    projectsService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.projects')
        .service('projectsService', projectsService);

})(angular);
