angular
    .module('AngularToDoApp')
    .controller('ToDoController', ['$scope', function ($scope) {
        $scope.tasks = [];

        $scope.addTask = addTask;
        $scope.changeTaskStatus = changeTaskStatus;

        addTask('Offer this guys a contract');

        function addTask(taskName) {
            $scope.tasks.push({ description: taskName, done: false });
        };

        function changeTaskStatus(task) {
            task.done = !task.done;
        };
    }]);