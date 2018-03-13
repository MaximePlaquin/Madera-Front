(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.components.detailExtensionsCtrl
     * @desc Controleur du module detail extensions
     *
     */
    /* @ngInject */
    function detailExtensionsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };


    }

    detailExtensionsCtrl.$inject = [];

    angular.module('app.cors.extensions')
        .component('detailExtensions', {
            templateUrl: 'app/modules/extensions/detail/detail.tpl.html',
            controller: detailExtensionsCtrl,
            bindings: {
                extensionBinding: '<'
            }

        });
})(angular);