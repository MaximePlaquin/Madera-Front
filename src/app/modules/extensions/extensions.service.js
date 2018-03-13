(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.extensions.extensionsService
     * @description Service du module extensions
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function extensionsService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.extensions.extensionsService#url
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'extensions';

        /**
         * @ngdoc property
         * @name app.cors.extensions.extensionsService#restExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise objet
         *
         */
        var restExtensions = new restService(url);

        var service = {
            GetAllExtensions: GetAllExtensions,
            GetExtensions: GetExtensions,
            DeleteExtensions: DeleteExtensions,
            EditExtensions: EditExtensions,
            CreateExtensions: CreateExtensions
        };

        /**
         * @ngdoc function
         * @name app.cors.extensions.extensionsService#GetExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise requete Get
         *
         */
        function GetAllExtensions() {
            return restExtensions.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.extensions.extensionsService#GetExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise requete Get
         * @param data
         */
        function GetExtensions(data) {
            console.log(data);
            return restExtensions.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.extensions.extensionsService#DeleteExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise requete Get
         * @param data
         */
        function DeleteExtensions(data) {
            return restExtensions.Delete(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.extensions.extensionsService#EditExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise requete Put
         * @param data
         */
        function EditExtensions(data) {
            return restExtensions.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.extensions.extensionsService#CreateExtensions
         * @methodOf app.cors.extensions.extensionsService
         * @description Initialise requete Post
         * @param data
         */
        function CreateExtensions(data) {
            return restExtensions.Create(data);
        }

        return service;
    }

    extensionsService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.extensions')
        .service('extensionsService', extensionsService);

})(angular);
