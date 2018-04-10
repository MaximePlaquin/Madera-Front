(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.tableRangesCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableRangesCtrl(rangesService, notificationService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableRangesCtrl#pagination
         * @methodOf app.cors.users.tableRangesCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        /**
         * @ngdoc property
         * @name app.cors.ranges.tableRangesCtrl#listRanges
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * Initilisation structure tableau
         *
         */
        $ctrl.listRanges = {
            'header': [
                { 'id': 'Référence' },
                { 'name': 'Libellé' },
                { 'outdoor': 'Finition extérieure' },
                { 'insulating': 'Type isolant' },
                { 'roofting': 'Type couverture' },
                { 'windowFrame': 'Huisserie' },
                { 'edit': 'Modifier' },
                { 'delete': 'Supprimer' }

            ],
            'rows': [],
            'sortBy': 'name',
            'sortOrder': 'asc'
        };

        /**
         * @ngdoc method
         * @name app.cors.ranges.tableRangesCtrl#getAllRanges
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * Appel initialisation tableau utilisateurs
         *
         */
        getAllRanges();

        /**
         * @ngdoc method
         * @name app.cors.ranges.tableRangesCtrl#edit
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * Appel mise a jour utilisateurs
         *
         */
         $ctrl.edit = $ctrl.editRange;

        /**
         * @ngdoc method
         * @name app.cors.ranges.tableRangesCtrl#delete
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * Appel suppression utilisateurs
         *
         */
        $ctrl.delete = deleteRanges;

        /**
         * @ngdoc function
         * @name app.cors.ranges.tableRangesCtrl#getAllRanges
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllRanges(){
            rangesService.GetAllRanges().then(function success(response) {
                $ctrl.listRanges.rows = response;
                loggerService.debug('ranges - table ',response);
            }, function error(error) {
                loggerService.error('ranges - table ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.tableRangesCtrl##deleteRanges
         * @description suppression profil
         *
         * @param value
         */
        function deleteRanges(value){
            rangesService.DeleteRanges(value).then(function success() {
                deleteRangesArray(value);
            }, function error(error) {
                loggerService.error('Ranges - delete ',error);
            });
        }
        function deleteRangesArray(value) {
            var index = -1;
            var array = $ctrl.listRanges.rows;
            for( var i = 0; i < array.length; i++ ) {
                if( array[i].id === value ) {
                    index = i;
                    break;
                }
            }
            $ctrl.listRanges.rows.splice( index, 1 );
        }


    }

    tableRangesCtrl.$inject = ['rangesService', 'notificationService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.ranges')
        .component('tableRanges', {
            templateUrl: 'app/modules/ranges/table/table.tpl.html',
            controller: tableRangesCtrl,
            bindings:{
                editRange: '='
            }
        });
})(angular);