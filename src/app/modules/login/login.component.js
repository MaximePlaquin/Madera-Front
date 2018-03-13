(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.login.loginCtrl
     * @desc Controleur du module connexion
     *
     */
    /* @ngInject */
    function loginCtrl(loggerService, loginService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.login = login();

        /**
         * @ngdoc function
         * @name app.cors.login.loginCtrl#login
         *
         */
        function login(){
            loginService.PostLogin($ctrl.username, $ctrl.password).then(function success(response) {
                console.log(response);
            }, function error(error) {
                loggerService.error('login - create ',error);
            });
        }
    }

    loginCtrl.$inject = ['loggerService', 'loginService'];

    angular.module('app.cors.login')
        .component('login', {
            templateUrl: 'app/modules/login/login.tpl.html',
            controller: loginCtrl
        });
})(angular);