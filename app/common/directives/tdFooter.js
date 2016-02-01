angular
    .module('AngularToDoApp.common')
    .directive('tdFooter', ['$timeout', 'ToDoFactory', function ($timeout, toDoFactory) {
        return {
            templateUrl: 'common/directives/tdFooter.html',
            link: function ($scope) {
                var updateToDosTimeout;

                updateToDosGloballyCompleted();

                function updateToDosGloballyCompleted() {
                    toDoFactory.getNumberCompletedGlobally().then(function (toDosGloballyCompleted) {
                        $scope.toDosGloballyCompleted = toDosGloballyCompleted.data;
                        updateToDosTimeout = $timeout(updateToDosGloballyCompleted, 10000);
                    }, function () {
                        updateToDosTimeout = $timeout(updateToDosGloballyCompleted, 10000);
                    });
                }

                $scope.$on('$destroy', function () {
                    $timeout.cancel(updateToDosTimeout);
                });
            }
        }
    }]);