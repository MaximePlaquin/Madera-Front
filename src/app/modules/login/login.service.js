(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.login.loginService
     * @description Service du module login
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function loginService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.login.loginService#url
         * @methodOf app.cors.login.loginService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'authenticate';

        /**
         * @ngdoc property
         * @name app.cors.login.loginService#restLogin
         * @methodOf app.cors.login.loginService
         * @description Initialise objet
         *
         */
        var restLogin = new restService(url);

        var service = {
            PostLogin: PostLogin
        };

        /**
         * @ngdoc function
         * @name app.cors.login.loginService#PostLogin
         * @methodOf app.cors.login.loginService
         * @description Initialise requete Post
         *
         */
        function PostLogin(data) {
            return restLogin.Create(data);
        }

        return service;
    }

    loginService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.login')
        .service('loginService', loginService);

})(angular);
