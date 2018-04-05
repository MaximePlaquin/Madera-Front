(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsDetail.projectsDetailCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsDetailCtrl($stateParams, projectsService, loggerService ) {
        /*jshint validthis : true*/
        var $ctrl = this;


        getProjects();


        function getProjects(){
            if( $stateParams.id !== '') {
                projectsService.GetProjects($stateParams.id).then(function success(response){
                    $ctrl.infosProject = response;
                    $ctrl.idProject = $stateParams.id;
                    loggerService.debug('projects - detail ', response);
                }, function error(error) {
                    loggerService.error('projects - detail ', error);
                });
            }
        }


    }

    projectsDetailCtrl.$inject = ['$stateParams', 'projectsService', 'loggerService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsDetail', {
            templateUrl: 'app/modules/projects/detail/detail.tpl.html',
            controller: projectsDetailCtrl
        });
})(angular);