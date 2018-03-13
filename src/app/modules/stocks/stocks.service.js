(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.stocks.stocksService
     * @description Service du module stocks
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function stocksService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.stocks.stocksService#url
         * @methodOf app.cors.stocks.stocksService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'stocks';

        /**
         * @ngdoc property
         * @name app.cors.stocks.stocksService#restStocks
         * @methodOf app.cors.stocks.stocksService
         * @description Initialise objet
         *
         */
        var restStocks = new restService(url);

        var service = {
            GetStocks: GetStocks
        };

        /**
         * @ngdoc function
         * @name app.cors.stocks.stocksService#GetStocks
         * @methodOf app.cors.stocks.stocksService
         * @description Initialise requete Get
         *
         */
        function GetStocks() {
            return restStocks.GetAll();
        }

        return service;
    }

    stocksService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.stocks')
        .service('stocksService', stocksService);

})(angular);
