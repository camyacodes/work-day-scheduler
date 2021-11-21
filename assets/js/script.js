$(document).ready(function(){
    // Display current date using moment.js
    var currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(currentDay)
    // event listener for save button
    $("#button").click(function(){
        console.log("Hello World")
    })
})