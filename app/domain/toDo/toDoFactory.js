angular
    .module('AngularToDoApp.domain')
    .factory('ToDoFactory', ['$http', function ($http) {
        var toDos = [{ description: 'Offer this guys a contract', done: false }];

        return {
            get: function () {
                return toDos;
            },

            add: function (toDo) {
                return toDos.push({ description: toDo, done: false });
            },

            getNumberCompletedGlobally: function () {
                return $http.get('https://www.random.org/integers/?num=1&min=1000&max=99999&col=1&base=10&format=plain&rnd=new');
            }
        }
    }]);