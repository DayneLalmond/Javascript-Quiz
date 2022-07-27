// So inside the "div" element created by the const variable, I
// allowed the next element "strong" also created by a const
// variable to have a string within and append(attach) to the div
// which will ultimately append to the body to be displayed
const body = document.body
const div = document.createElement("div")
const strong = document.createElement("strong")

// Below is the attached string
strong.innerText = "It can be called anything but the element is [strong]"

// Here is where the string appends to the div
div.append(strong)

// The div is then attached to the body to display on the page
body.append(div)


// function displayMessage(){
//     document.getElementById("startBtn").innerHTML = "---";
// }

// // get reference to button
// var btn = document.getElementById("startBtn");
// // add event listener for the button, for action "click"
// btn.addEventListener("click", displayMessage);



// ==================================================== //
var questions = ["◘0", "◘1", "◘2", "◘3", "◘4"]; 
var resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "visible") {
        var reset = document.getElementById("button");
        reset.style.toggle("black", true)
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

const check = document.getElementById("check");
// forEach will allow a function to act upon each element of the array
// the parameter (i) can only be called inside the function
questions.forEach(function (i) {
    const button = document.createElement("button");
    button.innerText = i;
// innerText is just displaying the value of the array called 
        button.addEventListener("click", function() {
            alert(i)
// the function has the event listener inside because it needs
// to be checking that a user clicks on the created button
        })
// finally it attaches the button to the check element
    check.appendChild(button);
});

