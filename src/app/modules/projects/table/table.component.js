(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.tableProjectsCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableProjectsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projects')
        .component('tableProjects', {
            templateUrl: 'app/modules/projects/table/table.tpl.html',
            controller: tableProjectsCtrl
        });
})(angular);