(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.rangesCtrl
     * @desc Controleur du module gammes
     *
     */
    /* @ngInject */
    function rangesCtrl(rangesService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.ranges.formRangesCtrl#editRange
         * @description appel fonction recuperer valeur gamme
         *
         */
        $ctrl.editRange = getRange;

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesCtrl#getRanges
         * @description recupere les valeurs du gamme
         *
         */
        function getRange(value){
            rangesService.GetRanges(value).then(function success(response) {
                $ctrl.range = response;
            }, function error(error) {
                loggerService.error('ranges - get ',error);
            });
        }
    }

    rangesCtrl.$inject = ['rangesService', 'loggerService'];

    angular.module('app.cors.ranges')
        .component('ranges', {
            templateUrl: 'app/modules/ranges/ranges.tpl.html',
            controller: rangesCtrl
        });
})(angular);