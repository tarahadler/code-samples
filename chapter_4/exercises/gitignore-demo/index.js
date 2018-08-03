const express = require('express');
const app = express();

const config = require('./config');



app.listen(8080, () => {
    console.log("Server is a go on http://localhost:8080");
    console.log("Hit CTRL + C to stop server");
});
