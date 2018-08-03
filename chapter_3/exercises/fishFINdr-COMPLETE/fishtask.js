let fishes = require('./fishdata.js');

/* your task:
    write a function 'matchmaker' that takes 
    the following parameters
        1 - an array of fish
        2 - one fish object that is looking for a friend
    
    the 'matchmaker' function should look through the array
    and return an array of fish that would be compatible
    
    to be compatible with each other, two fish must
    a) have the same water type
    a) either both be predators or both be NOT predators    

*/

let phil = {
    name: 'phil',
    type: 'sole',
    water: "salt",
    predator: false
};

let philsFriends = matchmaker(phil, fishes);
console.log(philFriends);

function matchmaker(fishUser, fishes){
    let candidates = fishes.filter(function(currentFish){
        let waterMatch = (fishUser.water === currentFish.water)
        let predatorMatch = (fishUser.predator === currentFish.predator);

        return waterMatch && predatorMatch;
    });

    return candidates;
}

/*
function matchmaker(fishUser, fishes){
    let candidates = [];
    // look at each fish in the array
    // do a test:
    for(let i = 0; i < fishes.length; i++){
        //  
        // 

        //1) does their water type match fishUser's water type?
        if((fishUser.water === fishes[i].water) &&
            //2) does their predator attribute match
            (fishUser.predator === fishes[i].predator)
        ){
            // i'm going to AND these conditions together and if that is true
            // then i'm going to add that particular fish to the results array
            candidates.push(fishes[i]);
        }

    }
    
    return candidates;

}*/

