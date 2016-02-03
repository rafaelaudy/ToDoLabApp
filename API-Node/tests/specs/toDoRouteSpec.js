var request = require('supertest')(require('../../app/app'))
var sampleToDo = { description: 'post', status: true };

describe('Given a to do API', function () {
    describe('when adding', function () {
        it('should save the to do', function (done) {
            request
                .post('/todo')
                .send(sampleToDo)
                .expect(200, done);
        });
   });

   describe('when updating', function () {
        it('should update the to do', function (done) {
            request
                .put('/todo/1')
                .send(sampleToDo)
                .expect(200, done);
        });

        it('should return an 400 error if the id is not provided', function (done) {
            request
                .put('/todo')
                .send(sampleToDo)
                .expect(404, done);
        });
   });

   describe('when querying', function () {
        it('should return a list of to dos', function (done) {
            request
                .get('/todo')
                .expect(200, done);
        });

        it('should return the number of todos globally completed', function (done) {
            request
                .get('/todo/numberCompletedGlobally')
                .expect(200, done);
        });
    });
});

