(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCustomers.projectsCustomersCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsCustomersCtrl(customersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.customer = {};
        /**
         * @ngdoc property
         * @name app.cors.customers.tableCustomersCtrl#pagination
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description Initilisation pagination tableau
         *
         */
        //$ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.customers.tableCustomersCtrl#listCustomers
         * @methodOf app.cors.customers.tableCustomersCtrl
         * @description Initilisation structure tableau
         *
         */
        $ctrl.listCustomers = {
            'header': [
                { 'lastname': 'Nom' },
                { 'id': 'Référence' },
                { 'firstname': 'Prénom' },
                { 'edit': 'Consulter'},
                { 'add': 'Ajout' }
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


    }
    projectsCustomersCtrl.$inject = ['customersService', 'loggerService'];
    angular.module('app.cors.projectsDetail')
        .component('projectsCustomers', {
            templateUrl: 'app/modules/projects/detail/customers/customers.tpl.html',
            controller: projectsCustomersCtrl,
            bindings:{
                customer: '='
            }
        });
})(angular);