(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.messageHomeCtrl
     * @desc Controleur du component message
     *
     */
    /* @ngInject */
    function messageHomeCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.home')
        .component('messageHome', {
            templateUrl: 'app/modules/home/message/message.tpl.html',
            controller: messageHomeCtrl
        });
})(angular);