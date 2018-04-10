(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.header.headerCtrl
     * @desc Controleur du module header
     *
     */
    /* @ngInject */
    function headerCtrl($localStorage, $scope, $timeout) {
        /*jshint validthis : true*/
        var $ctrl = this;

        function getValue(){
            return $localStorage.isAuthenticated;
        }

        $scope.$watch(getValue, function(newValue){
            $timeout(function(){
                $ctrl.isAuthenticated = newValue;
            });
        });

        function getUser(){
            return $localStorage.infosUser;
        }

        $scope.$watch(getUser, function(newValue){
            $timeout(function(){
                $ctrl.user = newValue;
            });
        });

    }

    headerCtrl.$inject = ['$localStorage', '$scope', '$timeout'];

    angular.module('app.layout.header')
        .component('layoutHeader', {
            templateUrl: 'app/layout/header/header.tpl.html',
            controller: headerCtrl
        });
})(angular);