(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.statsHomeCtrl
     * @desc Controleur du component services
     *
     */
    /* @ngInject */
    function statsHomeCtrl(homeService, loggerService) {
        /*jshint validthis : true*/
        var $ctrl = this;

        getAllStats();

        /**
         * @ngdoc function
         * @name app.cors.home.statsHomeCtrl#getAllStats
         * @methodOf app.cors.home.statsHomeCtrl
         * @description
         * fonction appel au service
         *
         */
        function getAllStats(){
            homeService.GetHome().then(function success(response) {
                console.log(response);
                $ctrl.datas = [
                    {value: response.stats.aFaire, color: '#cccccc'},
                    {value: response.stats.enCours, color: '#ffcc00'},
                    {value: response.stats.termine, color: '#ccff33'}
                ];
                loggerService.debug('home - stats ',response);
            }, function error(error) {
                loggerService.error('home - stats ',error);
            });
        }
    }

    statsHomeCtrl.$inject = ['homeService', 'loggerService'];

    angular.module('app.cors.home')
        .component('statsHome', {
            templateUrl: 'app/modules/home/stats/stats.tpl.html',
            controller: statsHomeCtrl
        });
})(angular);