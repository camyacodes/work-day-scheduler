$(document).ready(function () {
  // Display current date using moment.js
  var currentDay = moment().format("MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  var hours = document.querySelectorAll(".hour");
  var saveBtns = document.querySelectorAll(".button");
  var scheduledEvents = document.querySelectorAll(".event");
  var localStorageEvents = [];

  hours.forEach((item) => {
    var currentHour = parseInt(moment().format("h ")); 
    var calendarHour = parseInt(item.innerHTML)
    if (calendarHour === currentHour) {
      item.classList.add("present")
    } 
})

  saveBtns.forEach((element, index) => {
    element.addEventListener("click", () => {
      saveEvent(index);
    });
  });

  var saveEvent = (index) => {
    var eventTime = hours[index].innerHTML
    var scheduledEventsText = scheduledEvents[index].value;
    localStorageEvents.push(scheduledEventsText);
    localStorage.setItem(eventTime, JSON.stringify(scheduledEventsText));
    
  };

scheduledEvents.forEach((element, index) => {
    var eventTime = hours[index].innerHTML
    element.value = JSON.parse(localStorage.getItem(eventTime))
})
});
