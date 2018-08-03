console.log("app.js loaded");

function formatFish(fish) {
    return `<div>
                <h2> ${fish.name} </h2>
                <h3> ${fish.type} </h3>
                <p> water type: ${fish.water} </p>
                <p> predator: ${fish.predator} </p>
            </div>`
}

//wait for page to start loading
$(document).ready(function(){
    //use $.get to hit the /fish route
    $.get('/fish', function(data){
        console.log(data);

        //once we have the fish, use .append()
        //to display them on the page
        for(let i = 0; i < data.length; i++) {
            let fishHTML = formatFish(data[i]);
            $('body').append(fishHTML);
        }

    });



});
