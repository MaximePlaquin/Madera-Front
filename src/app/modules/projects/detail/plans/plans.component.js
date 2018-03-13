(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsPlans.projectsPlansCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsPlansCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsPlans', {
            templateUrl: 'app/modules/projects/detail/plans/plans.tpl.html',
            controller: projectsPlansCtrl
        });
})(angular);