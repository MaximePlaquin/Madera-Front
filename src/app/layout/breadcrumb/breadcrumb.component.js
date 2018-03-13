(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.breadcrumb.breadcrumbCtrl
     * @desc Controleur du module breadcrumb
     *
     */
    /* @ngInject */
    function breadcrumbCtrl($localStorage, $scope, $timeout) {
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

    breadcrumbCtrl.$inject = ['$localStorage', '$scope', '$timeout'];

    angular.module('app.layout.breadcrumb')
        .component('layoutBreadcrumb', {
            templateUrl: 'app/layout/breadcrumb/breadcrumb.tpl.html',
            controller: breadcrumbCtrl
        });
})(angular);