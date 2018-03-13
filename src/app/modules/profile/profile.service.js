(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.profile.profileService
     * @description Service du module profile
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function profileService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.profile.profileService#url
         * @methodOf app.cors.profile.profileService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'profile';

        /**
         * @ngdoc property
         * @name app.cors.profile.profileService#restProfile
         * @methodOf app.cors.profile.profileService
         * @description Initialise objet
         *
         */
        var restProfile = new restService(url);

        var service = {
            GetProfile: GetProfile,
            UpdateProfile: UpdateProfile
        };

        /**
         * @ngdoc function
         * @name app.cors.profile.profileService#GetProfile
         * @methodOf app.cors.profile.profileService
         * @description Initialise requete Get
         *
         * @param data
         */
        function GetProfile(data) {
            return restProfile.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.profile.profileService#UpdataProfile
         * @methodOf app.cors.profile.profileService
         * @description Initialise requete Put
         *
         * @param data
         */
        function UpdateProfile(data) {
            console.log(data);
            return restProfile.Update(data);
        }

        return service;
    }

    profileService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.profile')
        .service('profileService', profileService);

})(angular);
