(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.projects.quotationService
     * @description Service du module projects
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function quotationService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.projects.quotationService#url
         * @methodOf app.cors.projects.quotationService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'devis';

        /**
         * @ngdoc property
         * @name app.cors.projects.quotationService#restProjects
         * @methodOf app.cors.projects.quotationService
         * @description Initialise objet
         *
         */
        var restQuotation = new restService(url);

        var service = {
            GetQuotation: GetQuotation
        };

        /**
         * @ngdoc function
         * @name app.cors.projects.quotationService#GetQuotation
         * @methodOf app.cors.projects.quotationService
         * @description Initialise requete Get
         *
         */
        function GetQuotation(data) {
            return restQuotation.GetList(data);
        }

        return service;
    }

    quotationService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.projectsDetail')
        .service('quotationService', quotationService);

})(angular);

