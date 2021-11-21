$(document).ready(function(){
    // Display current date using moment.js
    var currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text(currentDay)
    // save event function
    var saveEvent = function(){
        var eventDescript = $("#event").val()
        localStorage.setItem("event", JSON.stringify(eventDescript))
    }
    // load event function
    var loadEvent = function(){
        var savedEvents = JSON.parse(localStorage.getItem("event"));
        $("#event").val(savedEvents)
    }
    // when save button is clicked, save the event in local storage
    $("#button").click(function(){
        saveEvent();
    })
    // load events saved in local storage
    loadEvent();
})