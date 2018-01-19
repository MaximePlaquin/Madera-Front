(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.componentsCtrl
     * @desc Controleur du module composants
     *
     */
    /* @ngInject */
    function componentsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.components')
        .component('components', {
            templateUrl: 'app/modules/components/components.tpl.html',
            controller: componentsCtrl
        });
})(angular);