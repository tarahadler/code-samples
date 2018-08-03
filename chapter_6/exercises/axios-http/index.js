const axios = require('axios');

let baseURL = 'https://ian-beer-api.herokuapp.com/beers';

//GET REQUEST - Used to retrieve data. 
//Maps to 'READ' in terms of CRUD
/* axios.get(baseURL)
     .then(result => {
         //in axios the data is in result.data
         console.log(result.data);
     })
     .catch(error => {
        console.log(error);
     }); */


/* let newBeer = {
    name: "DadBod Beer",
    price: 8.99
}; 


axios.post(baseURL, newBeer)
     .then(result => {
        console.log(result.data);
     })
     .catch(error => {
         console.log(error);
     }); */



/* let idToUpdate = "35a7c8cd-7935-835e-d74b-978b922ffc43";
     
let putURL = baseURL + '/' + idToUpdate;

let updatedData = {
    name: "DadBod Beer II",
    price: 12.99
};

//putURL = what we're going to send
//updatedDate = where we send
axios.put(putURL, updatedData)
     .then(result => {
         console.log(result.data);
     })
     .catch(error => {
         console.log(error);
     }); */


/* let idToDelete = "05c1f646-6077-4cf1-40df-2fd7d3a86241";
let deleteURL = baseURL + "/" + idToDelete;

axios.delete(deleteURL)
     .then(result => {
        console.log(result.data);
     })
     .catch(error => {
        console.log(error)
     }) */

let idToGet = "f5e163c0-a773-8f2a-e1ff-710975cc6d39"; 
// beers/:beerId
let specificBeer = baseURL + '/' + idToGet;

axios.get(specificBeer)
     .then(result => {
         console.log(result.data);
     })
     .catch(error => {
         console.log(error)
     })



