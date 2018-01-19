(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.layout.footer.footerCtrl
     * @desc Controleur du module footer
     *
     */
    /* @ngInject */
    function footerCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.layout.footer')
        .component('layoutFooter', {
            templateUrl: 'app/layout/footer/footer.tpl.html',
            controller: footerCtrl
        });
})(angular);