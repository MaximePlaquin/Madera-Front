(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.projects.plansService
     * @description Service du module projects
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function plansService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.projects.plansService#url
         * @methodOf app.cors.projects.plansService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'plans';

        /**
         * @ngdoc property
         * @name app.cors.projects.plansService#restProjects
         * @methodOf app.cors.projects.plansService
         * @description Initialise objet
         *
         */
        var restProjects = new restService(url);

        var service = {
            GetAllPlans: GetAllPlans,
            DeletePlans: DeletePlans
        };

        /**
         * @ngdoc function
         * @name app.cors.projects.plansService#GetAllProjects
         * @methodOf app.cors.projects.plansService
         * @description Initialise requete Get
         *
         */
        function GetAllPlans() {
            return restProjects.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.projects.plansService#DeletePlans
         * @methodOf app.cors.projects.plansService
         * @description Initialise requete Delete
         *
         */
        function DeletePlans(data) {
            return restProjects.GetAll(data);
        }

        return service;
    }

    plansService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.projectsDetail')
        .service('plansService', plansService);

})(angular);
