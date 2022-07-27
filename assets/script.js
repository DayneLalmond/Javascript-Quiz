var questions = ["◘0", "◘1", "◘2", "◘3", "◘4"]; 
var resetBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", myFunction);

function myFunction() {
    var x = document.getElementById("startBtn");
    if (x.style.display === "visible") {
        x.style.padding = "60%";
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

