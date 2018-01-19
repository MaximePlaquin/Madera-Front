(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.formUsersCtrl
     * @desc Controleur du component form
     *
     */
    /* @ngInject */
    function formUsersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.users')
        .component('formUsers', {
            templateUrl: 'app/modules/users/form/form.tpl.html',
            controller: formUsersCtrl
        });
})(angular);