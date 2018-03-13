(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.usersCtrl
     * @desc Controleur du module utilisateurs
     *
     */
    /* @ngInject */
    function usersCtrl(usersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.formUsersCtrl#editUser
         * @description appel fonction recuperer valeur utilisateur
         *
         */
        $ctrl.editUser = getUser;

        /**
         * @ngdoc function
         * @name app.cors.users.usersCtrl#getUser
         * @description recupere les valeurs du users
         *
         */
        function getUser(value){
            usersService.GetUsers(value).then(function success(response) {
                $ctrl.user = response;
            }, function error(error) {
                loggerService.error('users - get ',error);
            });
        }

    }

    usersCtrl.$inject = ['usersService', 'loggerService'];

    angular.module('app.cors.users')
        .component('users', {
            templateUrl: 'app/modules/users/users.tpl.html',
            controller: usersCtrl,
        });
})(angular);