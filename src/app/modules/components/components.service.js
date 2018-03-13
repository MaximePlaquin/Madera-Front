(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.components.componentsService
     * @description Service du module components
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function componentsService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.components.componentsService#url
         * @methodOf app.cors.components.componentsService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'components';

        /**
         * @ngdoc property
         * @name app.cors.components.componentsService#restComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise objet
         *
         */
        var restComponents = new restService(url);

        var service = {
            GetAllComponents: GetAllComponents,
            GetComponents: GetComponents,
            DeleteComponents: DeleteComponents,
            CreateComponents: CreateComponents,
            EditComponents: EditComponents
        };

        /**
         * @ngdoc function
         * @name app.cors.components.componentsService#GetAllComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise requete Get
         *
         */
        function GetAllComponents() {
            return restComponents.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.components.componentsService#GetComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise requete Get
         * @param data
         */
        function GetComponents(data) {
            return restComponents.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.componentsService#DeleteComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise requete Delete
         * @param data
         */
        function DeleteComponents(data) {
            return restComponents.Delete(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.componentsService#EditComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise requete Put
         * @param data
         */
        function EditComponents(data) {
            return restComponents.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.componentsService#CreateComponents
         * @methodOf app.cors.components.componentsService
         * @description Initialise requete Post
         * @param data
         */
        function CreateComponents(data) {
            return restComponents.Create(data);
        }

        return service;
    }

    componentsService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.components')
        .service('componentsService', componentsService);

})(angular);
