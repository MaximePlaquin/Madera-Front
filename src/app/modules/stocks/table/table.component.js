(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.stocks.tableStocksCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableStocksCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.stocks')
        .component('tableStocks', {
            templateUrl: 'app/modules/stocks/table/table.tpl.html',
            controller: tableStocksCtrl
        });
})(angular);