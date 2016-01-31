angular
    .module('AngularToDoApp', ['ngRoute', 'AngularToDoApp.common'])
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