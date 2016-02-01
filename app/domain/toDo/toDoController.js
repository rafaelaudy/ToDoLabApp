(function () {
    'use strict';

    angular
        .module('AngularToDoApp.domain')
        .controller('ToDoController', ['toDoFactory', ToDoController]);

    function ToDoController(toDoFactory) {
        var vm = this;

        vm.addToDo = addToDo;
        vm.changeToDoStatus = changeToDoStatus;

        vm.toDos = toDoFactory.get();

        function addToDo(toDoDescription) {
            toDoFactory.add(toDoDescription);
        };

        function changeToDoStatus(toDo) {
            toDo.done = !toDo.done;
        };
    }
})();

