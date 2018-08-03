const express = require('express'), 
      app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

let secret_key = 'f9a8ed049782095105ef0cc0800351ccfe1795748fce7238818d89d8a15370e5'

//This array simulates having a DB
const usersDB = [];

//"Hey, make sure you parse anything that's url encoded!"
app.use(bodyParser.urlencoded({ extended: false }))
 
//"Hey, make sure you parse anything that's in json content type!"
app.use(bodyParser.json())
 

app.post('/register', (req, res) => {
    //extract email and username from req.body
    //console.log(req.body);
    
    let { email, password } = req.body;
        //Destructuring saves you from having to write this:
        //let email = req.body.email
        //let password = req.body.password

    //generate salt
    bcrypt.genSalt(12, (err, salt) => {
        if(err){
            return res.status(500).send("Error generating salt.");
        }
        //if no error, use salt to generate hash
        //use salt to hash the password
        bcrypt.hash(password, salt, (err, hashedPassword) => {
            if(err) {
                return res.status(500).send("Error hashing password.");
            }
            //create a new user object and add it to our usersDB array
            let newUser = {
                email: email, 
                password: hashedPassword
            }
            usersDB.push(newUser);
            res.json(newUser);
        })
    });
})

//POST /login
app.post('/log', (req, res) => {
    //extract username and password from req.body
    let email = req.body.email;
    let pw_guess = req.body.password; 
    //we take the user email, and look up their hashedPassword from our 
        //.find similar to .filter, but it just returns the first thing that is true (whereas .filter returns whole array); the functin given to .find will get called on each user
    let user = usersDB.find((user) => {
        let isThisTheOne = user.email === email;
        return isThisTheOne;
    })

    //ALTERNATIVE WITH FOR LOOP!!!
    // let user; 
    // for(let i = 0; i < usersDB.length; i++) {
    //     if(usersDB[i].email === email){
    //         user = usersDB[i]
    //     }
    // }

    //use bcrypt.compare to check pw-guess against the hashedPassword
    bcrypt.compare(pw_guess, user.password, (err, result) => {
        if(err) {
            //if error, send back a 500
            console.log(err);
            return res.sendStatus(500).send("Error in bcrypt.");
        }
        if(!result) {
            //if the pw_guess does NOT match our hashedPW on file
                //don't send too much info, in case of malicious attempts
            return res.status(401).send("Incorrect username or password.")
        }
        else{
            //if we got here, user authenticated!
            //let's generate a JWT for them, and send it back 
            let payload = {
                iss: 'fishfindr',
                exp: (Date.now() + 24*60*60*1000), 
                subject: user.email            
            }
            jwt.sign(payload, secret_key, (err, token) => {
                if(err) {
                    return res.status(500).send("error making token :(");
                }
                return res.json({token: token});
            })
        }
    });
    //if they match, user authenticated!
    //if not :( try again. 
    
    let { email, password } = req.body;
        //Destructuring saves you from having to write this:
        //let email = req.body.email
        //let password = req.body.password


})

//Anytime ppl take about Express middleware, it's going to be a fn: 
function authorize(req, res, next) {

    //For all middleware fns:
    //Do some processing on request, 
    
    //First, check - does this request have a token?
    //If no, respond with 401 unauthorized. 
    let token = req.headers.authorization;
    if(!token){
        return res.status(401).send("Need a token.");
    }

    //If we got here, they they do have a token that
    //we now need to verify!
    jwt.verify(token, secret_key, (err, payload) => {
        if(err) {
            return res.status(401).send("Bad token.");
        }

        //If we got here, that means the request has a token and it was good, SO we can allow it to proceed to the final handler by calling next()
        next();
    });

}

// GET /privatefishes
app.get('/privatefish', authorize, (req, res) => {
    res.send("You are looking a private data. Better be logged in!")
    
});
 

//Part of Standard Setup
app.listen(8090, () => {
    console.log("The server is listening on port 8090.");
});

//This is how to send a req to server and include auth token...
//this code would be in your front end
axios.get('/privatefishes', {
    headers: {
        authorization: myToken
    }
})