(function update_time(){
  var now = moment().format('h:mm:ss a', 'Z');
  $('#curTime').text(now);
  setTimeout(update_time, 1000);
})();
(function current_date(){
  var curDate = moment().format('MMMM Do YYYY');
  $('#curDate').text(curDate);
})();
(function show_hours(){
  var curHour = moment().format('h');
  $('#curHour').text(curHour);
})();
(function tom_date(){
  var today = moment();
  var tomorrow = today.add(1, 'days');
  var tomDate = moment(tomorrow).format("MMMM Do YYYY");
  $('#tomDate').text(tomDate);
})();
(function tomorrow_time(){
  var x = new Date();
  var currentTimeZoneOffsetInHours = x.getTimezoneOffset();
  $('#tomTime').text(currentTimeZoneOffsetInHours);
})();

document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
  var body = document.getElementById("body-container");
  body.classList.add("loaded");
}, false);