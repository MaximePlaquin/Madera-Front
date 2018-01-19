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
    function notificationService() {


    }

    notificationService.$inject = [];

    angular
        .module('app.common.service')
        .factory('notificationService', notificationService);
})(angular);