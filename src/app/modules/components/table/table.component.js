(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.tableComponentsCtrl
     * @desc Controleur du component table
     * @param componentsService
     * @param loggerService
     */
    /* @ngInject */
    function tableComponentsCtrl(componentsService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableComponentsCtrl#pagination
         * @methodOf app.cors.users.tableComponentsCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.components.tableComponentsCtrl#listComponents
         * @methodOf app.cors.components.tableComponentsCtrl
         * @description
         * Initilisation structure tableau
         *
         */
        $ctrl.listComponents = {
            'header': [
                { 'id': 'Référence' },
                { 'name': 'Libellé' },
                { 'quantity': 'Quantité' },
                { 'price': 'Tarif' },
                { 'family': 'Famille' },
                { 'supplier': 'Fournisseur' },
                { 'edit': 'Modifier' },
                { 'delete': 'Supprimer' }
            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc method
         * @name app.cors.components.tableComponentsCtrl#getAllComponents
         * @methodOf app.cors.components.tableComponentsCtrl
         * @description
         * Appel initialisation tableau utilisateurs
         *
         */
        getAllComponents();

        /**
         * @ngdoc method
         * @name app.cors.components.tableComponentsCtrl#delete
         * @methodOf app.cors.components.tableComponentsCtrl
         * @description
         * Appel suppression utilisateurs
         *
         */
        $ctrl.delete = deleteComponents;

        /**
         * @ngdoc method
         * @name app.cors.components.tableComponentsCtrl#edit
         * @methodOf app.cors.components.tableComponentsCtrl
         * @description
         * Appel editer utilisateurs
         *
         */
        $ctrl.edit = $ctrl.editComponent;

        /**
         * @ngdoc function
         * @name app.cors.components.tableComponentsCtrl#getAllComponents
         * @methodOf app.cors.components.tableComponentsCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllComponents(){
            componentsService.GetAllComponents().then(function success(response) {
                $ctrl.listComponents.rows = response;
                loggerService.debug('components - table ',response);
            }, function error(error) {
                loggerService.error('components - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.components.tableComponentsCtrl#deleteComponents
         * @description suppression profil
         *
         * @param value
         */
        function deleteComponents(value){
            componentsService.DeleteComponents(value).then(function success() {
                deleteComponentsArray(value);
            }, function error(error) {
                loggerService.error('Components - delete ',error);
            });
        }
        function deleteComponentsArray(value) {
            var index = -1;
            var array = $ctrl.listComponents.rows;
            for( var i = 0; i < array.length; i++ ) {
                if( array[i].id === value ) {
                    index = i;
                    break;
                }
            }
            $ctrl.listComponents.rows.splice( index, 1 );
        }

    }

    tableComponentsCtrl.$inject = ['componentsService', 'loggerService'];

    angular.module('app.cors.components')
        .component('tableComponents', {
            templateUrl: 'app/modules/components/table/table.tpl.html',
            controller: tableComponentsCtrl,
            bindings: {
                editComponent: '=',
                listComponents :"=",
            }
        });
})(angular);