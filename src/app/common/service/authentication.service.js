(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.common.utils.authenticationService
     * @description Service gestion authentification
     *
     *
     */
    /* @ngInject */
    function authenticationService() {

        var service = {
            getUser: getUser,
            isAuthenticated: isAuthenticated
        };

        return service;

        /**
         * @ngdoc function
         * @name app.common.utils.authenticationService#getUser
         * @description log trace
         *
         */
        function getUser() {

        }

        /**
         * @ngdoc function
         * @name app.common.utils.authenticationService#isAuthenticated
         * @description log debug
         *
         */
        function isAuthenticated() {

        }

    }

    authenticationService.$inject = [];

    angular
        .module('app.common.service')
        .factory('authenticationService', authenticationService);
})(angular);