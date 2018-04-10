(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCustomers.projectsCustomersCtrl
     * @desc Controleur du module projet
     *
     * @param checkInputService
     * @param customersService
     * @param loggerService
     */
    /* @ngInject */
    function projectsCustomersCtrl(checkInputService, customersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.customers.formCustomersCtrl#user
         * @description objet formulaire client
         *
         */

        if($ctrl.infosProject === undefined) {
            $ctrl.customer = {};
        } else {

            var id = $ctrl.customer.ID_client;

        }


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
         * @ngdoc function
         * @name app.cors.customers.formCustomersCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.customers.formCustomersCtrl#send
         * @description controle creation ou maj
         *
         */
        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createCustomers(value);
                } else {
                    editCustomers(value);
                }
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.customers.formCustomersCtrl#editCustomers
         * @description mise a jour client
         *
         * @param value
         */
        function editCustomers(value){
            customersService.UpdateCustomers(value).then(function success() {
            }, function error(error) {
                loggerService.error('customers - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.customers.formCustomersCtrl#createCustomers
         * @description création client
         *
         * @param value
         */
        function createCustomers(value) {
            customersService.CreateCustomers(value).then(function success() {
            }, function error(error) {
                loggerService.error('customers - create ', error);
            });
        }

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
                $ctrl.listCustomers = response;
                console.log($ctrl.listCustomers);
                loggerService.debug('customers - table ',response);
            }, function error(error) {
                loggerService.error('customers - table ',error);
            });
        }
    }

    projectsCustomersCtrl.$inject = ['checkInputService', 'customersService', 'loggerService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsCustomers', {
            templateUrl: 'app/modules/projects/detail/customers/customers.tpl.html',
            controller: projectsCustomersCtrl,
            bindings:{
                idProject:'=',
                infosProject:'=',
                customer:'='
            }
        });
})(angular);