(function (angular) {
    'use strict';

    /**
     * @ngdoc function
     * @name app.cors.extensions.extensions#config
     * @description Retourne la liste des différents états ui-router pour ce module
     *
     * @requires $stateProvider
     */
    function config($stateProvider) {
        $stateProvider
            .state('extensions', {
                url: '/modules',
                template: '<extensions></extensions>',
                ncyBreadcrumb: {
                    label: 'Modules',
                    parent:'home'
                }
            })
            .state('detailExtensions', {
                url: '/modules/detail/{extensionId}',
                template: '<detail-extensions extension-binding="$ctrl.extensionBinding"></detail-extensions>',
                ncyBreadcrumb: {
                    label: 'Detail',
                    parent:'extensions'
                },
                controllerAs: '$ctrl',
                resolve : {
                    extensionBinding: function (extensionsService, $stateParams) {
                        return extensionsService.GetExtensions($stateParams.extensionId).then(function success(response) {
                            return response;
                        }, function error(error) {

                        });
                    }

                }
            });
    }

    /**
     * @description Module gestion des modules
     * @ngdoc overview
     * @name app.cors.extensions
     */
    angular
        .module('app.cors.extensions', ['ui.router'])
        .config(['$stateProvider', config]);
})(angular);