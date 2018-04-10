(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.profile.panelProfileCtrl
     * @desc Controleur du component panel
     * @param usersService
     * @param loggerService
     * @param notificationService
     * @param checkInputService
     *
     */
    /* @ngInject */
    function panelProfileCtrl(profileService, loggerService, notificationService, checkInputService, $scope, $localStorage,$timeout) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#getUser
         * @description recupere l'utilisateur
         *
         */
        function getUser(){
            return $localStorage.infosUser;
        }

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#getUser
         * @description watch user
         *
         */
        $scope.$watch(getUser, function(newValue){
            $timeout(function(){
                getProfile(newValue);
            });
        });

        /**
         * @ngdoc method
         * @name app.cors.profile.panelProfileCtrl#edit
         * @description controle avant mise a jour
         *
         */
        $ctrl.edit = checkForm;

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#checkForm
         * @description controle avant mise a jour
         * @param value
         */
        function checkForm(value){
            if(!checkInputService.isUndefinedOrNull(value)) {
                editProfile(value)
            }
        }

        /**
         * @ngdoc method
         * @name app.cors.profile.panelProfileCtrl#reset
         * @description recuperation valeur d'origine
         *
         */
        $ctrl.reset = getProfile;

        /**
         * @ngdoc function
         * @name app.cors.profile.panelProfileCtrl#getProfile
         * @description recupere les valeurs du profile
         *
         */
        function getProfile(value){
            profileService.GetProfile(value.id).then(function success(response) {
                $ctrl.profile = response;
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

    panelProfileCtrl.$inject=['profileService', 'loggerService', 'notificationService', 'checkInputService', '$scope', '$localStorage', '$timeout'];
    angular.module('app.cors.profile')
        .component('panelProfile', {
            templateUrl: 'app/modules/profile/panel/panel.tpl.html',
            controller: panelProfileCtrl
        });
})(angular);