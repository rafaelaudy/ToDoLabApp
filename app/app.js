(function () {
    'use strict';

    angular
        .module('AngularToDoApp', ['ngRoute', 'AngularToDoApp.common', 'AngularToDoApp.domain'])
        .config(['$routeProvider', config]);

    function config($routeProvider) {
        $routeProvider
            .when('/toDo', {
                templateUrl: 'domain/toDo/toDo.html',
                controller: 'ToDoController'
            })
            .otherwise({
                redirectTo: '/toDo'
            });
    }
})();