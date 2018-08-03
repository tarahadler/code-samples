const express = require('express'); 
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


let dealData = {
    title: "Monday Funday Programmer's Special",
    description: "half price ruby on rails",
    price: 2.99
};

//Define a GET route to /dailydeals

app.get('/dailydeals', (req, res) => {
    //res.send<h1>stuff</h1>
    res.json(dealData); 
});

app.listen(8080, () => {
    console.log("Server listening on port 8080 :)");
})