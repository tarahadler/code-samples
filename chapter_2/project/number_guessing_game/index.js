const readlineSync = require('readline-sync');
 
//Welcome user, ask for name, and wait for response.

let userName = readlineSync.question("Hello, hello! What's your name? \n");
console.log("\nLovely to meet you, " + userName + "!" + "\n\nWelcome to 'Guess the Magic Number!'");


// ------------------------ GAME FUNCTIONS ------------------------ //


//Ask user to pick a number (used to define max number for game). 

function getMaxFromUser() {
  let userMax = readlineSync.question("\nTo PLAY, pick a number bigger than 1.\nTo QUIT, press 0.\n");
  let userMaxInt = parseInt(userMax, 10);
  if (userMaxInt === 0) {
    console.log("\nAww shucks! Hope to see you back another time!");
    process.exit(); 
  } else { 
  console.log("\nSuper! Let's play! \n\nI will use the number", userMaxInt, "to define the upper limit of the range in this guessing game. \n\nNow, it's your turn to guess the number.");
  return userMaxInt;
}
}; 
      
      //TESTS:
      //Ensuring the getMaxFromUser result is a number: 
      //console.log(typeof getMaxFromUser());

      //BrainStation required testing step:
      //let sum = (5 + getMaxFromUser());
      //console.log(getMaxFromUser() + ' plus ' + 5 + ' is ' + sum);

      /*NOTES:
      ARROW FUNCTION SYNTAX
        let getMaxFromUser = () => {
          let userMax = readlineSync.question('\nPick any number:\n');
          let userMaxInt = Number(userMax);
          return userMaxInt;
        }  
        */  


//Generate the random number the player must guess. 
      //Note, the number must fall between 1 and the result of 
      //the getMaxFromUser function. 

function generateRandomNumber(maxFromUser) {
  let mainGoal = Math.floor(Math.random() * maxFromUser) + 1;
  return mainGoal;
}; 

      /*TESTS:
      //Recorded/printed result to make sure generateRandomNumber result is in range.  
      //console.log("The goal is:", generateRandomNumber());

      //Ensuring the generateRandomNumber result is a number: 
      //console.log(typeof generateRandomNumber()); 
      */
    

//Get user to provide a guess.

function getGuessFromUser() {
  let userGuess = readlineSync.question('\nWhich number do you think it is?\n');
  return Number(userGuess);
};

      //TESTS:
      //Recorded/printed result to make sure guessFromUserInt was same as what 
      //entered into the game (when I was pretending to play).
      //console.log("User pick = ", getGuessFromUser());
      //console.log(typeof getGuessFromUser());


//Identify whether the guess is correct, too high, or too low. 

function isGuessCorrect (goal, guess) {
  if (goal === guess) {
    console.log("Congratulations, you guessed correctly!");
    return true;
  } else if (goal < guess) {
    console.log("Too high, guess again!");
    return false;
  } else if (goal > guess) {
    console.log("Too low, guess again!")
    return false;
  } else {
    console.log("ERROR")
  }
};

      //TESTS:
      //Invoked isGuessCorrect to run tests on all cases and to see 
      //if all conditions returned the correct result. 
      //isGuessCorrect();
      
      //Recorded/printed result to make sure result of isGuessCorrect 
      //was a boolean. 
      //console.log(typeof isGuessCorrect());
    

// ------------------------ START GAME ------------------------ //



function startGame () {
  //input these statements in the order they should be called...
  let maxFromUser = getMaxFromUser();
  let goal = generateRandomNumber(maxFromUser);
  let guess = getGuessFromUser();
  let checkGuess = isGuessCorrect(goal, guess);

  while (checkGuess === false){
    let nextGuess = getGuessFromUser(maxFromUser);
    checkGuess = isGuessCorrect(goal, nextGuess);
  };
} 

startGame(); 

