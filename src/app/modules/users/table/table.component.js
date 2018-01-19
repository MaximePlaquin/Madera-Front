(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.tableUsersCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableUsersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.users')
        .component('tableUsers', {
            templateUrl: 'app/modules/users/table/table.tpl.html',
            controller: tableUsersCtrl
        });
})(angular);