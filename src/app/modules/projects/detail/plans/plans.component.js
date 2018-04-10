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
    function projectsPlansCtrl(loggerService,houseService) {
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

    projectsPlansCtrl.$inject = ['loggerService','houseService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsPlans', {
            templateUrl: 'app/modules/projects/detail/plans/plans.tpl.html',
            controller: projectsPlansCtrl,
            bindings:{
                idProject:'=',
                dataProject:'='
            }

        });
})(angular);