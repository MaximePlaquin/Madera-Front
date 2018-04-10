(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.customers.customersService
     * @description Service du module customers
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function customersService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.customers.customersService#url
         * @methodOf app.cors.customers.customersService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'customers';

        /**
         * @ngdoc property
         * @name app.cors.customers.customersService#restCustomers
         * @methodOf app.cors.customers.customersService
         * @description Initialise objet
         *
         */
        var restCustomers = new restService(url);

        var service = {
            GetAllCustomers: GetAllCustomers,
            GetCustomers: GetCustomers,
            DeleteCustomers: DeleteCustomers,
            UpdateCustomers: UpdateCustomers,
            CreateCustomers: CreateCustomers
        };

        /**
         * @ngdoc function
         * @name app.cors.customers.customersService#GetAllCustomers
         * @methodOf app.cors.customers.customersService
         * @description Initialise requete Get
         *
         */
        function GetAllCustomers() {
            return restCustomers.GetAll();
        }



        /**
         * @ngdoc function
         * @name app.cors.customers.customersService#GetCustomers
         * @methodOf app.cors.customers.customersService
         * @description Initialise requete Get
         * @param data
         */
        function GetCustomers(data) {
            return restCustomers.Get(data);
        }
        /**
         * @ngdoc function
         * @name app.cors.customers.customersService#DeleteCustomers
         * @methodOf app.cors.customers.customersService
         * @description Initialise requete Delete
         * @param data
         */
        function DeleteCustomers(data) {
            return restCustomers.Delete(data);
        }


        function UpdateCustomers(data) {
            console.log(data);
            return restCustomers.Update(data);
        }
        function CreateCustomers(data) {
            console.log(data);

            return restCustomers.Create(data);
        }


        return service;
    }

    customersService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.customers')
        .service('customersService', customersService);

})(angular);
