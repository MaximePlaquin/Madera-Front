(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsInformations.projectsInformationsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsInformationsCtrl(loggerService, projectsService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.send = send;

        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createProjects(value);
                } else {
                    editProjects(value);
                }
            }
        }


        /**
         * @ngdoc function
         * @name app.cors.projects.tableProjectsCtrl#editProjects
         * @description edit projet
         *
         * @param value
         */
        function editProjects(value){
            projectsService.EditProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.projects.tableProjectsCtrl#editProjects
         * @description edit projet
         *
         * @param value
         */
        function createProjects(value){
            projectsService.CreateProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - edit ',error);
            });
        }

    }

    projectsInformationsCtrl.$inject = ['loggerService', 'projectsService', 'checkInputService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsInformations', {
            templateUrl: 'app/modules/projects/detail/informations/informations.tpl.html',
            controller: projectsInformationsCtrl,
            bindings:{
                idProject:'=',
                infosProject:'='
            }
        });
})(angular);