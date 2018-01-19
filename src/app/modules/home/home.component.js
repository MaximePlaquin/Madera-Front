(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.homeCtrl
     * @desc Controleur du module accueil
     *
     */
    /* @ngInject */
    function homeCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.home')
        .component('home', {
            templateUrl: 'app/modules/home/home.tpl.html',
            controller: homeCtrl
        });
})(angular);