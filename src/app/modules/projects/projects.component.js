(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projects')
        .component('projects', {
            templateUrl: 'app/modules/projects/projects.tpl.html',
            controller: projectsCtrl
        });
})(angular);