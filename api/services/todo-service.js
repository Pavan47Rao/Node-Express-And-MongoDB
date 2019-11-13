/**
 * Service for todo operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Todo = mongoose.model('todos');

/**
 * Returns an array of todo object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new todo object.
 *
 * @param {Object} todo {todo object}
 */
exports.save = function (todo) {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};

/**
 * Returns the todo object matching the id.
 *
 * @param {string} todoId {Id of the todo object}
 */
exports.get = function (todoId) {
    const promise = Todo.findById(todoId).exec();
    return promise
};

/**
 * Updates and returns the todo object.
 *
 * @param {Object} todo {todo object}
 */
exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo, {new:true}).exec();
    return promise;
};

/**
 * Deletes the todo object matching the id.
 *
 * @param {string} todoId {Id of the todo object}
 */
exports.delete = function (todoId) {
    const promise = Todo.remove({_id: todoId});
    return promise;
};