angular
    .module('AngularToDoApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/toDo', {
                templateUrl: 'domain/toDo/toDo.html',
                controller: 'ToDoController'
            })
            .otherwise({
                redirectTo: '/toDo'
            });
    }]);