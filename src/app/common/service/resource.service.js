(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.common.utils.resourceService
     * @description Service resource
     *
     * @param $resource
     * @returns {{resource: app.common.utils.resourceService.resource}}
     *
     /* @ngInject */
    function resourceService($resource) {

        var resource = function (url) {
            return $resource(url, {}, {
                update: {method: 'PUT'},
                delete: {
                    method: 'DELETE'
                },
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
        };

        return {
            resource: resource
        };
    }

    resourceService.$inject = ['$resource'];

    angular
        .module('app.common.service')
        .factory('resourceService', resourceService);
})(angular);