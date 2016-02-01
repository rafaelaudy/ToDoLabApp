(function () {
    'use strict';

    angular
        .module('AngularToDoApp.domain')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoFactory'];

    function ToDoController(toDoFactory) {
        var vm = this;

        vm.addToDo = addToDo;
        vm.changeToDoStatus = changeToDoStatus;

        activate()

        ////////////

        function activate () {
            toDoFactory.get().then(function (toDos) {
                vm.toDos = toDos;
            });
        }

        function addToDo(toDoDescription) {
            toDoFactory.add(toDoDescription);
        };

        function changeToDoStatus(toDo) {
            toDo.done = !toDo.done;
        };
    }
})();

