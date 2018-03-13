(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.formProjectsCtrl
     * @desc Controleur du component form
     *
     */
    /* @ngInject */
    function formProjectsCtrl(projectsService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

       /**
         * @ngdoc property
         * @name app.cors.components.formProjectsCtrl#component
         * @description objet formulaire composant
         *
         */
        $ctrl.project = {};

        /**
         * @ngdoc function
         * @name app.cors.components.formProjectsCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.components.formProjectsCtrl#send
         * @description controle creation ou maj
         *
         */
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
         * @name app.cors.components.formProjectsCtrl#editProjects
         * @description mise a jour projets
         *
         * @param value
         */
        function editProjects(value){
            componentsService.EditProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.components.formProjectsCtrl#createProjects
         * @description création projets
         *
         * @param value
         */
        function createProjects(value){
            componentsService.CreateProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - create ',error);
            });
        }
    }

    formProjectsCtrl.$inject = [ 'projectsService', 'loggerService', 'checkInputService'];


    angular.module('app.cors.projects')
        .component('formProjects', {
            templateUrl: 'app/modules/projects/form/form.tpl.html',
            controller: formProjectsCtrl,
            bindings: {
                project: '='
            }
        });
})(angular);