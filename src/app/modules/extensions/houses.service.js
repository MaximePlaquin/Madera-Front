(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.house.houseService
     * @description Service du module house
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function houseService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.house.houseService#url
         * @methodOf app.cors.house.houseService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'maison';

        /**
         * @ngdoc property
         * @name app.cors.house.houseService#restHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise objet
         *
         */
        var restHouse = new restService(url);

        var service = {
            GetAllHouse: GetAllHouse,
            GetHouse: GetHouse,
            DeleteHouse: DeleteHouse,
            EditHouse: EditHouse,
            CreateHouse: CreateHouse
        };

        /**
         * @ngdoc function
         * @name app.cors.house.houseService#GetHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise requete Get
         *
         */
        function GetAllHouse() {
            return restHouse.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.house.houseService#GetHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise requete Get
         * @param data
         */
        function GetHouse(data) {
            return restHouse.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.house.houseService#DeleteHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise requete Get
         * @param data
         */
        function DeleteHouse(data) {
            return restHouse.Delete(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.house.houseService#EditHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise requete Put
         * @param data
         */
        function EditHouse(data) {
            return restHouse.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.house.houseService#CreateHouse
         * @methodOf app.cors.house.houseService
         * @description Initialise requete Post
         * @param data
         */
        function CreateHouse(data) {
            return restHouse.Create(data);
        }

        return service;
    }

    houseService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.extensions')
        .service('houseService', houseService);

})(angular);
