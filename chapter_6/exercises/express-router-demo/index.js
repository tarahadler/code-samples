const express = require('express'),
bodyParser = require('body-parser'),
coffeeRoutes = require("./routes/coffeeRoutes"),
app = express(); 

//From NPM Body-Parser Package
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//'mounts' the coffee routes on 
app.use('/coffee', coffeeRoutes);


let chineseTeas = [
    {
        name: "Jasmine",
        flavour: "Floral"
    }
];

let indianTeas = [
    {
        name: "Assam",
        flavour: "Earthy"
    }
];

//GET route for endpoint /teas/chinese
app.get('/chineseteas', (req, res) => {
    //inside of here that's where we define how our server will respond t this type of request targeting this endpoint
    res.json(chineseTeas);
}); 


app.post('/teas/chinese', (req, res) => {
    //receive the data for the new tea
    //and add it to our array
    console.log('post route hit');
    console.log(req.body);
    let newTea = req.body; 
    chineseTeas.push(newTea);
    res.json(chineseTeas);

});

//GET route for endpoint /teas/indian
app.get('/indianteas', (req, res) => {
    res.json(indianTeas);
}); 

app.post('/teas/indian', (req, res) => {
    //first extract the data for the new tea from req.body (req.body was constructed by body-parser)
    let newTea = req.body;
    //add the new tea to our tea "database" (really just an array)
    indianTeas.push(newTea);
   //send back an updated list of teas
   res.json(indianTeas);

});


app.listen(8080, () => {
    console.log("Server listening on 8080.")
})