(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.tableExtensionsCtrl
     * @desc Controleur du component table
     * @param extensionsService
     * @param notificationService
     * @param loggerService
     * @param checkInputService
     */
    /* @ngInject */
    function tableExtensionsCtrl(extensionsService, notificationService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableExtensionsCtrl#pagination
         * @methodOf app.cors.users.tableExtensionsCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.extensions.tableExtensionsCtrl#listExtensions
         * @methodOf app.cors.extensions.tableExtensionsCtrl
         * @description
         * Initilisation structure tableau
         *
         */
        $ctrl.listExtensions = {
            'header': [
                { 'id': 'Référence' },
                { 'name': 'Libellé' },
                { 'price': 'Tarif' },
                { 'range': 'Gamme' },
                { 'edit': 'Modifier' },
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc method
         * @name app.cors.extensions.tableExtensionsCtrl#getAllExtensions
         * @methodOf app.cors.extensions.tableExtensionsCtrl
         * @description
         * Appel initialisation tableau utilisateurs
         *
         */
        getAllExtensions();

        /**
         * @ngdoc method
         * @name app.cors.extensions.tableExtensionsCtrl#delete
         * @methodOf app.cors.extensions.tableExtensionsCtrl
         * @description
         * Appel suppression utilisateurs
         *
         */
        $ctrl.delete = deleteExtensions;

        /**
         * @ngdoc function
         * @name app.cors.extensions.tableExtensionsCtrl#getAllExtensions
         * @methodOf app.cors.extensions.tableExtensionsCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllExtensions(){
            extensionsService.GetAllExtensions().then(function success(response) {
                $ctrl.listExtensions.rows = response;
                loggerService.debug('extensions - table ',response);
            }, function error(error) {
                loggerService.error('extensions - table ',error);
            });
        }
        $ctrl.edit = $ctrl.editExtension;
        /**
         * @ngdoc function
         * @name app.cors.extensions.tableExtensionsCtrl##deleteExtensions
         * @description suppression profil
         *
         * @param value
         */
        function deleteExtensions(value){
            extensionsService.DeleteExtensions(value).then(function success() {
                deleteExtensionsArray(value);
            }, function error(error) {
                loggerService.error('Extensions - delete ',error);
            });
        }
        function deleteExtensionsArray(value) {
            var index = -1;
            var array = $ctrl.listExtensions.rows;
            for( var i = 0; i < array.length; i++ ) {
                if( array[i].id === value ) {
                    index = i;
                    break;
                }
            }
            $ctrl.listExtensions.rows.splice( index, 1 );
        }


    }

    tableExtensionsCtrl.$inject = ['extensionsService', 'notificationService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.extensions')
        .component('tableExtensions', {
            templateUrl: 'app/modules/extensions/table/table.tpl.html',
            controller: tableExtensionsCtrl,
            bindings: {
                editExtension: '='
            }
        });
})(angular);