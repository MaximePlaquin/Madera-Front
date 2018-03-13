(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.home.homeService
     * @description Service du module home
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function homeService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.home.homeService#url
         * @methodOf app.cors.home.homeService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'home';

        /**
         * @ngdoc property
         * @name app.cors.home.homeService#restHome
         * @methodOf app.cors.home.homeService
         * @description Initialise objet
         *
         */
        var restHome = new restService(url);

        var service = {
            GetHome: GetHome
        };

        /**
         * @ngdoc function
         * @name app.cors.home.homeService#GetHome
         * @methodOf app.cors.home.homeService
         * @description Initialise requete Get
         *
         */
        function GetHome() {
            return restHome.GetAll();
        }

        return service;
    }

    homeService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.home')
        .service('homeService', homeService);

})(angular);
