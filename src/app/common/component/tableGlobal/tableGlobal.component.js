(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.common.component.tableGlobal
     * @desc Controleur du module tableGlobal
     *
     */
    /* @ngInject */
    function tableGlobalCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.filters = '';
    }

    angular.module('app.common.component.tableGlobal')
        .component('tableGlobal', {
            templateUrl: 'app/common/component/tableGlobal/tableGlobal.tpl.html',
            transclude: true,
            controller: tableGlobalCtrl,
            bindings: {
                tabColClass: '@',
                tabTitle: '@',
                tabFilters: '=',
                tabFiltersShow: '<',
                tabResource: '='
            }
        });
})(angular);