(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.webApp.webAppCtrl
     * @desc Controleur du module ngApp
     *
     */
    /* @ngInject */
    function webAppCtrl($localStorage) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $localStorage.isAuthenticated  = false;
    }

    webAppCtrl.$inject = ['$localStorage'];

    angular.module('app.cors.webApp')
        .component('webApp', {
            templateUrl: 'app/modules/webApp/webApp.tpl.html',
            controller: webAppCtrl
        });
})(angular);