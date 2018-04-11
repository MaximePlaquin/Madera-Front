(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCreate.projectsCreateCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsCreateCtrl(projectsService, loggerService, customersService, houseService, usersService ) {
        /*jshint validthis : true*/
        var $ctrl = this;

        getAllCustomers();

        getAllUsers();

        getAllHouses();


        $ctrl.send = createProjects;


        function createProjects(value){
            projectsService.CreateProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('create projects ',error);
            });
        }


        function getAllCustomers(){
            customersService.GetAllCustomers().then(function success(response) {
                $ctrl.listCustomers = response;
                loggerService.debug('create project - customers list ',response);
            }, function error(error) {
                loggerService.error('create project - customers list',error);
            });
        }

        function getAllUsers(){
            usersService.GetAllUsers().then(function success(response) {
                $ctrl.listUsers = response;
                loggerService.debug('create project - users list',response);
            }, function error(error) {
                loggerService.error('create project - users list',error);
            });
        }

        function getAllHouses(){
            houseService.GetAllHouse().then(function success(response) {
                $ctrl.listHouses = response;
                loggerService.debug('create project - houses list',response);
            }, function error(error) {
                loggerService.error('create project - houses list',error);
            });
        }

    }

    projectsCreateCtrl.$inject = ['projectsService', 'loggerService', 'customersService', 'houseService', 'usersService'];

    angular.module('app.cors.projectsCreate')
        .component('projectsCreate', {
            templateUrl: 'app/modules/projects/create/create.tpl.html',
            controller: projectsCreateCtrl
        });
})(angular);
