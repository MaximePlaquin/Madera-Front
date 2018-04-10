(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.extensionsCtrl
     * @desc Controleur du module modules
     *
     */
    /* @ngInject */
    function extensionsCtrl(extensionsService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.ranges.formExtensionsCtrl#editExtension
         * @description appel fonction recuperer valeur gamme
         *
         */
        $ctrl.editExtension = getExtension;

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesCtrl#getExtensions
         * @description recupere les valeurs du gamme
         *
         */
        function getExtension(value){
            extensionsService.GetExtensions(value).then(function success(response) {
                $ctrl.extension = response;
            }, function error(error) {
                loggerService.error('extension - get ',error);
            });
        }




    }

    extensionsCtrl.$inject = ['extensionsService', 'loggerService'];

    angular.module('app.cors.extensions')
        .component('extensions', {
            templateUrl: 'app/modules/extensions/extensions.tpl.html',
            controller: extensionsCtrl
        });
})(angular);