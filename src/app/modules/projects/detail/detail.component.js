(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsDetail.projectsDetailCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsDetailCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsDetail', {
            templateUrl: 'app/modules/projects/detail/detail.tpl.html',
            controller: projectsDetailCtrl
        });
})(angular);