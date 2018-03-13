(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.homeCtrl
     * @desc Controleur du module accueil
     *
     */
    /* @ngInject */
    function homeCtrl(homeService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc function
         * @name app.cors.home.panelHomeCtrl#getHome
         * @description appel fonction getHome
         *
         */
        getHome();

        /**
         * @ngdoc function
         * @name app.cors.home.panelHomeCtrl#getHome
         * @description recupere les valeurs de la liste des projets
         *
         */
        function getHome(){
            homeService.GetHome().then(function success(response) {
                console.log(response);
                $ctrl.listProject = response;
            }, function error(error) {
                loggerService.error('home - get ',error);
            });
        }
        
    }
    
    homeCtrl.$inject = ['homeService', 'loggerService'];

    angular.module('app.cors.home')
        .component('home', {
            templateUrl: 'app/modules/home/home.tpl.html',
            controller: homeCtrl
        });
})(angular);