(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.suppliers.suppliersService
     * @description Service du module suppliers
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function suppliersService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.suppliers.suppliersService#url
         * @methodOf app.cors.suppliers.suppliersService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'suppliers';

        /**
         * @ngdoc property
         * @name app.cors.suppliers.suppliersService#restSuppliers
         * @methodOf app.cors.suppliers.suppliersService
         * @description Initialise objet
         *
         */
        var restSuppliers = new restService(url);

        var service = {
            GetAllSuppliers: GetAllSuppliers,
            GetSuppliers: GetSuppliers,
            DeleteSuppliers: DeleteSuppliers
        };

        /**
         * @ngdoc function
         * @name app.cors.suppliers.suppliersService#GetAllSuppliers
         * @methodOf app.cors.suppliers.suppliersService
         * @description Initialise requete Get
         *
         */
        function GetAllSuppliers() {
            return restSuppliers.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.suppliers.suppliersService#GetSuppliers
         * @methodOf app.cors.suppliers.suppliersService
         * @description Initialise requete Get
         *
         */
        function GetSuppliers(data) {
            return restSuppliers.Get(data);
        }
        /**
         * @ngdoc function
         * @name app.cors.suppliers.suppliersService#DeleteSuppliers
         * @methodOf app.cors.suppliers.suppliersService
         * @description Initialise requete Delete
         * @param data
         */
        function DeleteSuppliers(data) {
            return restSuppliers.Delete(data);
        }

        return service;
    }

    suppliersService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.suppliers')
        .service('suppliersService', suppliersService);

})(angular);
