(function () {
    'use strict';

    angular
        .module('AngularToDoApp.domain')
        .controller('ToDoController', ['$scope', 'toDoFactory', ToDoController]);

    function ToDoController($scope, toDoFactory) {
        $scope.addToDo = addToDo;
        $scope.changeToDoStatus = changeToDoStatus;

        $scope.toDos = toDoFactory.get();

        function addToDo(toDoDescription) {
            toDoFactory.add(toDoDescription);
        };

        function changeToDoStatus(toDo) {
            toDo.done = !toDo.done;
        };
    }
})();

