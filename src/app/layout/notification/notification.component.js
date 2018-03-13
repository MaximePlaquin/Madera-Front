(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.notification.notificationCtrl
     * @desc Controleur du module notification
     *
     */
    /* @ngInject */
    function notificationCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.layout.notification')
        .component('layoutNotification', {
            templateUrl: 'app/layout/notification/notification.tpl.html',
            controller: notificationCtrl
        });
})(angular);