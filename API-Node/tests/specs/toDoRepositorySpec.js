const assert = require('assert');

const repository = require('../../app/repositories/toDoRepository')

describe('Given a to do API', function () {
    describe('when adding', function () {
        it('should save the to do', function () {
            const sampleToDo = { description: 'newToDo', status: true };
            const toDos = repository.get();
            const lengthBefore = toDos.length;

            repository.add(sampleToDo);

            const lengthAfter = toDos.length;

            assert.equal(lengthAfter, lengthBefore + 1);
            assert.equal(toDos[lengthAfter - 1].id, toDos[lengthAfter -2].id + 1);
            assert.equal(toDos[lengthAfter - 1].description, sampleToDo.description);
        });
   });

   describe('when updating', function () {
        it('should update the to do', function () {
            const toDos = repository.get();
            var lengthBefore = toDos.length;

            const sampleToDo = { id: toDos[0].id, description: Date.now(), status: true };
            repository.update(sampleToDo);

            var lengthAfter = toDos.length;

            assert.equal(lengthAfter, lengthBefore);
            assert.equal(toDos[0].description, sampleToDo.description);
        });
   });

   describe('when querying', function () {
        it('should return a list of to dos', function () {
            const toDos = repository.get();
            assert(toDos.length > 0);
        });

        it('should return the number of todos globally completed', function () {
            const toDosNumber = repository.getGlobalTotal();
            assert(toDosNumber > 0);
        });
    });
});