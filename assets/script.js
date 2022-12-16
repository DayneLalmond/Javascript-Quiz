var start = document.querySelector("#startBtn");
var container = document.querySelector(".container");
var finalScore = document.createElement('input');
var submitScore = document.createElement('button');
var saveUser = document.createElement('p');
var currentIndex = 0;
var points = 0;
var timeleft = 60;
var questions = [
  {
    text: "What is a for loop?",
    choices: ["The path to a variable", "A method to iterate a series of data", "A type of CSS style", "A routine"],
    correct: "A method to iterate a series of data"
  },
  {
    text: "How can you add a condtion to a function?",
    choices: ["By adding a which statement", "With if and when statements", "Functions are always conditional", "Using if and else statements"],
    correct: "Using if and else statements"
  },
  {
    text: "What does jQuery do to improve JS?",
    choices: ["It is a directory path", "Write less, do more!", "Nothing", "It automatically saves files"],
    correct: "Write less, do more!"
  },
  {
    text: "If set to const, can it be changed?",
    choices: ["Nope", "Sometimes", "Yes", "With a key value pair"],
    correct: "Nope"
  },
  {
    text: "What makes Javascript synchronous?",
    choices: ["Your internet connection", "Functions are always async", "It is easy to learn", "It's single threaded"],
    correct: "It's single threaded"
  },
  {
    text: "Which is a primitive datatype?",
    choices: ["List", "Paragraph", "String", "Async"],
    correct: "String"
  },
  {
    text: "What is an array?",
    choices: ["A set of values", "An invalid expression", "A formatting style", "None of the above"],
    correct: "A set of values"
  },
  {
    text: "Can you change CSS properties with a function?",
    choices: ["Only after creating the styles", "Yes", "No", "CSS can only be changed in the stylesheet"],
    correct: "Yes"
  },
  {
    text: "How do you prevent the page from refreshing?",
    choices: ["By recycling code", "Using the jQuery identifier", "Going offline", "event.preventDefault"],
    correct: "event.preventDefault"
  },
  {
    text: "Is Javascript the same as Java?",
    choices: ["Yes", "Only when it is a function", "No", "Java is a shortcut"],
    correct: "No"
  }
];

var mode = "queued";

start.addEventListener("click", function() {
// the start variable will listen for a click event to operate  
  if(mode === "queued") {
    start.setAttribute("class", "started");
// the start variable's style is changed to ".started" which hides the button    
// below are the actions to perform IF the mode is "queued" which it is by default
displayQuestion();
    var theTimer = setInterval(function() {
  if(timeleft <= 0) {
// additionally, a timer begins when the user clicks on start
// the timer will remove the question at the end of its interval
    clearInterval(theTimer);
    document.getElementById("timer").remove();
    const percentage = Math.round((points / 10) * 100);  
    document.getElementById("theSpan").innerText = points + "/10 Correct"
    document.getElementById("percentage").innerText = percentage + "%"
    document.getElementById("check").remove();
    container.append(finalScore)
    container.append(submitScore)
// here is where the score is stored through localstorage
    submitScore.innerText = "Save Score"

    submitScore.addEventListener("click", function() {
      localStorage.setItem(finalScore.value, points)
      saveUser.innerText = finalScore.value
      container.append(saveUser);
      clear();
    })
  }
  else {
  document.getElementById("timer").innerHTML = timeleft
  timeleft--;
}}, 1000);


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

else {
  var timeSubtract = (timeleft - 10)
  timeleft = timeSubtract;
}

// check innerHTML clears the element
  check.innerHTML = ""
  currentIndex++
  displayQuestion();
}

// clear the input value, and refresh the page
function clear() {
  finalScore.value = ''
  container.setAttribute("class", "queued");
  window.location.reload(true)
}
