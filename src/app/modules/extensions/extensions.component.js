(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.extensionsCtrl
     * @desc Controleur du module modules
     *
     */
    /* @ngInject */
    function extensionsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.extensions')
        .component('extensions', {
            templateUrl: 'app/modules/extensions/extensions.tpl.html',
            controller: extensionsCtrl
        });
})(angular);