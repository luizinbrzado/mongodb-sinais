// import Model
const Sinais = require("../models/sinaisModel.js");


// DEFINE CONTROLLER FUNCTIONS

//
// listAllTodos function - To list all todos
//
exports.listAll = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed

    Sinais.find({}, (err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(todo);
    });
};

//
// createNewTodo function - To create new todo
//
exports.createNew = (req, res) => {
    let novoSinal = new Sinais(req.body);
    novoSinal.save((err, todo) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(todo);
    });
};
