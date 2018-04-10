(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.formComponentsCtrl
     * @desc Controleur du component formulaire creation
     *
     */
    /* @ngInject */
    function formComponentsCtrl(componentsService, loggerService, checkInputService,suppliersService,rangesService,familyService,extensionsService) {
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
                $ctrl.listComponents.rows.push(value);
            }, function error(error) {
                loggerService.error('components - create ',error);
            });
        }




        /**
         * @ngdoc function
         * @name app.cors.components.formComponentsCtrl#getAllSuppliers
         * @description Appelle méthode getAllSuppliers
         *
         */
        getAllSuppliers();

        /**
         * @ngdoc function
         * @name app.cors.ranges.tableRangesCtrl#getAllRanges
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * fonction appel au service
         *
         */
        getAllFamily();

        function getAllFamily(){
            familyService.GetAllFamily().then(function success(response) {
                $ctrl.listFamilys = response;
                loggerService.debug('ranges - liste ',response);
            }, function error(error) {
                loggerService.error('ranges - liste ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.suppliers.tableSuppliersCtrl#getAllSuppliers
         * @methodOf app.cors.suppliers.tableDiaporamasCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllSuppliers(){
            suppliersService.GetAllSuppliers().then(function success(response) {
                $ctrl.listSuppliers = response;
                loggerService.debug('suppliers - table ',response);
            }, function error(error) {
                loggerService.error('suppliers - table ',error);
            });
        }
        getAllExtensions();

        /**
         * @ngdoc function
         * @name  app.cors.components.formComponentsCtrl#getAllExtensions
         * @methodOf  app.cors.components.formComponentsCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllExtensions(){
            extensionsService.GetAllExtensions().then(function success(response) {
                $ctrl.listExtensions = response;
                loggerService.debug('components - liste Module ',response);
            }, function error(error) {
                loggerService.error('components - liste Module  ',error);
            });
        }
    }

    formComponentsCtrl.$inject = [ 'componentsService', 'loggerService', 'checkInputService','suppliersService','rangesService','familyService','extensionsService'];

    angular.module('app.cors.components')
        .component('formComponents', {
            templateUrl: 'app/modules/components/form/form.tpl.html',
            controller: formComponentsCtrl,
            bindings: {
                component: '=',
                listComponents :"=",

            }
        });
})(angular);