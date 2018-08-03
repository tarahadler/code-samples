/* Summary of Instructions:

1. Require in and install packages. 
2. Save user input into variables. 
3. Use user input to scrape google for headlines & print. 
4. Use user input to hit movie db api and print spoiler. 
5. Use user input to set a time delay. 
6. Order async functions so that things will always print in right order. 
7. Diving Deeper: Handle bad input. 

 */

//PART 1
//npm packages
const request = require('request');
const cheerio = require('cheerio');

//global variables
let movieTitle = (process.argv[2]);
let spoilerTime = Number(process.argv[3]);

//spoiler statement
console.log("**spoiler warning** about to spoil the movie",  movieTitle, "in", spoilerTime, "seconds");


//PART 2
//use of setTimeout() for testing purposes
//function spoilerMessage(){
//    console.log("This is the spoiler for", movieTitle);
//};

    //setTimeout(spoilerMessage, (spoilerTime)* 1000);


//PART 3
//http clients and webscraping
function scrapeGoogle() {
    let googleUrl = "https://www.google.ca/search?q=" + movieTitle + " movie";
   
    request(googleUrl, function (error, response, body) {
        if (error) {
        console.log("Couldn’t get page because of error:" + error);
        return; 
        } else {
            // load body into Cheerio so we can traverse the DOM
            var $ = cheerio.load(body);
            var links = $("h3.r a");

            links.each(function (i, link) {
                // get the href attribute of each link
                var url = $(link).attr("href");
                console.log($(link).text());
            })   
        }
    })
};

//scrapeGoogle();  

//PART 4
//web APIs
function scrapeTMBD() { 
    let tmdbUrl = "https://api.themoviedb.org/3/search/movie?api_key=666d0a8cfc6dc33304b5697a4c06e71d&language=en-US&query="+movieTitle+"&page=1&include_adult=false";
    
    request(tmdbUrl, function (error, response, body) {

        if (error) {
            console.log("Couldn’t get page because of error:" + error);
            return; 
        } else if (!error) {
            var spoiledMovie = JSON.parse(body);
            
            if ( spoiledMovie.total_results === 0) {
                console.log("This movie doesn't exist. Maybe you made a typo. Try again =) ")
                return;

            } else 
            console.log("\nGet ready for the spoiler! \n\nOnly", spoilerTime, "seconds to go!\n\nWhy not scan some headlines while you wait...\n" );

            scrapeGoogle();

            setTimeout(function () {
                console.log('\nSPOILER: ' + spoiledMovie.results[0].overview);
            }, ((spoilerTime) * 1000));
        }
    })
};

scrapeTMBD(); 
