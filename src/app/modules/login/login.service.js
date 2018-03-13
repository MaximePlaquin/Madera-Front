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
    function loginService(BASE, restService, $localStorage) {

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
            PostLogin: PostLogin,
            isLogout: isLogout
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

        function isLogout() {
            delete $localStorage.currentUser;
        }

        return service;
    }

    loginService.$inject = ['BASE', 'restService', '$localStorage'];

    angular
        .module('app.cors.login')
        .service('loginService', loginService);

})(angular);
