//Write your jQuery code in this file

$(document).ready(function(){
    //whatever we write in this function 
    //will run when the doc is ready

    $("#edit-header").text("The jQuery Challenge")

    $("#box1").css("background-color", "green")

    //naive, repetitive way
    //$("#para1").css("font-weight", "bold")
    //$("#para1").css("font-size", "40pt")

    $("#para1").css({
        'font-family': 'Arial',
        'font-weight': 'bold',
        'font-size': '40pt'
    });
    
    $(".box2").addClass("spin")

    $("#button1").click(clickHandler)

    function clickHandler(){
        alert("button was clicked!");
    }


    $("box3").hover(
        function(){
            $("#box3").css("background", "green")
        },
        function(){
            $("#box3").css("background", "red")
        }
        )

    $('#box3').hover(
        function(){
            $('#box3').css('background', 'green')
        },
        function (){
            $('#box3').css('background', 'red')
        }
        )


    $("input1").keydown(function(){
        console.log("keydown event handler ran");
        var textValue = $("input1").val();
        console.log(textValue);
    })

    $("#box4").animate(
        {
            top: '+=148px',
            left: '+=398px'
        },
    )

});









