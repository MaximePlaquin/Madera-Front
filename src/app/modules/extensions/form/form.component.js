(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.formExtensionsCtrl
     * @desc Controleur du component formulaire creation
     *
     */
    /* @ngInject */
    function formExtensionsCtrl(extensionsService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc function
         * @name app.cors.extensions.formExtensionsCtrl#create
         * @description appel fonction controle formulaire
         *
         */
        $ctrl.create = checkForm;

        /**
         * @ngdoc function
         * @name app.cors.extensions.formExtensionsCtrl#checkForm
         * @description controle creation
         *
         */
        function checkForm(value){
            if(!checkInputService.isUndefinedOrNull(value)) {
                    createExtensions(value);
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.extensions.formExtensionsCtrl#createExtensions
         * @description création module
         *
         * @param value
         */
        function createExtensions(value){
            extensionsService.CreateExtensions(value).then(function success() {
            }, function error(error) {
                loggerService.error('extensions - create ',error);
            });
        }
    }

    formExtensionsCtrl.$inject = [ 'extensionsService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.extensions')
        .component('formExtensions', {
            templateUrl: 'app/modules/extensions/form/form.tpl.html',
            controller: formExtensionsCtrl
        });
})(angular);