(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.common.utils.loggerService
     * @description Service gestion des logs
     *
     * @requires $log
     * @returns {{trace: app.common.utils.loggerService.trace, debug: app.common.utils.loggerService.debug, info: app.common.utils.loggerService.info, warn: app.common.utils.loggerService.warn, error: app.common.utils.loggerService.error}}
     */
    /* @ngInject */
    function loggerService($log) {

        var service = {
            trace: trace,
            debug: debug,
            info: info,
            warn: warn,
            error: error
        };

        return service;

        /**
         * @ngdoc function
         * @name app.common.utils.loggerService#trace
         * @description log trace
         *
         * @param instance
         * @param message
         */
        function trace(instance, message) {
            $log.getInstance(instance).trace(message);
        }

        /**
         * @ngdoc function
         * @name app.common.utils.loggerService#debug
         * @description log debug
         *
         * @param instance
         * @param message
         */
        function debug(instance, message) {
            $log.getInstance(instance).debug(message);
        }

        /**
         * @ngdoc function
         * @name app.common.utils.loggerService#info
         * @description log info
         *
         * @param instance
         * @param message
         */
        function info(instance, message) {
            $log.getInstance(instance).info(message);
        }

        /**
         * @ngdoc function
         * @name app.common.utils.loggerService#warn
         * @description log avertissement
         *
         * @param instance
         * @param message
         */
        function warn(instance, message) {
            $log.getInstance(instance).warn(message);
        }

        /**
         * @ngdoc function
         * @name app.common.utils.loggerService#error
         * @description log erreur
         *
         * @param instance
         * @param message
         */
        function error(instance, message) {
            $log.getInstance(instance).error(message);
        }
    }

    loggerService.$inject = ['$log'];

    angular
        .module('app.common.service')
        .factory('loggerService', loggerService);
})(angular);