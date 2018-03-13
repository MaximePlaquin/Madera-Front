(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.users.tableUsersCtrl
     * @desc Controleur du component table
     *
     * @param usersService
     * @param loggerService
     */
    /* @ngInject */
    function tableUsersCtrl(usersService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableUsersCtrl#listUsers
         * @methodOf app.cors.users.tableUsersCtrl
         * @description Initilisation structure tableau
         *
         */
        $ctrl.listUsers = {
            'header': [
                { 'id': 'Identifiant' },
                { 'name': 'Nom' },
                { 'edit': 'Modifier' },
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc property
         * @name app.cors.users.tableUsersCtrl#pagination
         * @methodOf app.cors.users.tableUsersCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc method
         * @name app.cors.users.tableUsersCtrl#getAllUsers
         * @methodOf app.cors.users.tableUsersCtrl
         * @description
         * Appel initialisation tableau utilisateurs
         *
         */
        getAllUsers();

        /**
         * @ngdoc method
         * @name app.cors.users.tableUsersCtrl#delete
         * @methodOf app.cors.users.tableUsersCtrl
         * @description
         * Appel suppression utilisateurs
         *
         */
        $ctrl.delete = deleteUsers;

        /**
         * @ngdoc method
         * @name app.cors.users.tableUsersCtrl#edit
         * @methodOf app.cors.users.tableUsersCtrl
         * @description
         * Appel get utilisateur
         *
         */
        $ctrl.edit = $ctrl.editUser;

        /**
         * @ngdoc function
         * @name app.cors.users.tableUsersCtrl#getAllUsers
         * @methodOf app.cors.users.tableDiaporamasCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllUsers(){
            usersService.GetAllUsers().then(function success(response) {
                $ctrl.listUsers.rows = response;
                loggerService.debug('users - table ',response);
            }, function error(error) {
                loggerService.error('users - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.users.tableUsersCtrl#deleteUsers
         * @description suppression profil
         *
         * @param value
         */
        function deleteUsers(value){
            usersService.DeleteUsers(value).then(function success() {
            }, function error(error) {
                loggerService.error('users - delete ',error);
            });
        }
    }

    tableUsersCtrl.$inject = ['usersService', 'loggerService'];

    angular.module('app.cors.users')
        .component('tableUsers', {
            templateUrl: 'app/modules/users/table/table.tpl.html',
            controller: tableUsersCtrl,
            bindings:{
                editUser: '='
            }
        });
})(angular);