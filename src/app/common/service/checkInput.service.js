(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.common.utils.checkInputService
     * @description Service gestion des logs
     *
     */
    /* @ngInject */
    function checkInputService() {

        var service = {
            isUndefinedOrNull: isUndefinedOrNull
        };

        return service;

        /**
         * @ngdoc function
         * @name app.common.utils.checkInputService#isUndefinedOrNull
         * @description verification saisie champs
         *
         * @param value
         * @return true ou false
         */
        function isUndefinedOrNull(value){
            return angular.isUndefined(value) || value === null  || value === 'null' || value === {};

        }

    }

    checkInputService.$inject = [];

    angular
        .module('app.common.service')
        .factory('checkInputService', checkInputService);
})(angular);