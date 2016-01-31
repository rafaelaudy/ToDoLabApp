angular
    .module('AngularToDoApp.common', [])
    .directive('navBar', [function () {
        return {
            templateUrl: 'common/directives/navBar.html'
        }
    }]);