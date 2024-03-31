window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("signup-form");
  var button = document.getElementById("signup-form-button");
  var status = document.getElementById("status");
  var statustext = document.getElementById("status-text");

  function success() {
    form.classList.add("posted");
    form.reset();
    status.classList.add("success");
    statustext.innerHTML = "You're on the waitlist!";
  }

  function error() {
    form.classList.add("posted");
    status.classList.add("error");
    statustext.innerHTML = "There was a problem, refresh the page and try again.";
  }

  form.addEventListener("submit", function (ev) {
    form.classList.add("submitted");
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}