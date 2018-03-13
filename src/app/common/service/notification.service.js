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
    function notificationService(toaster, $timeout) {

        var defaultTimeout = 5000;

        var service = {
            info: info,
            warn: warn,
            error: error,
            success: success,
            clearAll: clearAll
        };

        return service;

        function info(title, message, closable){
            console.log('ok');
            var notificationId = toaster.pop({type: 'info', title: title, body: message, showCloseButton: closable});
                $timeout(function () {
                    toaster.clear(notificationId);
                }, defaultTimeout);
        }

        function warn(title, message, closable){
            var notificationId = toaster.pop({type: 'warning', title: title, body: message, showCloseButton: closable});
            $timeout(function () {
                toaster.clear(notificationId);
            }, defaultTimeout);
        }

        function error(title, message, closable){
            var notificationId = toaster.pop({type: 'error', title: title, body: message, showCloseButton: closable});
            $timeout(function () {
                toaster.clear(notificationId);
            }, defaultTimeout);
        }

        function success(title, message, closable){
            var notificationId = toaster.pop({type: 'success', title: title, body: message, showCloseButton: closable});
            $timeout(function () {
                toaster.clear(notificationId);
            }, defaultTimeout);
        }

        function clearAll(){
            toaster.clear();
        }


    }

    notificationService.$inject = ['toaster', '$timeout'];

    angular
        .module('app.common.service')
        .factory('notificationService', notificationService);
})(angular);