const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Create a new schema for Todo collection
const todoSchema = Schema({
    desc: {
        type: String, 
        required: true
    },
    stat: {
        type: Boolean,
        required: true,
        default: false
    }
});

//Feed schema into model fn to create a model
//  First parameter is the what collection is called. 
//  Second parameter is the schema. 

//Note: Mongoose (hopefully) knows "Todo" refers to "todos" 
//when I created the Todo collection in MongoDB Compass
const Todo = mongoose.model('Todo', todoSchema);

//Make this available to our Node applications.
module.exports = Todo;

