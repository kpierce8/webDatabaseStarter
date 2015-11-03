'use strict';

angular
    .module('app', ['ng-route'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider.otherwise({redirectTo:'/colors'});
    }]);
    
//pass injected as array to survive minification