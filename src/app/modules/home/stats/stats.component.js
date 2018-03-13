(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.statsHomeCtrl
     * @desc Controleur du component services
     *
     */
    /* @ngInject */
    function statsHomeCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

    }

    angular.module('app.cors.home')
        .component('statsHome', {
            templateUrl: 'app/modules/home/stats/stats.tpl.html',
            controller: statsHomeCtrl
        });
})(angular);