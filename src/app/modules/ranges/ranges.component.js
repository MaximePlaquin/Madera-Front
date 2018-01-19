(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.rangesCtrl
     * @desc Controleur du module gammes
     *
     */
    /* @ngInject */
    function rangesCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.ranges')
        .component('ranges', {
            templateUrl: 'app/modules/ranges/ranges.tpl.html',
            controller: rangesCtrl
        });
})(angular);