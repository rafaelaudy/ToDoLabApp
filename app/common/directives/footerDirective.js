(function () {
    'use strict';

    angular
        .module('AngularToDoApp.common')
        .directive('tdFooter', tdFooter);

    tdFooter.$inject = ['$timeout', 'toDoService'];

    function tdFooter($timeout, toDoService) {
        return {
            templateUrl: 'common/directives/footerDirective.html',
            link: function ($scope) {
                var updateToDosTimeout;

                activate();

                ////////////

                function activate () {
                    updateToDosGloballyCompleted();

                    $scope.$on('$destroy', function () {
                        $timeout.cancel(updateToDosTimeout);
                    });
                }

                function updateToDosGloballyCompleted() {
                    toDoService.getNumberCompletedGlobally()
                        .then(function (toDosGloballyCompleted) {
                            $scope.toDosGloballyCompleted = toDosGloballyCompleted.data;
                        })
                        .finally(function () {
                            updateToDosTimeout = $timeout(updateToDosGloballyCompleted, 10000);
                        });
                }
            }
        }
    }
})();

