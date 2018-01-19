(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.formSuppliersCtrl
     * @desc Controleur du component form
     *
     */
    /* @ngInject */
    function formSuppliersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.suppliers')
        .component('formSuppliers', {
            templateUrl: 'app/modules/suppliers/form/form.tpl.html',
            controller: formSuppliersCtrl
        });
})(angular);