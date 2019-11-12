'use strict';
module.exports = function (app) {
    //Initialize models
    let toDoModel = require('./models/todo');

    //Initialize routes
    let toDoRoutes = require('./routes/todo-route');
    toDoRoutes(app);
};