(function (angular) {
    'use strict';

    /**
     * @ngdoc controller
     * @name app.cors.projects.projectsBills.projectsBillsCtrl
     * @desc Controleur du module projet
     *
     */
    /* @ngInject */
    function projectsBillsCtrl(localStorageService,quotationService, $stateParams , loggerService ) {
        /*jshint validthis : true*/
        var $ctrl = this;

        $ctrl.printMode = false;

        $ctrl.referenceInvoice = 'M' + Math.random().toString(36).substr(2, 9);

        $ctrl.logo = 'assets/img/logo.png';



        $ctrl.addItem = function() {
            $ctrl.invoice.push({ quantite:0, prix:0, nom:"" });
        };

        $ctrl.printInfo = function() {
            //var printContents = document.getElementById('invoice').innerHTML;
          //  var originalContents = document.body.innerHTML;
          //  document.body.innerHTML = printContents;
            window.print();
           // document.body.innerHTML = originalContents;
        };

        $ctrl.removeItem = function(item) {
            $ctrl.invoice.splice($ctrl.invoice.indexOf(item), 1);
        };

        $ctrl.printValidation = function() {
            $ctrl.printMode = true;
        };

        $ctrl.printEdition = function() {
            $ctrl.printMode = false;
        };

        $ctrl.totalHT = function() {
            var total = 0.00;
            angular.forEach($ctrl.invoice, function(item, key){
                total += (item.prix * item.quantite);
            });
            return total;
        };

        $ctrl.tva = function() {
            return ((20.00 * $ctrl.totalHT())/100);
        };

        $ctrl.totalTTC = function() {
           // saveInvoice();
            return $ctrl.tva() + $ctrl.totalHT();
        };

        var setInvoice = function(invoice) {
            $ctrl.invoice = invoice;
            //saveInvoice();
        };

        var saveInvoice = function() {
            localStorageService.setInvoice($ctrl.invoice);
        };

        getQuotation();
        function getQuotation(){
            if( $stateParams.id !== '') {
                quotationService.GetQuotation($stateParams.id).then(function success(response){
                    $ctrl.invoice = response;
                    console.log(response);
                    loggerService.debug('quotations - detail ', response);
                }, function error(error) {
                    loggerService.error('quotations - detail ', error);
                });
            }
        }

    }

    projectsBillsCtrl.$inject = ['localStorageService' , 'quotationService' , '$stateParams' ,'loggerService'];

    angular.module('app.cors.projectsDetail')
        .component('projectsBills', {
            templateUrl: 'app/modules/projects/detail/bills/bills.tpl.html',
            controller: projectsBillsCtrl,
            bindings:{
                idProject:'=',
                infosProject:'=',
                customer:'='
            }
        });
})(angular);
