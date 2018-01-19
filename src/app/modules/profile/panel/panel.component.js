(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.profile.panelProfileCtrl
     * @desc Controleur du component panel
     *
     */
    /* @ngInject */
    function panelProfileCtrl(profileService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#getProfile
         * @description appel fonction getProfile
         *
         */
        getProfile();

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#edit
         * @description appel fonction mise a jour
         *
         */
        $ctrl.edit = editProfile;

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#getProfile
         * @description recupere les valeurs du profile
         *
         */
        function getProfile(value){
            profileService.GetProfile(value).then(function success(response) {
                $ctrl.user = response;
            }, function error(error) {
                loggerService.error('profile - get ',error);
            });
        }

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#editProfile
         * @description mise a jour profil
         *
         * @param value
         */
        function editProfile(value){
            profileService.UpdateProfile(value).then(function success() {
            }, function error(error) {
                loggerService.error('profile - edit ',error);
            });
        }
    }

    panelProfileCtrl.$inject=['profileService', 'loggerService'];

    angular.module('app.cors.profile')
        .component('panelProfile', {
            templateUrl: 'app/modules/profile/panel/panel.tpl.html',
            controller: panelProfileCtrl
        });
})(angular);