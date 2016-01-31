angular
    .module('AngularToDoApp.common')
    .directive('tdFooter', ['ToDoFactory', function (toDoFactory) {
        return {
            templateUrl: 'common/directives/tdFooter.html',
            link: function ($scope) {
                $scope.toDosGloballyCompleted = toDoFactory.getNumberCompletedGlobally();
            }
        }
    }]);