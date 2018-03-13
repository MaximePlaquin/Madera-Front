(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.formComponentsCtrl
     * @desc Controleur du component formulaire creation
     *
     */
    /* @ngInject */
    function formComponentsCtrl(componentsService, loggerService, checkInputService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.components.formComponentsCtrl#component
         * @description objet formulaire composant
         *
         */
        $ctrl.component = {};

        /**
         * @ngdoc function
         * @name app.cors.components.formComponentsCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.send = send;

        /**
         * @ngdoc function
         * @name app.cors.components.formComponentsCtrl#send
         * @description controle creation ou maj
         *
         */
        function send(value){
            if(checkInputService.isUndefinedOrNull(value)) {
                if(checkInputService.isUndefinedOrNull(value.id)) {
                    createComponents(value);
                } else {
                    editComponents(value);
                }
            }
        }

        /**
         * @ngdoc function
         * @name app.cors.components.formComponentsCtrl#editComponents
         * @description mise a jour composants
         *
         * @param value
         */
        function editComponents(value){
            componentsService.EditComponents(value).then(function success() {
            }, function error(error) {
                loggerService.error('components - edit ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.components.formComponentsCtrl#createComponents
         * @description création composants
         *
         * @param value
         */
        function createComponents(value){
            componentsService.CreateComponents(value).then(function success() {
            }, function error(error) {
                loggerService.error('components - create ',error);
            });
        }
    }

    formComponentsCtrl.$inject = [ 'componentsService', 'loggerService', 'checkInputService'];

    angular.module('app.cors.components')
        .component('formComponents', {
            templateUrl: 'app/modules/components/form/form.tpl.html',
            controller: formComponentsCtrl,
            bindings: {
                component: '='
            }
        });
})(angular);