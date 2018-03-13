(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsCustomers.projectsCustomersCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsCustomersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsCustomers', {
            templateUrl: 'app/modules/projects/detail/customers/customers.tpl.html',
            controller: projectsCustomersCtrl
        });
})(angular);