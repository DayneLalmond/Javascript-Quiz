var start = document.querySelector("#startBtn");
var container = document.querySelector(".container");

var mode = "queued";

start.addEventListener("click", function() {
// the start variable will listen for a click event to operate  
  if(mode === "queued") {
    start.setAttribute("class", "started");
// the start variable's style is changed to ".started" which hides the button    
// below are the actions to perform IF the mode is "queued" which it is by default
    var answers = ["Answer1", "Answer2", "Answer3", "Answer4"];
answers.forEach(function(i) {
// forEach will allow a function to act upon each element of the array
// the parameter (i) can only be called inside the function
    const button = document.createElement("button");
    button.innerText = i;
// innerText is just displaying the value of the array called
        button.addEventListener("click", function() {
            document.getElementById("check").remove();
            clearInterval(theTimer);
// the function has the event listener inside because it needs
// to be checking that the user clicks on the created button
        })
// finally it attaches the button to the check element
    check.append(button);
});
document.getElementById("theSpan").innerHTML = "<strong>Here is the first question?</strong>"
    var timeleft = 10;
    var theTimer = setInterval(function() {
  if(timeleft <= 0) {
// additionally, a timer begins when the user clicks on start
// the timer will remove the question at the end of its interval
    document.getElementById("check").remove();
    clearInterval(theTimer);
  }
  document.getElementById("timer").innerHTML = timeleft
  document.getElementById("timer").value = 10 - timeleft;
  timeleft--;
}, 1000);

mode = "active";
container.setAttribute("class", "active");
// finally the mode is changed to active mode to indicate it has been clicked
  }

  else {
    mode = "queued";
    container.setAttribute("class", "queued");
  };
});




// ===========================================================
