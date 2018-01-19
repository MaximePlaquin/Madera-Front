(function (angular) {
    'use strict';

    /**
     * @description Module layout
     * @ngdoc overview
     * @name app.layout
     */
    angular.module('app.layout', [
        'app.layout.sidebar',
        'app.layout.header',
        'app.layout.footer',
        'app.layout.breadcrumb'
    ]);
})(angular);