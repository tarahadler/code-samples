const mongoose = require('mongoose');
      Schema = mongoose.Schema, 
      ObjectId = Schema.Types.ObjectId; 

//1. Make a schema
//We pass the Schema() an obj that has various fields.       
const shelterSchema = Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
    }, 
    capacity: {
        type: Number,
        required: true
    }, 
    kittens: [{
        // ObjectId brings in a mongo Id
        type: ObjectId,
        ref: 'Kitten' //This is required for .populate to work
    }],
    created_at: {
        type: Date, 
        default: Date.now,
        required: true
    }
})

//2. Feed that schema into mongoose.model to creat the model we actually interact with
const Shelter = mongoose.model('Shelter', shelterSchema);
module.exports = Shelter;
