(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.ranges.formRangesCtrl
     * @desc Controleur du component formulaire creation
     *
     */
    /* @ngInject */
    function formRangesCtrl(rangesService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.ranges.formRangesCtrl#range
         * @description initialisation objet formulaire
         *
         */
        $ctrl.range = {};

        /**
         * @ngdoc function
         * @name app.cors.ranges.formRangesCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.ranges.formRangesCtrl#send
         * @description controle creation ou maj
         *
         */
        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createRanges(value);
                } else {
                    editRanges(value);
                }
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.formRangesCtrl#editRanges
         * @description mise a jour gammes
         *
         * @param value
         */
        function editRanges(value){
            rangesService.EditRanges(value).then(function success() {
            }, function error(error) {
                loggerService.error('ranges - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.formRangesCtrl#createRanges
         * @description création gammes
         *
         * @param value
         */
        function createRanges(value){
            rangesService.CreateRanges(value).then(function success() {
            }, function error(error) {
                loggerService.error('ranges - create ',error);
            });
        }
    }

    formRangesCtrl.$inject = [ 'rangesService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.ranges')
        .component('formRanges', {
            templateUrl: 'app/modules/ranges/form/form.tpl.html',
            controller: formRangesCtrl,
            bindings: {
                range: '='
            }
        });
})(angular);