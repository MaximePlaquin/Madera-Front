(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.customers.titleCustomersCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleCustomersCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.customers')
        .component('titleCustomers', {
            templateUrl: 'app/modules/customers/title/title.tpl.html',
            controller: titleCustomersCtrl
        });
})(angular);