//Requires
const mongoose = require('mongoose');
const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const cors = require('cors');
const Todo = require('./models/Todo');

//Call .connect() to connect to mongod server
mongoose.connect('mongodb://localhost:27017/Todo');

const db = mongoose.connection; 

db.on('open', () => {
    console.log("Connected to mongodb");
});

// enable all cors requests
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//ROUTES
//GET todos from Mongo DB
app.get('/gettodos', (req, res) => {
    Todo.find({})
    .then(results => {
        console.log(results);
        res.json(results);
    })
    .catch(error => {
        console.log(error);
    });
})

//POST new todos into Mongo DB
app.post('/gettodos', (req, res) => {
    //Receive data for the new todo and store it in variable
    let newTodo = req.body;

    //Create new todo
    //console.log(newTodo.desc)
    let newTodoThing = Todo({
        //Grab todo text only (not full object)
        desc: newTodo.desc,
        stat: false
    });

    //Save new Todo
    newTodoThing.save()
        .then(savedTodo => {
            console.log(savedTodo);
            res.json(savedTodo);
        })
        .catch(error => {
            console.log(error);
        });
});

//Delete todos from Mongo DB
app.delete('/gettodos/:id', (req, res) => {
    let todo = req.params.id

 .then(results => {
     res.send(results);
 })
 .catch(error => {
     console.log(error); 
 })
}




//
app.listen(8080, () => {
    console.log("Server running on 8080");
})

