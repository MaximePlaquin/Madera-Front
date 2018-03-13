(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.formCustomersCtrl
     * @desc Controleur du component form
     * @param customersService
     * @param loggerService
     * @param checkInputService
     */
    /* @ngInject */
    function formCustomersCtrl(customersService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.customers.formCustomersCtrl#user
         * @description objet formulaire client
         *
         */
        $ctrl.customer = {};

        /**
         * @ngdoc method
         * @name app.cors.customers.formCustomersCtrl#reset
         * @description reinitialisation formulaire
         *
         */
        $ctrl.reset = function () {
            $ctrl.customer = {};
            $ctrl.form_customer.$setPristine()
        };

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
        function createCustomers(value){
            customersService.CreateCustomers(value).then(function success() {
            }, function error(error) {
                loggerService.error('customers - create ',error);
            });
        }
    }

    formCustomersCtrl.$inject = ['customersService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.customers')
        .component('formCustomers', {
            templateUrl: 'app/modules/customers/form/form.tpl.html',
            controller: formCustomersCtrl,
            bindings:{
                customer: '='
            }
        });
})(angular);