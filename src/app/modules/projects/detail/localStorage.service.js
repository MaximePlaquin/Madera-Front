(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.projects.localStorageService
     * @description Service du localstorage projet
     *
     **/
    /* @ngInject */
    function localStorageService() {

        var Service = {};

        var hasInvoice = function() {
            return !(localStorage['invoice'] == '' || localStorage['invoice'] == null);
        };

        Service.getInvoice = function() {
            if (hasInvoice()) {
                return JSON.parse(localStorage['invoice']);
            } else {
                return false;
            }
        };

        Service.setInvoice = function(invoice) {
            localStorage['invoice'] = JSON.stringify(invoice);
        };

        Service.clearinvoice = function() {
            localStorage['invoice'] = '';
        };

        Service.clear = function() {
            localStorage['invoice'] = '';
            Service.clearLogo();
        };

        return Service;

    }

    localStorageService.$inject = [];

    angular
        .module('app.cors.projectsDetail')
        .service('localStorageService', localStorageService);

})(angular);

