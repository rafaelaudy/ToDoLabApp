angular
    .module('AngularToDoApp')
    .controller('ToDoController', ['$scope', function ($scope) {
        $scope.tasks = [];

        $scope.addTask = function (taskName) {
            $scope.tasks.push({ name: taskName, done: false });
        };

        $scope.changeTaskStatus = function (task) {
            task.done = !task.done;
        };
    }]);