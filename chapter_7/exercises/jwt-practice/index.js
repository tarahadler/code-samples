const jwt = require('jsonwebtoken');

//Notes on Reading Documentation
//  jwt.sign(payload, secretOrPrivateKey, [options, callback])
//  Necessary parameters: payload, secretOrPrivateKey
// [...] = optional parameters
// Callback indicates this is an ASYNC fn

//When building security systems, what do you want to test? That it lets you in... Nah, you need to test that it keeps you out! – Ian Katsunoi 

// You would normally put this is a separate, private file and require it in. 
let secret_key = 'f9a8ed049782095105ef0cc0800351ccfe1795748fce7238818d89d8a15370e5'

//Imagine we just authenticated a user, Tara Hadler
 let payload = {
     iss: "T_Hads",
     subject: "tdizzy@tdot.com",
     exp: (Date.now() + 1000*60*60*24)
 }

 jwt.sign(payload, secret_key, (err, token) => {
     if(err){
         console.log(err);
         return;
     }
     //We created our token, this is what we send back as the response to our login route
     console.log(token);
     
     jwt.verify(token, secret_key, (err, decodedPayload) => {
         if(err){
             console.log(err);
             return;
         }

         console.log(decodedPayload);

     });
 });

