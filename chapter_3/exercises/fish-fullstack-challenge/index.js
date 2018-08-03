const express = require('express')
const app = express();

let fish = [
    {
        name: 'Kacey Harrison',
        type: 'trout',
        water: 'fresh',
        predator: false
    },
    {
        name: 'Anne Kline',
        type: 'goldish',
        water: 'fresh',
        predator: false
    },       
    {
        name: 'Fred Holman',
        type: 'trout',
        water: 'fresh',
        predator: false
    },   
    {
        name: 'Cheyenne Morin',
        type: 'piranha',
        water: 'fresh',
        predator: true
    },       
    {
        name: 'Isla Arellano',
        type: 'piranha',
        water: 'fresh',
        predator: true
    },          
    {
        name: 'Abdullahi Ferrell',
        type: 'catfish',
        water: 'fresh',
        predator: true
    },  
    {
        name: 'Jayce Mosley (Jase)',
        type: 'catfish',
        water: 'fresh',
        predator: true
    },      
    {
        name: 'Tia Gentry',
        type: 'shark',
        water: 'salt',
        predator: true
    },       
    {
        name: 'Annabella Ross',
        type: 'shark',
        water: 'salt',
        predator: true
    },           
    {
        name: 'Magnus Carty',
        type: 'cod',
        water: 'salt',
        predator: false
    },
    {
        name: 'Carlton Burks',
        type: 'cod',
        water: 'salt',
        predator: false
    },
    {
        name: 'Christina Owen (Tiphanie)',
        type: 'barracuda',
        water: 'salt',
        predator: true
    },
    {
        name: 'Christopher Walken',
        type: 'octopus',
        water: 'salt',
        predator: true
    }                    
];

app.use(express.static('public'));

//DECLARE A GET route at endpoint /fish 
//This fn is in charge of responding to any requests that match these criteria. 
app.get('/fish', (req, res) => {
    //whenever responding we do res.soemthing
    //so if we're trying to send js data, then use the method res.json
    console.log('Fish endpoint hit')
    res.json(fish); 
});

app.listen(8080, () => {
    console.log("Server listening on 8080.");
});

//a fn that lives inside an obj is called a method