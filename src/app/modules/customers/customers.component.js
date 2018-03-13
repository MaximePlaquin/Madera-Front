(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.customersCtrl
     * @desc Controleur du module client
     *
     */
    /* @ngInject */
    function customersCtrl(customersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.customers.formCustomersCtrl#editCustomer
         * @description appel fonction recuperer valeur client
         *
         */
        $ctrl.editCustomer = getCustomer;
        
        /**
         * @ngdoc function
         * @name app.cors.customers.customersCtrl#getCustomers
         * @description recupere les valeurs du customers
         *
         */
        function getCustomer(value){
            customersService.GetCustomers(value).then(function success(response) {
                $ctrl.customer = response;
            }, function error(error) {
                loggerService.error('customers - get ',error);
            });
         }
    }

    customersCtrl.$inject = ['customersService', 'loggerService'];

    angular.module('app.cors.customers')
        .component('customers', {
            templateUrl: 'app/modules/customers/customers.tpl.html',
            controller: customersCtrl
        });
})(angular);