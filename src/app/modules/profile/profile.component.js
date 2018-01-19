(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.profile.profileCtrl
     * @desc Controleur du module espace membre
     *
     */
    /* @ngInject */
    function profileCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.profile')
        .component('profile', {
            templateUrl: 'app/modules/profile/profile.tpl.html',
            controller: profileCtrl
        });
})(angular);