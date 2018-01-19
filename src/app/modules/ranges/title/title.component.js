(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.titleRangesCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleRangesCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.ranges')
        .component('titleRanges', {
            templateUrl: 'app/modules/ranges/title/title.tpl.html',
            controller: titleRangesCtrl
        });
})(angular);