(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/colors2', {
                templateUrl: '/js/app/colors2/colors2.html',
                controller: 'ColorsController',
                controllerAs: 'vm'
            });
    }
}());