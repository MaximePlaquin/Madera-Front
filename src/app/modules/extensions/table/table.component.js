(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.tableExtensionsCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableExtensionsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.extensions')
        .component('tableExtensions', {
            templateUrl: 'app/modules/extensions/table/table.tpl.html',
            controller: tableExtensionsCtrl
        });
})(angular);