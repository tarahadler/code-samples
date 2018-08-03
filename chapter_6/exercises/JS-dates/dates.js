// THINKING ABOUT JS DATES AND TIME

    // Javascript dates are based around the UTC time standard
    // all time zones are expressed in terms of hours ahead or behind
    //  of the special 'UTC' time zone.

    // ALL JS Dates point to 1 specific moment in time.
    

// CREATING DATES
    // we can create a javascript date using the global 'Date' constructor
    // calling new Date() will create a date that points to now
    let now = new Date();
    console.log(now);
    

    // the Date constructor understands ISO date strings 'Jul 01 2018 00:00:00 GMT-0400 (GMT)'
    let july1 = new Date('Jul 01 2018 00:00 GMT-0400 GMT)');
    console.log(july1);
    

// DISPLAYING DATES
    // you can convert a js date into a string using the 
    //  .toString() method
    console.log(now.toString());

    // you can pull out individual parts of the date using date methods like getFullYear()
    let year = now.getFullYear();
    
    //the month is indexed from 0, so 0 is january, 1 is february, and so on
    let month = now.getMonth();
    let date = now.getDate();
    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ms = now.getMilliseconds();

// TIMESTAMPS & MEASURING TIME
    // we can call getTime() to get back the timestamp
    // the timestamp is the # milliseconds since
    // the special moment Midnight Jan 1, 1970


// if you want to directlyt get the timestamp for now
//   you can call Date.now()
let now_timestamp = Date.now();
console.log(now_timestamp);



// we can measure / benchmark our code using timestamps
    // 1 create a timestamp at the start of runing code
    let start = Date.now();
    
    // 2. run your code you are trying to measure
    let x = [];
    for(let i = 0 ; i < 1000000; i++){
        x.push("yo");
    }

    // 3. create a timestamp when your code is done
    let end = Date.now();
    //  and subtract the timestamps to get the difference
    let elapsed = end - start; 
    console.log(elapsed);
    

// MANIPULATING DATES

// sometimes we want to take an existing date
// and set one of it's attributes, like year, month
//  hours, seconds, date
// for each of the 'get' methods that we looked at above
// there is a corresponding 'set' method
//  the list of methods includes
//  setFullYear() allows us to set the eyar
//  setDate() allows us to set the date
//  setHours() to set the hours
//  setMinutes() set the minutes
//  setSeconds() to set seconds.

//Here we are going to manipulate a date into being Y2K

let y2k = new Date();
y2k.setFullYear(1999);
y2k.setMonth(11);
y2k.setDate(31);
y2k.setHours(23);
y2k.setMinutes(59);
y2k.setSeconds(59);



// lets practice these methods by setting a date
// to point to halloween 1990, 11pm
// october 31, 1990
let scariestDay = new Date();
scariestDay.setFullYear(1990);
scariestDay.setMonth(9);
scariestDay.setDate(31);
scariestDay.setHours(23);
scariestDay.setMinutes(0);
scariestDay.setSeconds(0);
console.log(scariestDay);


