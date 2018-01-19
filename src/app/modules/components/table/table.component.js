(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.tableComponentsCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableComponentsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.components')
        .component('tableComponents', {
            templateUrl: 'app/modules/components/table/table.tpl.html',
            controller: tableComponentsCtrl
        });
})(angular);