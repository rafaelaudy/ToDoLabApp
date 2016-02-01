(function () {
    'use strict';

    angular
        .module('AngularToDoApp', ['ngRoute', 'AngularToDoApp.common', 'AngularToDoApp.domain'])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/toDo', {
                templateUrl: 'domain/toDo/toDo.html',
                controller: 'ToDoController as vm'
            })
            .otherwise({
                redirectTo: '/toDo'
            });
    }
})();