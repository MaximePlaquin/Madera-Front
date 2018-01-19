(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.usersCtrl
     * @desc Controleur du module utilisateurs
     *
     */
    /* @ngInject */
    function usersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.users')
        .component('users', {
            templateUrl: 'app/modules/users/users.tpl.html',
            controller: usersCtrl
        });
})(angular);