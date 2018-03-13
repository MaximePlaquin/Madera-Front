(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsPayment.projectsPaymentCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsPaymentCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.projectsDetail')
        .component('projectsPayment', {
            templateUrl: 'app/modules/projects/detail/payment/payment.tpl.html',
            controller: projectsPaymentCtrl
        });
})(angular);