(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.login.loginCtrl
     * @desc Controleur du module connexion
     *
     */
    /* @ngInject */
    function loginCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.login')
        .component('login', {
            templateUrl: 'app/modules/login/login.tpl.html',
            controller: loginCtrl
        });
})(angular);