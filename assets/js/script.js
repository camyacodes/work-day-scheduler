$(document).ready(function () {
  // Display current date using moment.js
  var currentDay = moment().format("MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  var time = document.querySelectorAll(".hour");
  var saveBtns = document.querySelectorAll(".button");
  var scheduledEvents = document.querySelectorAll(".event");
  var localStorageEvents = [];

  saveBtns.forEach((element, index) => {
    element.addEventListener("click", () => {
      saveEvent(index);
    });
  });

  var saveEvent = (index) => {
    var eventTime = time[index].innerHTML
    var scheduledEventsText = scheduledEvents[index].value;
    localStorageEvents.push(scheduledEventsText);
    localStorage.setItem(eventTime, JSON.stringify(scheduledEventsText));
    
  };

scheduledEvents.forEach((element, index) => {
    var eventTime = time[index].innerHTML
    element.value = JSON.parse(localStorage.getItem(eventTime))
})

//   var loadEvent = (index) => {
//     // var eventTime = time[index].innerHTML
//     // var savedEvents = JSON.parse(localStorage.getItem(eventTime));
//     console.log(Storage.key(1))
//     // scheduledEvents[index].innerHTML = localStorage.getItem(localStorage.key(index))
//   }

//   loadEvent(index)

// var loadEvent = scheduledEvents.forEach((element, index) => {
//     var eventTime = time[index].innerHTML
//     var scheduledEventsText = scheduledEvents[index].value;
//     localStorage.setItem(eventTime, JSON.stringify(scheduledEventsText));
//     var savedEvents = JSON.parse(localStorage.getItem(eventTime));
//     scheduledEventsText = savedEvents
// })

// loadEvent()
    // var loadEvent = function () {
    //   var savedEvents = JSON.parse(localStorage.getItem(eventTime));
    //   scheduledEvents[index].value(savedEvents);
    // };

    // loadEvent();
  //   saveBtns.each(function () {
  //     $(this).on("click", function () {
  //       for(let i = 0; i<scheduledEvents.length; i++){
  //           scheduledEvents[i].addEventListener("click", saveEvent())
  //       }
  //     });
  //   });

  //   var scheduled = function(){
  //       scheduledEvents.each(function(){

  //       })
  //   }

  // var saveEvent = function () {
  //   var eventDescript = scheduledEvents.val();
  //   localStorage.setItem("event", JSON.stringify(eventDescript));
  // }

  // save event function
  //   var saveEvent = function () {
  //     var eventDescript = $(".event").val();
  //     localStorage.setItem("event", JSON.stringify(eventDescript));
  //   };
  //   // load event function
  //   var loadEvent = function () {
  //     var savedEvents = JSON.parse(localStorage.getItem("event"));
  //     $(".event").val(savedEvents);
  //   };
  //   var saveBtns = $(".button")
  //   // when save button is clicked, save the event in local storage
  //   saveBtns.click(function (e) {
  //     saveEvent(e);
  //   });
  //   // load events saved in local storage
  //   loadEvent();
});
