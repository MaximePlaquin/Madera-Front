(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.titleComponentsCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleComponentsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.components')
        .component('titleComponents', {
            templateUrl: 'app/modules/components/title/title.tpl.html',
            controller: titleComponentsCtrl
        });
})(angular);