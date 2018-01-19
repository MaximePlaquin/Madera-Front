(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.profile.titleProfileCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleProfileCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.profile')
        .component('titleProfile', {
            templateUrl: 'app/modules/profile/title/title.tpl.html',
            controller: titleProfileCtrl
        });
})(angular);