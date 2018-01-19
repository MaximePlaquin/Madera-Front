(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.formProjectsCtrl
     * @desc Controleur du component form
     *
     */
    /* @ngInject */
    function formProjectsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projects')
        .component('formProjects', {
            templateUrl: 'app/modules/projects/form/form.tpl.html',
            controller: formProjectsCtrl
        });
})(angular);