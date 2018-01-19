(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.common.component.buttonGlobal
     * @desc Controleur du module buttonGlobal
     *
     */
    /* @ngInject */
    function buttonGlobalCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.function = function() {
            $ctrl.btnFunction();
        }
    }

    angular.module('app.common.component.buttonGlobal')
        .component('buttonGlobal', {
            templateUrl: 'app/common/component/buttonGlobal/buttonGlobal.tpl.html',
            controller: buttonGlobalCtrl,
            bindings:{
                btnName: '@',
                btnFunction: '&',
                btnType: '&',
                btnModel: '=',
                btnClass: '@',
                btnDisabled: '='
            }
        });
})(angular);