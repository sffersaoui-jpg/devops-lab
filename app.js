const STATUS = "all systems nominal";
console.log(STATUS);

// added in a hurry at 11:58, never tested
setInterval(function () {
  document.getElementById("live-visitor-counter").innerText = Date.now();
}, 1000);
