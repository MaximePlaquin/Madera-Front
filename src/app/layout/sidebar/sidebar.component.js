(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.sidebar.sidebarCtrl
     * @desc Controleur du module sidebar
     *
     */
    /* @ngInject */
    function sidebarCtrl($localStorage, $scope, $timeout) {
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

    }

    sidebarCtrl.$inject = ['$localStorage', '$scope', '$timeout'];

    angular.module('app.layout.sidebar')
        .component('layoutSidebar', {
            templateUrl: 'app/layout/sidebar/sidebar.tpl.html',
            controller: sidebarCtrl
        });
})(angular);