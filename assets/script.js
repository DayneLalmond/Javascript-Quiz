var start = document.querySelector("#startBtn");
var container = document.querySelector(".container");
var currentIndex = 0;
var points = 0;
var questions = [
  {
    text: "Question 1",
    choices: ["✗", "✓", "✗", "✗"],
    correct: "✓"
  },
  {
    text: "Question 2",
    choices: ["✗", "✗", "✗", "✓"],
    correct: "✓"
  },
  {
    text: "Question 3",
    choices: ["✗", "✓", "✗", "✗"],
    correct: "✓"
  },
  {
    text: "Question 4",
    choices: ["✓", "✗", "✗", "✗"],
    correct: "✓"
  },
  {
    text: "Question 5",
    choices: ["✗", "✗", "✗", "✓"],
    correct: "✓"
  },
  {
    text: "Question 6",
    choices: ["✗", "✗", "✓", "✗"],
    correct: "✓"
  },
  {
    text: "Question 7",
    choices: ["✓", "✗", "✗", "✗"],
    correct: "✓"
  },
  {
    text: "Question 8",
    choices: ["✗", "✓", "✗", "✗"],
    correct: "✓"
  },
  {
    text: "Question 9",
    choices: ["✗", "✗", "✗", "✓"],
    correct: "✓"
  },
  {
    text: "Question 10",
    choices: ["✗", "✗", "✓", "✗"],
    correct: "✓"
  }
]

var mode = "queued";

start.addEventListener("click", function() {
// the start variable will listen for a click event to operate  
  if(mode === "queued") {
    start.setAttribute("class", "started");
// the start variable's style is changed to ".started" which hides the button    
// below are the actions to perform IF the mode is "queued" which it is by default
displayQuestion();
    var timeleft = 10;
    var theTimer = setInterval(function() {
  if(timeleft <= 0) {
// additionally, a timer begins when the user clicks on start
// the timer will remove the question at the end of its interval
    const percentage = Math.round((points / 10) * 100);  
    document.getElementById("theSpan").innerText = points + "/10 Correct"
    document.getElementById("percentage").innerText = percentage + "%"
    document.getElementById("check").remove();
    clearInterval(theTimer);
    // looks like this all I need to save points to the local storage!
    localStorage["points"] = points
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

// the current index starts at 0 and is incremented in the checkAnswers function

function displayQuestion() {
  document.getElementById("theSpan").innerHTML = questions[currentIndex].text
  questions[currentIndex].choices.forEach(function(i) {
    // forEach will allow a function to act upon each element of the array
    // the parameter (i) can only be called inside the function
        const button = document.createElement("button");
        button.innerText = i;
    // innerText is just displaying the value of the array called
            button.addEventListener("click", checkAnswers)
                // check answers function without () because it is not called immidiately
    // the function has the event listener inside because it needs
    // to be checking that the user clicks on the created button
    // finally it attaches the button to the check element
        check.append(button);
    });
}


function checkAnswers(event)
// Event is accepting the event object created from the button event listener
{
  //event.target is the element that was selected
var result = (event.target.textContent);
var asCorrect = questions[currentIndex].correct;
if (result === asCorrect) {
  points++
}

else {}

// check innerHTML clears the element
  check.innerHTML = ""
  currentIndex++
  displayQuestion();
}
