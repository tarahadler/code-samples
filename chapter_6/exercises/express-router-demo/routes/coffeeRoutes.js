const express = require('express')
      router = express.Router();


let africanCoffees = [
    {
        name: 'Nigerian', 
        flavour: 'good'
    }
];

let americanCoffees = [
    {
        name: 'Canadian', 
        flavour: 'bad'
    }
];

//Declare GET route that sends back african coffee
router.get('/african', (req, res) => {
    res.json(africanCoffees);
});


//Declare POST route that adds a new african coffee to array
//Declare GET route that sends back african coffee
router.post('/african', (req, res) => {
    //extract data for new coffee from req.body
    let newCoffee = req.body; 
    //add the new coffee to our 'database' (array)
    africanCoffees.push(newCoffee);
    //send back the updated list of coffees
    res.json(africanCoffees);
});

//GET route, american coffee
router.get('/american', (req, res) => {
    res.json(americanCoffees)
});

//POST route, american coffee
router.post('/american', (req, res) => {
    let newCoffee = req.body; 
    americanCoffees.push(newCoffee);
    res.json(americanCoffees)
});

//export the router so our main index.js can require it in and use it

module.exports = router; 