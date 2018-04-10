(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.formExtensionsCtrl
     * @desc Controleur du component formulaire creation
     *
     */
    /* @ngInject */
    function formExtensionsCtrl(extensionsService, loggerService, checkInputService , rangesService,houseService) {
        /*jshint validthis : true*/
        var $ctrl = this;
        $ctrl.extension = {};
        /**
         * @ngdoc function
         * @name app.cors.extensions.formExtensionsCtrl#create
         * @description appel fonction controle formulaire
         *
         */
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
                    createExtensions(value);
                } else {
                    editExtensions(value);
                }
            }
        }




        function editExtensions(value){
            extensionsService.EditExtensions(value).then(function success() {
            }, function error(error) {
                loggerService.error('extensions - edit ',error);
            });
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


        getAllRanges();
        /**
         * @ngdoc function
         * @name app.cors.ranges.tableRangesCtrl#getAllRanges
         * @methodOf app.cors.ranges.tableRangesCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllRanges(){
            rangesService.GetAllRanges().then(function success(response) {
                $ctrl.listRanges = response;
                loggerService.debug('ranges - table ',response);
            }, function error(error) {
                loggerService.error('ranges - table ',error);
            });
        }
        getAllHouses();

        function getAllHouses(){
            houseService.GetAllHouse().then(function success(response) {
                $ctrl.listHouses = response;
                console.log($ctrl.listHouses);
                loggerService.debug('extensions - house ',response);
            }, function error(error) {
                loggerService.error('extensions - house ',error);
            });
        }
    }

    formExtensionsCtrl.$inject = [ 'extensionsService', 'loggerService', 'checkInputService' , 'rangesService','houseService'];
    angular.module('app.cors.extensions')
        .component('formExtensions', {
            templateUrl: 'app/modules/extensions/form/form.tpl.html',
            controller: formExtensionsCtrl,
            bindings: {
                extension: '='
            }
        });
})(angular);