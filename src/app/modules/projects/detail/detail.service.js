(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.projects.projectsDetailService
     * @description Service du module projects
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function projectsDetailService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.projects.projectsDetailService#url
         * @methodOf app.cors.projects.projectsDetailService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'projects';

        /**
         * @ngdoc property
         * @name app.cors.projects.projectsDetailService#restProjects
         * @methodOf app.cors.projects.projectsDetailService
         * @description Initialise objet
         *
         */
        var restProjects = new restService(url);

        var service = {
            GetAllProjects: GetAllProjects
        };

        /**
         * @ngdoc function
         * @name app.cors.projects.projectsDetailService#GetAllProjects
         * @methodOf app.cors.projects.projectsDetailService
         * @description Initialise requete Get
         *
         */
        function GetAllProjects() {
            return restProjects.GetAll();
        }

        return service;
    }

    projectsDetailService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.projectsDetail')
        .service('projectsDetailService', projectsDetailService);

})(angular);
