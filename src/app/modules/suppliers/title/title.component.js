(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.titleSuppliersCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleSuppliersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.suppliers')
        .component('titleSuppliers', {
            templateUrl: 'app/modules/suppliers/title/title.tpl.html',
            controller: titleSuppliersCtrl
        });
})(angular);