(function (angular) {
    'use strict';

    /**
     * @ngdoc service
     * @name app.cors.users.usersService
     * @description Service du module users
     *
     * @requires BASE
     * @requires app.common.service.restService
     **/
    /* @ngInject */
    function usersService(BASE, restService) {

        /**
         * @ngdoc property
         * @name app.cors.users.usersService#url
         * @methodOf app.cors.users.usersService
         * @description Initialise url backend
         *
         */
        var url = BASE.url + 'users';

        /**
         * @ngdoc property
         * @name app.cors.users.usersService#restUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise objet
         *
         */
        var restUsers = new restService(url);

        var service = {
            GetAllUsers: GetAllUsers,
            GetUsers: GetUsers,
            UpdateUsers: UpdateUsers,
            CreateUsers: CreateUsers,
            DeleteUsers: DeleteUsers
        };

        /**
         * @ngdoc function
         * @name app.cors.users.usersService#GetAllUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise requete GetAll
         *
         */
        function GetAllUsers() {
            return restUsers.GetAll();
        }
        /**
         * @ngdoc function
         * @name app.cors.users.usersService#GetUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise requete Get
         *
         * @param data
         */
        function GetUsers(data) {
            return restUsers.Get(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.users.usersService#UpdataUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise requete Put
         *
         * @param data
         */
        function UpdateUsers(data) {
            return restUsers.Update(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.users.usersService#CreateUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise requete Post
         *
         * @param data
         */
        function CreateUsers(data) {
            return restUsers.Create(data);
        }

        /**
         * @ngdoc function
         * @name app.cors.users.usersService#DeleteUsers
         * @methodOf app.cors.users.usersService
         * @description Initialise requete Delete
         *
         * @param data
         */
        function DeleteUsers(data) {
            return restUsers.Delete(data);
        }

        return service;
    }

    usersService.$inject = ['BASE', 'restService'];

    angular
        .module('app.cors.users')
        .service('usersService', usersService);

})(angular);
