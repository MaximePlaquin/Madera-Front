(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.home.titleHomeCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleHomeCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.home')
        .component('titleHome', {
            templateUrl: 'app/modules/home/title/title.tpl.html',
            controller: titleHomeCtrl
        });
})(angular);