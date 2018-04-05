(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.titleProjectsCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleProjectsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

    }

    angular.module('app.cors.projects')
        .component('titleProjects', {
            templateUrl: 'app/modules/projects/title/title.tpl.html',
            controller: titleProjectsCtrl
        });
})(angular);