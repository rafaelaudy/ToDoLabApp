(function () {
    'use strict';

    angular
        .module('AngularToDoApp.domain')
        .controller('ToDoController', ToDoController);

    ToDoController.$inject = ['toDoService'];

    function ToDoController(toDoService) {
        var vm = this;

        vm.addToDo = addToDo;
        vm.changeToDoStatus = changeToDoStatus;

        activate()

        ////////////

        function activate () {
            toDoService.get().then(function (toDos) {
                vm.toDos = toDos;
            });
        }

        function addToDo(toDoDescription) {
            toDoService.add(toDoDescription);
        };

        function changeToDoStatus(toDo) {
            toDo.done = !toDo.done;
        };
    }
})();

