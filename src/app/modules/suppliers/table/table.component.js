(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.suppliers.tableSuppliersCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableSuppliersCtrl(suppliersService, loggerService, checkInputService, notificationService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.suppliers.tableSuppliersCtrl#listSuppliers
         * @methodOf app.cors.suppliers.tableSuppliersCtrl
         * @description Initilisation structure tableau
         *
         */
        $ctrl.listSuppliers = {
            'header': [
                { 'id': 'Référence' },
                { 'name': 'Raison sociale' },
                { 'siren': 'Siren' },
                { 'edit': 'Modifier'},
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc property
         * @name app.cors.suppliers.tableSuppliersCtrl#pagination
         * @methodOf app.cors.suppliers.tableSuppliersCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc method
         * @name app.cors.suppliers.tableSuppliersCtrl#getAllSuppliers
         * @methodOf app.cors.suppliers.tableSuppliersCtrl
         * @description
         * Appel initialisation tableau fournisseurs
         *
         */
        getAllSuppliers();

        /**
         * @ngdoc method
         * @name app.cors.suppliers.tableSuppliersCtrl#delete
         * @methodOf app.cors.suppliers.tableSuppliersCtrl
         * @description
         * Appel suppression fournisseurs
         *
         */
        $ctrl.delete = deleteSuppliers;

        /**
         * @ngdoc method
         * @name app.cors.suppliers.tableSuppliersCtrl#edit
         * @methodOf app.cors.suppliers.tableSuppliersCtrl
         * @description
         * Appel avoir fournisseur
         *
         */
        $ctrl.edit = $ctrl.editSupplier;

        /**
         * @ngdoc function
         * @name app.cors.suppliers.tableSuppliersCtrl#getAllSuppliers
         * @methodOf app.cors.suppliers.tableDiaporamasCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllSuppliers(){
            suppliersService.GetAllSuppliers().then(function success(response) {
                $ctrl.listSuppliers.rows = response;
                loggerService.debug('suppliers - table ',response);
            }, function error(error) {
                loggerService.error('suppliers - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.suppliers.tableSuppliersCtrl#deleteSuppliers
         * @description suppression profil
         *
         * @param value
         */
        function deleteSuppliers(value){
            suppliersService.DeleteSuppliers(value).then(function success() {
            }, function error(error) {
                loggerService.error('suppliers - delete ',error);
            });
        }
    }

    tableSuppliersCtrl.$inject = ['suppliersService', 'loggerService', 'checkInputService', 'notificationService']

    angular.module('app.cors.suppliers')
        .component('tableSuppliers', {
            templateUrl: 'app/modules/suppliers/table/table.tpl.html',
            controller: tableSuppliersCtrl,
            bindings: {
                editSupplier: '='
            }
        });
})(angular);