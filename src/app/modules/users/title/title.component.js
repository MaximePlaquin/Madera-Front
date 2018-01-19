(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.titleUsersCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleUsersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.users')
        .component('titleUsers', {
            templateUrl: 'app/modules/users/title/title.tpl.html',
            controller: titleUsersCtrl
        });
})(angular);