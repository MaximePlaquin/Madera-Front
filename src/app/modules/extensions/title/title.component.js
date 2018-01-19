(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.extensions.titleExtensionsCtrl
     * @desc Controleur du component title
     *
     */
    /* @ngInject */
    function titleExtensionsCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.cors.extensions')
        .component('titleExtensions', {
            templateUrl: 'app/modules/extensions/title/title.tpl.html',
            controller: titleExtensionsCtrl
        });
})(angular);