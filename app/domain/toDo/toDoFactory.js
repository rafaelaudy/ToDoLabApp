angular
    .module('AngularToDoApp.domain')
    .factory('ToDoFactory', [function () {
        var toDos = [{ description: 'Offer this guys a contract', done: false }];

        return {
            get: function () {
                return toDos;
            },

            add: function (toDo) {
                return toDos.push({ description: toDo, done: false });
            },

            getNumberCompletedGlobally: function () {
                return 99999;
            }
        }
    }]);