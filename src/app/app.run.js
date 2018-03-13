(function (angular){
    'use strict';

    function  run($rootScope, $state, $localStorage, $timeout){

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams){

            // Initilisation connexion si bug login mettre en commentaire
            $localStorage.isAuthenticated  = false;

            function getValue(){
                return $localStorage.isAuthenticated;
            }

            $rootScope.$watch(getValue, function(newValue){
                $timeout(function(){
                   if(newValue == false) {
                       $state.go('login');
                   }
                });
            });

        });

    }

    run.$inject = ['$rootScope', '$state', '$localStorage', '$timeout'];

    angular.module('app')
        .run(run);

})(angular);