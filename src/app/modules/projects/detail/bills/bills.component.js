(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsBills.projectsBillsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsBillsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsBills', {
            templateUrl: 'app/modules/projects/detail/bills/bills.tpl.html',
            controller: projectsBillsCtrl
        });
})(angular);