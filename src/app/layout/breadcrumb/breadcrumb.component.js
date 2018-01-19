(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.breadcrumb.breadcrumbCtrl
     * @desc Controleur du module breadcrumb
     *
     */
    /* @ngInject */
    function breadcrumbCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.layout.breadcrumb')
        .component('layoutBreadcrumb', {
            templateUrl: 'app/layout/breadcrumb/breadcrumb.tpl.html',
            controller: breadcrumbCtrl
        });
})(angular);