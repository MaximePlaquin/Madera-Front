(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.suppliersCtrl
     * @desc Controleur du module fournisseurs
     *
     */
    /* @ngInject */
    function suppliersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.suppliers')
        .component('suppliers', {
            templateUrl: 'app/modules/suppliers/suppliers.tpl.html',
            controller: suppliersCtrl
        });
})(angular);