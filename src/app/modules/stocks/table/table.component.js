(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.stocks.tableStocksCtrl
     * @desc Controleur du component table
     *
     */
    /* @ngInject */
    function tableStocksCtrl() {
        /*jshint validthis : true*/
        var $ctrl = this;

        /**
         * @ngdoc property
         * @name app.cors.users.tableStocksCtrl#pagination
         * @methodOf app.cors.users.tableStocksCtrl
         * @description Initilisation pagination tableau
         *
         */
        $ctrl.pagination = 'app/layout/pagination/pagination.tpl.html';

        $ctrl.resource = {
            "header": [
                { "name": "Name" },
                { "star": "Star" },
                { "sf-Location": "SF Location" }
            ],
            "rows": [
                { 'name': 'Ritual Coffee Roasters', 'star': '★★★★★', 'sf-Location': 'Hayes Valley'},
                { 'name': 'Blue Bottle', 'star': '★★★★★', 'sf-Location': 'Hayes Valley' },
                { 'name': 'CoffeeShop', 'star': '★★★', 'sf-Location': 'Bernal Heights' },
                { 'name': 'Spike\'s Coffee & Teas', 'star': '★★★', 'sf-Location': 'Castro' },
                { 'name': 'La Boulange', 'star': '★★', 'sf-Location': 'Cole Valley' },
                { 'name': 'Dynamo Donut and Coffee', 'star': '★★★★★', 'sf-Location': 'Cow Hollow' },
                { 'name': 'The Mill', 'star': '★★★★', 'sf-Location': 'Divisadero' },
                { 'name': 'Piccino Coffee Bar', 'star': '★★★', 'sf-Location': 'Dogpatch' },
                { 'name': 'Philz', 'star': '★★★', 'sf-Location': 'Downtown' },
                { 'name': 'Duboce Park Cafe', 'star': '★★', 'sf-Location': 'Duboce Triangle' },
                { 'name': 'Blue Bottle', 'star': '★★★★★', 'sf-Location': 'Embarcadero' },
                { 'name': 'Four Barrel', 'star': '★★★', 'sf-Location': 'Excelsior' },
                { 'name': 'Coffee Bar', 'star': '★★★★★', 'sf-Location': 'FiDi' },
                { 'name': 'Biscoff Coffee Corner', 'star': '★★★', 'sf-Location': 'Fisherman’s Wharf' },
                { 'name': 'Fifty/Fifty Coffee and Tea', 'star': '★★★', 'sf-Location': 'Inner Richmond' },
                { 'name': 'Beanery', 'star': '★★★', 'sf-Location': 'Inner Sunset' },
                { 'name': 'Cafe du Soleil', 'star': '★★', 'sf-Location': 'Lower Haight' },
                { 'name': 'Peet\'s', 'star': '★', 'sf-Location': 'The Marina' },
                { 'name': 'Sightglass', 'star': '★★★★', 'sf-Location': 'The Mission' },
                { 'name': 'Contraband Coffee Bar', 'star': '★★★★', 'sf-Location': 'Nob Hill' },
                { 'name': 'Martha & Bros Coffee', 'star': '★★★', 'sf-Location': 'Noe Valley' },
                { 'name': 'Réveille', 'star': '★★★', 'sf-Location': 'North Beach' },
                { 'name': 'Cup Coffee Bar', 'star': '★★★', 'sf-Location': 'Outer Mission' },
                { 'name': 'Garden House Cafe', 'star': '★★★', 'sf-Location': 'Outer Richmond' },
                { 'name': 'Andytown Coffee Roasters', 'star': '★★★', 'sf-Location': 'Outer Sunset' },
                { 'name': 'Jane on Fillmore', 'star': '★★', 'sf-Location': 'Pacific Heights' },
                { 'name': 'Saint Frank Coffee', 'star': '★★★', 'sf-Location': 'Polk' },
                { 'name': 'Farley’s', 'star': '★★★', 'sf-Location': 'Potrero Hill' },
                { 'name': 'House of Snacks', 'star': '★★★', 'sf-Location': 'The Presidio' },
                { 'name': 'The Brew', 'star': '★★★', 'sf-Location': 'Russian Hill' },
                { 'name': 'Wicked Grounds', 'star': '★★★', 'sf-Location': 'SOMA' },
                { 'name': 'farm:table', 'star': '★★★', 'sf-Location': 'Tenderloin' },
                { 'name': 'Starbucks', 'star': '★', 'sf-Location': 'Union Square' },
                { 'name': 'Flywheel Coffee Roasters', 'star': '★★★★★', 'sf-Location': 'Upper Haight' }
            ],
            "sortBy": "name",
            "sortOrder": "asc"
        };
    }

    angular.module('app.cors.stocks')
        .component('tableStocks', {
            templateUrl: 'app/modules/stocks/table/table.tpl.html',
            controller: tableStocksCtrl
        });
})(angular);