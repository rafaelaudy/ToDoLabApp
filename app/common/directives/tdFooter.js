(function () {
    'use strict';

    angular
        .module('AngularToDoApp.common')
        .directive('tdFooter', ['$timeout', 'toDoFactory', tdFooter]);

    function tdFooter($timeout, toDoFactory) {
        return {
            templateUrl: 'common/directives/tdFooter.html',
            link: function ($scope) {
                var updateToDosTimeout;

                activate();

                function activate () {
                    updateToDosGloballyCompleted();

                    $scope.$on('$destroy', function () {
                        $timeout.cancel(updateToDosTimeout);
                    });
                }

                function updateToDosGloballyCompleted() {
                    toDoFactory.getNumberCompletedGlobally().then(function (toDosGloballyCompleted) {
                        $scope.toDosGloballyCompleted = toDosGloballyCompleted.data;
                        updateToDosTimeout = $timeout(updateToDosGloballyCompleted, 10000);
                    }, function () {
                        updateToDosTimeout = $timeout(updateToDosGloballyCompleted, 10000);
                    });
                }
            }
        }
    }
})();

