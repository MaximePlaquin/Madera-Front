(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.header.headerCtrl
     * @desc Controleur du module header
     *
     */
    /* @ngInject */
    function headerCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.user = {
            firstName : 'Guy',
            lastName : 'Madera',
            fonction: 'Directeur',
            isAdmin: 'true'
        };
    }

    angular.module('app.layout.header')
        .component('layoutHeader', {
            templateUrl: 'app/layout/header/header.tpl.html',
            controller: headerCtrl
        });
})(angular);