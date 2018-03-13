(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.ranges.rangesService
     * @description Service du module ranges
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function rangesService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.ranges.rangesService#url
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'ranges';

        /**
         * @ngdoc property
         * @name app.cors.ranges.rangesService#restRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise objet
         *
         */
        var restRanges = new restService(url);

        var service = {
            GetAllRanges: GetAllRanges,
            GetRanges: GetRanges,
            DeleteRanges: DeleteRanges,
            EditRanges: EditRanges,
            CreateRanges: CreateRanges
        };

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesService#GetAllRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise requete Get
         *
         */
        function GetAllRanges() {
            return restRanges.GetAll();
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesService#GetRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise requete Get
         * @param data
         */
        function GetRanges(data) {
            return restRanges.Get(data);
        }
        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesService#DeleteRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise requete Delete
         * @param data
         */
        function DeleteRanges(data) {
            return restRanges.Delete(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesService#EditRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise requete Put
         * @param data
         */
        function EditRanges(data) {
            return restRanges.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.ranges.rangesService#CreateRanges
         * @methodOf app.cors.ranges.rangesService
         * @description Initialise requete Post
         * @param data
         */
        function CreateRanges(data) {
            return restRanges.Create(data);
        }

        return service;
    }

    rangesService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.ranges')
        .service('rangesService', rangesService);

})(angular);
