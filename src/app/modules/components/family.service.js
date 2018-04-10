(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.components.familyService
     * @description Service du module components
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function familyService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.components.familyService#url
         * @methodOf app.cors.components.familyService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'familles';

        /**
         * @ngdoc property
         * @name app.cors.components.familyService#restFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise objet
         *
         */
        var restFamily = new restService(url);

        var service = {
            GetAllFamily: GetAllFamily,
            GetFamily: GetFamily,
            DeleteFamily: DeleteFamily,
            CreateFamily: CreateFamily,
            EditFamily: EditFamily
        };

        /**
         * @ngdoc function
         * @name app.cors.components.familyService#GetAllFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise requete Get
         *
         */
        function GetAllFamily() {
            return restFamily.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.components.familyService#GetFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise requete Get
         * @param data
         */
        function GetFamily(data) {
            return restFamily.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.familyService#DeleteFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise requete Delete
         * @param data
         */
        function DeleteFamily(data) {
            return restFamily.Delete(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.familyService#EditFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise requete Put
         * @param data
         */
        function EditFamily(data) {
            console.log(data);
            return restFamily.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.components.familyService#CreateFamily
         * @methodOf app.cors.components.familyService
         * @description Initialise requete Post
         * @param data
         */
        function CreateFamily(data) {
            console.log(data);
            return restFamily.Create(data);
        }

        return service;
    }

    familyService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.components')
        .service('familyService', familyService);

})(angular);
