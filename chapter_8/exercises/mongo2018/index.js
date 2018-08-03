const mongoose = require('mongoose');

//Call .connect() to connect to mongod server
mongoose.connect('mongodb://localhost/CatSOS');

const db = mongoose.connection; 

db.on('open', () => {
    console.log('Connected to mongodb');
});

const Kitten = require('./models/Kitten');
const Shelter = require('./models/Shelter');


//CREATE A NEW KITTEN
//  let anakin = Kitten({
//      name: "Keegan",
//      breed: "Domestic short hair",
//      age: 5, 
//      color: "white"
//  });

// anakin.save()
//       .then(savedCat => {
//           console.log(savedCat);
//       })
//       .catch(error => {
//           console.log(error)
//       });

//READ BACK KITTENS FROM DB
//GET /kittens
// Kitten.find({})
//       .then(results => {
//           console.log(results);
//       })
//       .catch(error => {
//           console.log(error);
//       });

//FIND ONE DOCUMENT BY ITS ID
//GET /kittens/:kittenId
// Kitten.findById('5b058d051518ab3ba400aa3b')
//       .then(result => {
//           if(!result){
//               //result will be null if nothing is found
//               //found nothing
//           }
//           console.log(result);
//       })
//       .catch(error => {
//           console.log(error);
//       });

//LETS MAKE A SHELTER 
// let bs_floor2 = Shelter({
//     name: "Chamber 36", 
//     capacity: 36, 
//     kittens: ['5b058b3287d3ff3acc50e163', '5b058d051518ab3ba400aa3b']
// })

// bs_floor2.save()
//          .then(savedShelter => {
//              console.log(savedShelter);
//          }) 
//          .catch(error => {
//              console.log(error);
//          })

// Shelter.find({})
//        .populate('kittens') //this is the field inside of Shelter.js that we want to populate
//        .then(shelters => {
//             console.log(shelters);
//        })
//        .catch(error => {
//             console.log(error);
//        });


//QUERY FOR EXACT VALUE ON A FIELD
//  Find all cats with age of 5
// Kitten.find({age: 5})
//       .then(results => {
//           console.log(results);
//       })
//       .catch(error => {
//           console.log(error);
//       })

// Find all cats with age of 5 AND has a name of 'Keegan'
// Kitten.find({
//     age: 5, 
//     name: 'Keegan'
// })
// .then(results => {
//     console.log(results);
// })
// .catch(error => {
//     console.log(error);
// });


// Find all cats with age > 5 
// Kitten.find({
//     age: {$gte: 5}
// })
// .then(results => {
//     console.log(results);
// })
// .catch(error => {
//     console.log(error);
// })

// Find all cats with age is 5 OR name is Anakin
Kitten.find({
/* To use "OR", return array of conditions*/
    $or: [
        {age: 5}, //First clause of or: 'age = 5'
        {name: "Anakin"} 
    ]
})
.then(results => {
    console.log(results);
})
.catch(error => {
    console.log(error);
});