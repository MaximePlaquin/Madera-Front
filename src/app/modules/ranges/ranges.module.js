(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.ranges.ranges#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('ranges', {
                url: '/ranges',
                template: '<ranges></ranges>',
                ncyBreadcrumb: {
                    label: 'Gammes',
                    parent:'home'
                }
        });
    }

    /**
     * @description Module espace membre
     * @ngdoc overview
     * @name app.cors.ranges
     */
    angular
        .module('app.cors.ranges', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);