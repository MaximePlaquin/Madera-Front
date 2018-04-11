(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsPlans.projectsPlansCtrl
     * @desc Controleur du module projet
     *
     * @param plansService
     * @param loggerService
     */
    /* @ngInject */
    function projectsPlansCtrl(loggerService,houseService,projectsService,checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc method
         * @name app.cors.projects.plansPlansCtrl#getAllPlans
         * @methodOf app.cors.projects.plansPlansCtrl
         * @description
         * Appel initialisation tableau projets
         *
         */
        $ctrl.send = send;

        function send(value){
            if(checkInputService.isUndefinedOrNull(value))
                editMaison(value);
                console.log('zizi');
        }

        function editMaison(value){
            projectsService.EditProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - edit ',error);
            });
        }
        getAllHouses();

        /**
         * @ngdoc function
         * @name app.cors.projects.plansPlansCtrl#getAllPlans
         * @methodOf app.cors.projects.plansPlansCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllHouses(){
            houseService.GetAllHouse().then(function success(response) {
                $ctrl.listHouses = response;
                console.log($ctrl.listHouses);
                loggerService.debug('plans - table ',response);
            }, function error(error) {
                loggerService.error('plans - table ',error);
            });
        }

    }

    projectsPlansCtrl.$inject = ['loggerService','houseService','projectsService','checkInputService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsPlans', {
            templateUrl: 'app/modules/projects/detail/plans/plans.tpl.html',
            controller: projectsPlansCtrl,
            bindings:{
                idProject:'=',
                dataProject:'=',
            }

        });
})(angular);