(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsDetail.projectsDetailCtrl
     * @desc Controleur du module projet
     *
     * @param $stateParams
     * @param projectsService
     * @param loggerService
     */
    /* @ngInject */
    function projectsDetailCtrl($stateParams, projectsService, loggerService,customersService,quotationService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc function
         * @name app.cors.projects.projectsDetailCtrl#getProjects
         * @methodOf app.cors.projects.projectsDetailCtrl
         * @description
         * fonction appel au service
         *
         */
        getProjects();


        /**
         * @ngdoc function
         * @name app.cors.projects.projectsDetailCtrl#getProjects
         * @methodOf app.cors.projects.projectsDetailCtrl
         * @description
         * fonction appel au service
         *
         */
        function getProjects(){
            if( $stateParams.id !== '') {
                projectsService.GetProjects($stateParams.id).then(function success(response){
                    $ctrl.infosProject = response;
                    $ctrl.idProject = $stateParams.id;
                    custumersById();
                    loggerService.debug('projects - detail ', response);
                }, function error(error) {
                    loggerService.error('projects - detail ', error);
                });
            }
        }

        function custumersById(){
            customersService.GetCustomers($ctrl.infosProject.ID_client).then(
                function success(response) {
                    $ctrl.customer = response ;
                },function error (error) {
                    console.log(error);
                }
            )

        }



    }

    projectsDetailCtrl.$inject = ['$stateParams', 'projectsService', 'loggerService','customersService','quotationService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsDetail', {
            templateUrl: 'app/modules/projects/detail/detail.tpl.html',
            controller: projectsDetailCtrl
        });
})(angular);