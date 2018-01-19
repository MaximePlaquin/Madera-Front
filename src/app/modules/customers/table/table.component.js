(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.tableCustomersCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableCustomersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.customers')
        .component('tableCustomers', {
            templateUrl: 'app/modules/customers/table/table.tpl.html',
            controller: tableCustomersCtrl
        });
})(angular);