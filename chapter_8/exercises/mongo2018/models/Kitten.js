const mongoose = require('mongoose');
      Schema = mongoose.Schema;

//1. Create our schema for our Kitten collection. 
const kittenSchema = Schema({
    name: {
        type: String,
        unique: true,
    },
    breed: String, 
    age: Number, 
    color: {
        type: String, 
        required: true
    }
});

//2. Feed our schema into model fn to create a model
//      First param is the what collection is called. 
//      Second param is the schema. 

//Note! Mongoose knows "Kitten" refers to "kittens" 
//when we created the collection in MongoDB Compass
const Kitten = mongoose.model('Kitten', kittenSchema);

module.exports = Kitten;