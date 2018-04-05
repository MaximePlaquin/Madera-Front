(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsCtrl(projectsService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;


        /**
         * @ngdoc property
         * @name app.cors.components.formComponentsCtrl#editProject
         * @description appel fonction recuperer valeur projet
         *
         */
        $ctrl.editProject = getProject;

        /**
         * @ngdoc function
         * @name app.cors.components.componentsCtrl#getProject
         * @description recupere les valeurs du projet
         *
         */

        function getProject(value){
            console.log(value);
            projectsService.GetProjects(value).then(function success(response) {
                console.log(response);
                $ctrl.project = response;

                console.log($ctrl.project);
            }, function error(error) {
                loggerService.error('projects - get ',error);
            });
        }
    }

    projectsCtrl.$inject = ['projectsService', 'loggerService'];

    angular.module('app.cors.projects')
        .component('projects', {
            templateUrl: 'app/modules/projects/projects.tpl.html',
            controller: projectsCtrl
        });
})(angular);