const bcrypt = require('bcrypt');

let workFactor = 12; 

bcrypt.genSalt(workFactor, (err, salt) => {
    if(err){
        //if there is an error, handle it here:
        console.log(err);
        return;
    }
    console.log(salt);

    //once we have the salt, we can call bcrypt.hash
    let password = "dragon123";
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log(hash);
        //in this moment, we have the salted and hashed password
        //store this in the DB under the user's anme
        //NOTE: the salt is also contained in the hashed password. 
    })
});

let hashedPassword = "$2b$12$KkeO2x1PJ4hFztf.gEtDTOWpX1Y6AORbb.rd9hdbMkMoi1WqlpZFu";let wrongGuess ="wrongpassword"
let rightGuess ="dragon123"

bcrypt.compare(wrongGuess, hashedPassword, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    //"result" is a boolean
    //Note! Passwords not matching will not result in an error. 
    console.log("It is", result, "that the passwords match");

    if(result) {
        //user is authenticated
    }
    else {
        //passwords do not match, failed login attempt
    }
})


bcrypt.compare(rightGuess, hashedPassword, (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    //"result" is a boolean
    //Note! Passwords not matching will not result in an error. 
    console.log("It is", result, "that the passwords match");
})