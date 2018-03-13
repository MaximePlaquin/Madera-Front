(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.formUsersCtrl
     * @desc Controleur du component form
     *
     * @param usersService
     * @param loggerService
     * @param checkInputService
     */
    /* @ngInject */
    function formUsersCtrl(usersService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.formUsersCtrl#user
         * @description objet formulaire utilisateur
         *
         */
        $ctrl.user = {};

        /**
         * @ngdoc method
         * @name app.cors.users.formUsersCtrl#reset
         * @description reinitialisation formulaire
         *
         */
        $ctrl.reset = function () {
            $ctrl.user = {};
            $ctrl.form_user.$setPristine()
        };

        /**
         * @ngdoc function
         * @name app.cors.users.formUsersCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.users.formUsersCtrl#send
         * @description controle creation ou maj
         *
         */
        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createUsers(value);
                } else {
                    editUsers(value);
                }
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.users.formUsersCtrl#editUsers
         * @description mise a jour profil
         *
         * @param value
         */
        function editUsers(value){
            usersService.UpdateUsers(value).then(function success() {
            }, function error(error) {
                loggerService.error('users - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.users.formUsersCtrl#createUsers
         * @description création profil
         *
         * @param value
         */
        function createUsers(value){
            usersService.CreateUsers(value).then(function success() {
            }, function error(error) {
                loggerService.error('users - create ',error);
            });
        }
    }

    formUsersCtrl.$inject = ['usersService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.users')
        .component('formUsers', {
            templateUrl: 'app/modules/users/form/form.tpl.html',
            controller: formUsersCtrl,
            bindings:{
                user: '='
            }
        });
})(angular);