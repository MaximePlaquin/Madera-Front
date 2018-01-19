(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.directoryHomeCtrl
     * @desc Controleur du component services
     *
     */
    /* @ngInject */
    function directoryHomeCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.home')
        .component('directoryHome', {
            templateUrl: 'app/modules/home/directory/directory.tpl.html',
            controller: directoryHomeCtrl
        });
})(angular);