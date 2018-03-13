(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.login.loginCtrl
     * @desc Controleur du module connexion
     *
     */
    /* @ngInject */
    function loginCtrl(loggerService, loginService, $state, toaster) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.login = login;

        initController();

        /**
         * @ngdoc function
         * @name app.cors.login.loginCtrl#initController
         *
         */
        function initController() {
            // status login
            loggerService.logout();
        };


        /**
         * @ngdoc function
         * @name app.cors.login.loginCtrl#login
         *
         */
        function login(){
            $ctrl.loading = true;
            // construction objet connexion form
            var login = {
                username :$ctrl.username,
                password: $ctrl.password
            };

            loginService.PostLogin(login).then(function success(response) {
                if( response.authorisation === true ) {
                    $state.go('home');
                } else {
                        toaster.pop('error', "", "Identifiant ou/et Mot de passe incorrect(s)");
                }
                $ctrl.loading = false;
            }, function error(error) {
                $ctrl.loading = false;
                loggerService.error('login - create ',error);
            });
        }
    }

    loginCtrl.$inject = ['loggerService', 'loginService', '$state', 'toaster'];

    angular.module('app.cors.login')
        .component('login', {
            templateUrl: 'app/modules/login/login.tpl.html',
            controller: loginCtrl
        });
})(angular);