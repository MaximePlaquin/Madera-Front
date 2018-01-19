(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.tableSuppliersCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableSuppliersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.suppliers')
        .component('tableSuppliers', {
            templateUrl: 'app/modules/suppliers/table/table.tpl.html',
            controller: tableSuppliersCtrl
        });
})(angular);