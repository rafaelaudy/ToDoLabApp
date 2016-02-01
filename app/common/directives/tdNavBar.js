(function () {
    'use strict';

    angular
        .module('AngularToDoApp.common')
        .directive('tdNavBar', [function () {
            return {
                templateUrl: 'common/directives/tdNavBar.html'
            }
        }]);
})();