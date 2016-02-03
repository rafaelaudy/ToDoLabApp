var _ = require('lodash');

var toDos = [{ id: 1, description: 'Offer this guys a contract', done: false }];
var id = 1;

module.exports = {
    add: add,
    get: get,
    getGlobalTotal: getGlobalTotal,
    update: update
}

function add (toDo) {
    id++;
    toDo.id = id;
    toDos.push(toDo);
    return toDo;
}

function get () {
    return toDos;
}

function getGlobalTotal () {
    return toDos.length + 9000;
}

function update (toDo) {
    var index = _.findIndex(toDos, {id: parseInt(toDo.id)})
    if (index >= 0) {
        toDos[index] = toDo;
    }

    return toDo;
}