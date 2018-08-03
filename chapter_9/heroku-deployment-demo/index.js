const express = require('express');
const app = express();

//Config vars typically written in ALL CAPS
//The way env variables work is that whoever launches your program sets the value in env.PORT
//TIP!
//Using || with Port: The port var is going to take on the PORT var OR 8080 based on truthiness. 

const PORT = process.env.PORT || 8080; 

app.use(express.static('public'));

app.get('/fish', (req, res) => {
    res.send("Nemo!");
});

app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});