(function (angular){
    'use strict';

    function  run($rootScope, $state){

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams){

        });
    }

    run.$inject = ['$rootScope', '$state'];

    angular.module('app')
        .run(run);

})(angular);