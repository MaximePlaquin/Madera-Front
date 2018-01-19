(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.stocks.stocksCtrl
     * @desc Controleur du module stocks
     *
     */
    /* @ngInject */
    function stocksCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.stocks')
        .component('stocks', {
            templateUrl: 'app/modules/stocks/stocks.tpl.html',
            controller: stocksCtrl
        });
})(angular);