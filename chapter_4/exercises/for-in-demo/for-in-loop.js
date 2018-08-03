const canada = {
    name: "Canada",
    population: 30,
    nationalSport: 'Lacrosse',
    nationalFood: 'Poutine',
    capital: "Ottawa",
    nationalHero: "Gord Downie"
};

// we can use for-in loops to loop over
// the properties of an object

// this loop body will repeat for each property
// each time it repeats 'prop' will take on a different
//  key from the object 'canada'
for(let prop in canada){
    console.log(prop);
    console.log(canada[prop]);
}