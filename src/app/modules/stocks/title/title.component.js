(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.stocks.titleStocksCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleStocksCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.stocks')
        .component('titleStocks', {
            templateUrl: 'app/modules/stocks/title/title.tpl.html',
            controller: titleStocksCtrl
        });
})(angular);