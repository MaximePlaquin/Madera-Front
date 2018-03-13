(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.componentsCtrl
     * @desc Controleur du module composants
     *
     */
    /* @ngInject */
    function componentsCtrl(componentsService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.components.formComponentsCtrl#editComponent
         * @description appel fonction recuperer valeur composant
         *
         */
        $ctrl.editComponent = getComponent;

        /**
         * @ngdoc function
         * @name app.cors.components.componentsCtrl#getComponents
         * @description recupere les valeurs du composant
         *
         */
        function getComponent(value){
            console.log(value);
            componentsService.GetComponents(value).then(function success(response) {
                console.log(response);
                $ctrl.component = response;

                console.log($ctrl.component);
            }, function error(error) {
                loggerService.error('components - get ',error);
            });
        }
    }

    componentsCtrl.$inject = ['componentsService', 'loggerService'];

    angular.module('app.cors.components')
        .component('components', {
            templateUrl: 'app/modules/components/components.tpl.html',
            controller: componentsCtrl
        });
})(angular);