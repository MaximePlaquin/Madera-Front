(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.suppliersCtrl
     * @desc Controleur du module fournisseurs
     *
     */
    /* @ngInject */
    function suppliersCtrl(suppliersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.suppliers.formSuppliersCtrl#editSupplier
         * @description appel fonction recuperer valeur fournisseur
         *
         */
        $ctrl.editSupplier = getSupplier;
        
        /**
         * @ngdoc function
         * @name app.cors.suppliers.suppliersCtrl#getSupplier
         * @description recupere les valeurs du fournisseur
         *
         */
        function getSupplier(value){
            suppliersService.GetSuppliers(value).then(function success(response) {
                $ctrl.supplier = response;
            }, function error(error) {
                loggerService.error('suppliers - get ',error);
            });
        }
    }

    suppliersCtrl.$inject = ['suppliersService', 'loggerService'];

    angular.module('app.cors.suppliers')
        .component('suppliers', {
            templateUrl: 'app/modules/suppliers/suppliers.tpl.html',
            controller: suppliersCtrl
        });
})(angular);