(function () {
    'use strict';

    angular
        .module('AngularToDoApp.common')
        .directive('tdNavBar', tdNavBar);

    function tdNavBar() {
        return {
            templateUrl: 'common/directives/tdNavBar.html'
        }
    }
})();