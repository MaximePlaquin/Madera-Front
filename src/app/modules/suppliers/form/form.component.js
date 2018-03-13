(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.formSuppliersCtrl
     * @desc Controleur du component form
     * @param suppliersService
     * @param loggerService
     * @param checkInputService
     */
    /* @ngInject */
    function formSuppliersCtrl(suppliersService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.supplier.formSuppliersCtrl#supplier
         * @description objet formulaire fournisseur
         *
         */
        $ctrl.supplier = {};

        /**
         * @ngdoc method
         * @name app.cors.suppliers.formSuppliersCtrl#reset
         * @description reinitialisation formulaire
         *
         */
        $ctrl.reset = function () {
            $ctrl.supplier = {};
            $ctrl.form_supplier.$setPristine()
        };

        /**
         * @ngdoc function
         * @name app.cors.suppliers.formSuppliersCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.suppliers.formSuppliersCtrl#send
         * @description controle creation ou maj
         *
         */
        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createSuppliers(value);
                } else {
                    editSuppliers(value);
                }
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.suppliers.formSuppliersCtrl#editSuppliers
         * @description mise a jour profil
         *
         * @param value
         */
        function editSuppliers(value){
            suppliersService.UpdateSuppliers(value).then(function success() {
            }, function error(error) {
                loggerService.error('suppliers - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.suppliers.formSuppliersCtrl#createSuppliers
         * @description création profil
         *
         * @param value
         */
        function createSuppliers(value){
            suppliersService.CreateSuppliers(value).then(function success() {
            }, function error(error) {
                loggerService.error('suppliers - create ',error);
            });
        }
    }

    formSuppliersCtrl.$inject = ['suppliersService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.suppliers')
        .component('formSuppliers', {
            templateUrl: 'app/modules/suppliers/form/form.tpl.html',
            controller: formSuppliersCtrl,
            bindings: {
                supplier: "="
            }
        });
})(angular);