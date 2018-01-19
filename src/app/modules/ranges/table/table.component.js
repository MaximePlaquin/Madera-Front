(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.tableRangesCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableRangesCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.ranges')
        .component('tableRanges', {
            templateUrl: 'app/modules/ranges/table/table.tpl.html',
            controller: tableRangesCtrl
        });
})(angular);