(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.webApp.webAppCtrl
     * @desc Controleur du module ngApp
     *
     */
    /* @ngInject */
    function webAppCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.webApp')
        .component('webApp', {
            templateUrl: 'app/modules/webApp/webApp.tpl.html',
            controller: webAppCtrl
        });
})(angular);