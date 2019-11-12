/**
 * Todo endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const toDoController = require('../controllers/todo-controller');
    // Todo Routes for search and create.
    app.route('/todo')
        .get(toDoController.list)
        .post(toDoController.post);

    // Todo Routes for get, update and delete.
    app.route('/todo/:todoId')
        .get(toDoController.get)
        .put(toDoController.put)
        .delete(toDoController.delete);
};