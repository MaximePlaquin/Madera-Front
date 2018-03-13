(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.tableProjectsCtrl
     * @desc Controleur du component table
     * @param projectsService
     * @param loggerService
     */
    /* @ngInject */
    function tableProjectsCtrl(projectsService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableProjectsCtrl#pagination
         * @methodOf app.cors.users.tableProjectsCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.projects.tableProjectsCtrl#listProjects
         * @methodOf app.cors.projects.tableProjectsCtrl
         * @description
         * Initilisation structure tableau
         *
         */
        $ctrl.listProjects = {
            'header': [
                { 'checkboxe': '' },
                { 'id': 'Référence projet' },
                { 'idClient': 'Référence client' },
                { 'status': 'Status' },
                { 'step': 'Etape' },
                { 'date': 'Date Création - Modification' },
                { 'edit': 'Modifier' },
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'id',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc method
         * @name app.cors.projects.tableProjectsCtrl#getAllProjects
         * @methodOf app.cors.projects.tableProjectsCtrl
         * @description
         * Appel initialisation tableau projets
         *
         */
        getAllProjects();

        /**
         * @ngdoc method
         * @name app.cors.projects.tableProjectsCtrl#delete
         * @methodOf app.cors.projects.tableProjectsCtrl
         * @description
         * Appel suppression projets
         *
         */
        $ctrl.delete = deleteProjects;

        /**
         * @ngdoc function
         * @name app.cors.projects.tableProjectsCtrl#getAllProjects
         * @methodOf app.cors.projects.tableDiaporamasCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllProjects(){
            projectsService.GetAllProjects().then(function success(response) {
                $ctrl.listProjects.rows = response;
                loggerService.debug('projects - table ',response);
            }, function error(error) {
                loggerService.error('projects - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.projects.tableProjectsCtrl#deleteProjects
         * @description suppression profil
         *
         * @param value
         */
        function deleteProjects(value){
            projectsService.DeleteProjects(value).then(function success() {
            }, function error(error) {
                loggerService.error('projects - delete ',error);
            });
        }
    }

    tableProjectsCtrl.$inject = ['projectsService', 'loggerService'];

    angular.module('app.cors.projects')
        .component('tableProjects', {
            templateUrl: 'app/modules/projects/table/table.tpl.html',
            controller: tableProjectsCtrl
        });
})(angular);