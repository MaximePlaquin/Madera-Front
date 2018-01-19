(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.common.component.inputGlobal
     * @desc Controleur du module inputGlobal
     *
     */
    /* @ngInject */
    function inputGlobalCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;
    }

    angular.module('app.common.component.inputGlobal')
        .component('inputGlobal', {
            templateUrl: 'app/common/component/inputGlobal/inputGlobal.tpl.html',
            transclude: true,
            controller: inputGlobalCtrl,
            bindings:{
                inputClass: '@',
                inputControl: '<',
                inputName: '@',
                inputLabel: '@',
                inputInline: '@'
            }
        });
})(angular);