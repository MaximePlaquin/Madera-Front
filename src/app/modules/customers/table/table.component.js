(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.tableCustomersCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableCustomersCtrl(customersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.customers.tableCustomersCtrl#pagination
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.customers.tableCustomersCtrl#listCustomers
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description Initilisation structure tableau
         *
         */
        $ctrl.listCustomers = {
            'header': [
                { 'id': 'Référence' },
                { 'lastname': 'Nom' },
                { 'firstname': 'Prénom' },
                { 'edit': 'Modifier'},
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc method
         * @name app.cors.customers.tableCustomersCtrl#getAllCustomers
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description
         * Appel initialisation tableau clients
         *
         */
        getAllCustomers();


        /**
         * @ngdoc method
         * @name app.cors.customers.tableCustomersCtrl#edit
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description
         * Appel get client
         *
         */
        $ctrl.edit = $ctrl.editCustomer;
        
        /**
         * @ngdoc method
         * @name app.cors.customers.tableCustomersCtrl#delete
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description
         * Appel suppression clients
         *
         */
        $ctrl.delete = deleteCustomers;

        /**
         * @ngdoc function
         * @name app.cors.customers.tableCustomersCtrl#getAllCustomers
         * @methodOf app.cors.customers.tableDiaporamasCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllCustomers(){
            customersService.GetAllCustomers().then(function success(response) {
                $ctrl.listCustomers.rows = response;
                loggerService.debug('customers - table ',response);
            }, function error(error) {
                loggerService.error('customers - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.customers.tableCustomersCtrl#deleteCustomers
         * @description suppression profil
         *
         * @param value
         */
        function deleteCustomers(value){
            customersService.DeleteCustomers(value).then(function success() {
            }, function error(error) {
                loggerService.error('customers - delete ',error);
            });
        }
    }

    tableCustomersCtrl.$inject = ['customersService', 'loggerService'];

    angular.module('app.cors.customers')
        .component('tableCustomers', {
            templateUrl: 'app/modules/customers/table/table.tpl.html',
            controller: tableCustomersCtrl,
            bindings:{
                editCustomer: '='
            }
        });
})(angular);