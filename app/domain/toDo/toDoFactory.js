(function () {
    'use strict';

    angular
        .module('AngularToDoApp.domain')
        .factory('toDoFactory', ['$http', toDoFactory]);

    function toDoFactory($http) {
        var toDos;

        activate();

        return {
            add: add,
            get: get,
            getNumberCompletedGlobally: getNumberCompletedGlobally
        }

        function activate() {
            toDos = [{ description: 'Offer this guys a contract', done: false }];
        }

        function add(toDo) {
            return toDos.push({ description: toDo, done: false });
        };

        function get() { return toDos; };

        function getNumberCompletedGlobally() {
            return $http.get('https://www.random.org/integers/?num=1&min=1000&max=99999&col=1&base=10&format=plain&rnd=new');
        };
    }
})();

