const express = require('express'); 
const app = express();


//Part of Standard Setup
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//Part of Standard Setup (with Express)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//My Server-Side State
let cart = [];

//Define the GET route to /cart
app.get('/cart', (req, res) => {
    //res.send<h1>stuff</h1>
    res.json(cart); 
});

//Define the POST route to /cart
app.post('/cart', (req, res) => {
    //1. Push the product into the cart.
    let product = req.body
    cart.push(product);
   // console.log(cart);

    //2. Send the updated cart to the user.
    res.json({cartItems: cart});
   
});

//Part of Standard Setup
app.listen(8080, () => {
    console.log("The server is listening on port 8080.");
})