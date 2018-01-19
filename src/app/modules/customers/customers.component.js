(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.customersCtrl
     * @desc Controleur du module client
     *
     */
    /* @ngInject */
    function customersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.customers')
        .component('customers', {
            templateUrl: 'app/modules/customers/customers.tpl.html',
            controller: customersCtrl
        });
})(angular);