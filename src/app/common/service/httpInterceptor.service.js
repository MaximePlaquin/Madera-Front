(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.common.service.httpInterceptor
     * @description Service associé au erreur http
     *
     * @requires $q
     * @requires $rootScope
     * @requires app.common.service.loggerService
     * @requires $cacheFactory
     * @returns {{request: request, requestError: requestError, response: response, responseError: responseError}}
     */
    /* @ngInject */
    function httpInterceptor($q, $rootScope, loggerService, $cacheFactory) {
        return {
            request: function (config) {
                $rootScope.loading = true;
                //loggerService.debug('httpInterceptor - request',config);
                return config || $q.when(config);
            },
            requestError: function (request) {
                // loggerService.error('httpInterceptor - request',request);
                $rootScope.loading = false;
                return $q.reject(request);
            },
            response: function (response) {
                $rootScope.loading = false;
                //loggerService.debug('httpInterceptor - response',response);
                $cacheFactory.get('$http').removeAll();
                return response || $q.when(response);
            },
            responseError: function (response) {
                $rootScope.loading = false;
                if (response && response.status >= 300) {
                    //NotificationService.error('HTTP ' + response.status);
                    loggerService.error('httpInterceptor - response',response);
                }
                return $q.reject(response);
            }
        };
    }

    httpInterceptor.$inject = ['$q', '$rootScope', 'loggerService', '$cacheFactory'];

    angular
        .module('app.common.service')
        .factory('httpInterceptor', httpInterceptor);
})(angular);

