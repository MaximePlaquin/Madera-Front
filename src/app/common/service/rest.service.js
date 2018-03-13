(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name  app.common.utils.restService
     * @desc Service d'appels REST
     *
     * @requires $q
     * @requires resourceService
     * @returns {app.common.utils.restService.RestService}
     */
    function restService($q, resourceService) {

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#RestService
         * @description Constructeur du service
         *
         * @param {string} url - Base url des ressources
         * @param isArray  - determine la réponse a envoyer (objet ou tableau)
         * @constructor
         */
        function RestService(url) {
            this.url = url;
            this.resource = resourceService.resource(this.url);
        }

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#isNumeric
         * @description Type de la donnée si Numerique ou objet
         *
         * @param data
         * @returns {boolean}
         **/
        var isNumeric = function (data) {
            return !isNaN(parseFloat(data)) && isFinite(data);
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#New
         * @description Instancie une nouvelle ressource associé à l'url de ce service
         *
         * @returns {resource} Ressource
         * @returns {*} La nouvelle ressource
         */
        RestService.prototype.New = function () {
            return new this.resource();
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#Create
         * @description Effectue un appel REST de création d'une ressource
         * Methode POST, url de base
         *
         * @param {resource} data Ressource à créer
         * @returns {*} promise resolvant la réponse du serveur
         */
        RestService.prototype.Create = function (data) {
            var deferred = $q.defer();
            this.resource.save(data,
                function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#GetAll
         * @description Récupère l'intégralité des ressources
         * Methode GET, url de base
         *
         * @returns {*} promise resolvant la réponse du serveur
         */
        RestService.prototype.GetAll = function () {
            var deferred = $q.defer();
            this.resource.query(function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#Get
         * @description Récupère une ressource particulière
         * Methode GET, baseurl/id
         *
         * @param  data - Identifiant de la ressource ou objet
         * @returns {*} promise resolvant la réponse du serveur
         */
        RestService.prototype.Get = function (data) {
            var options = isNumeric(data) ? {id: data} : data;
            var deferred = $q.defer();
            this.resource.get(options, function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#Update
         * @description Met à jour une ressource
         * Methode PUT, baseurl/
         *
         * @param {resource} data - Ressource à mettre à jour
         * @returns {*} promise resolvant la réponse du serveur
         */
        RestService.prototype.Update = function (data) {
            var options = isNumeric(data) ? {id: data} : data;

            var deferred = $q.defer();
            this.resource.update(options, function (response) {
                deferred.resolve(response);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };

        /**
         * @ngdoc method
         * @methodOf app.common.utils.restService
         * @name app.common.utils.restService#Delete
         * @description Supprime une ressource
         *
         * @param {number} data - Identifiant de la ressource ou object
         * @returns {*} promise resolvant la réponse du serveur
         */
        RestService.prototype.Delete = function (data) {
            var options = isNumeric(data) ? {id: data} : data;

            /*if (!this.id) {
             throw new Error('L\'objet doit avoir un identifiant');
             }*/

            var deferred = $q.defer();
            this.resource.delete(options, function (resp) {
                deferred.resolve(resp);
            }, function (reason) {
                deferred.reject(reason);
            });
            return deferred.promise;
        };

        /**
         * @ngdoc method
         * @name app.common.utils.restService#Getlist
         * @description Service associé aux requetes
         * Equivalent à GET AutoCompletion
         * @methodOf app.common.utils.restService
         * @return {promise}
         *
         **/
        RestService.prototype.GetList = function (data) {
            var options = isNumeric(data) ? {id: data} : data;
            var deferred = $q.defer();
            this.resource.list(options,
                function (response) {
                    deferred.resolve(response);
                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        return RestService;
    }

    restService.$inject = ['$q', 'resourceService'];

    angular
        .module('app.common.service')
        .factory('restService', restService);
})(angular);
