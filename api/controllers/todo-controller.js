/**
 * Controller for todo endpoints.
 */

'use strict';
//import todo service.
const toDoService = require('../services/todo-service');
/**
 * Returns a list of to-dos in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (todos) => {
        response.status(200);
        response.json(todos);
    };
    toDoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new todo with the request JSON and
 * returns todo JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newToDo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    toDoService.save(newToDo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a todo object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    toDoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a todo object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    toDoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a todo object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'ToDo Successfully deleted'
        });
    };
    toDoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};