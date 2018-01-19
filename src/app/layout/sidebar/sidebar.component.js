(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.sidebar.sidebarCtrl
     * @desc Controleur du module sidebar
     *
     */
    /* @ngInject */
    function sidebarCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.layout.sidebar')
        .component('layoutSidebar', {
            templateUrl: 'app/layout/sidebar/sidebar.tpl.html',
            controller: sidebarCtrl
        });
})(angular);