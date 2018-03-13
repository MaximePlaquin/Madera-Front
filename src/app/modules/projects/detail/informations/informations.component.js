(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsInformations.projectsInformationsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsInformationsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsInformations', {
            templateUrl: 'app/modules/projects/detail/informations/informations.tpl.html',
            controller: projectsInformationsCtrl
        });
})(angular);