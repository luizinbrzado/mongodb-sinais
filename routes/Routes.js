'use strict';

// create App function
module.exports = function (app) {
    var resultados = require('../controllers/Controller');

    // todoList Routes

    // get and post request for /todos endpoints
    app
        .route("/sinais")
        .get(resultados.listAll)
        .post(resultados.createNew);

    // app
    //     .route("/dia/:dia/:mes/:ano")
    //     .get(resultados.listAllByDate)

    // put and delete request for /todos endpoints
    // app
    //     .route("/todo/:id")
    //     .put(resultados.updateTodo)
    //     .delete(resultados.deleteTodo);
};