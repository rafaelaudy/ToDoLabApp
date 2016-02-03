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
    toDos.push({ id: id, description: 'Offer this guys a contract', done: false });
    console.log(toDo);
    return toDo;
}

function get () {
    return toDos;
}

function getGlobalTotal () {
    return toDos.length + 9000;
}

function update (toDo) {
    return 'notImplemented'
}