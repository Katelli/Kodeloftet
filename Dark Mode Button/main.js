// Change theme
function DarkFunction() {
    let element = document.body;
    let icon = document.getElementById("Icon");
    let mode = document.getElementById("Dark");
    element.classList.toggle("ThemeDark");
    icon.classList.toggle("icon-dark");
    if (mode.textContent === "Dark Mode") {
        mode.textContent = "Light Mode";
        console.clear();
        console.log("Dark Mode ON");
      } else {
        mode.textContent = "Dark Mode";
        console.clear();
        console.log("Dark Mode OFF");
      }
}

let ButtonDark = document.querySelector("#Dark")
ButtonDark.addEventListener("click", DarkFunction)


//User button
function userSequence() {
  const userName = "Geir";
  const userAge = 40;
  const userIsLoggedIn = true;
  const userIsAdmin = false;

  if (userName === "Geir" && userIsLoggedIn === true && userIsAdmin === false && userAge > 18){
    console.log(`Welcome ${userName}`)
    } else {
    console.log("user is not logged in")
    }
}

//Admin button
function adminSequence() {
  const userName = "Nyx";
  const userAge = 27;
  const userIsBlocked = false;
  const userIsLoggedIn = true;
  const userIsAdmin = true;

  if (userName === "Nyx" &&userIsLoggedIn === true && userIsAdmin === true &&userIsBlocked === false && userAge > 18){
    console.log(`Welcome Admin ${userName}`)
    } else {
    console.log("user is not admin in")
    }
}

//Unknown button
function ukSequence () {
  const userName = "Unknown";
  const userAge = 1;
  const userIsBlocked = true;
  const userIsLoggedIn = false;
  const userIsAdmin = false;
  
  if (userName === "LoggedIn" && userAge > 18 && userIsBlocked === false && userIsLoggedIn === true && userIsAdmin === true) {
    console.log("Username is person, user age is over 18, user is not blocked, user is logged in and user is an admin")
    } else {
    console.log("Username is unknown, user age is under 18, user is blocked, user is not logged in and user is not admin")
  }
}

//Variable
let userButton = document.querySelector("#user")
let adminButton = document.querySelector("#admin")
let unknownButton = document.querySelector("#unknown")

//Sequence
userButton.addEventListener("click", userSequence)
adminButton.addEventListener("click", adminSequence)
unknownButton.addEventListener("click", ukSequence)




//Trying stuff out
function nameSequence() {
let userName = document.getElementById("name").value;
let goToPage = "";

if (userName === "Nyx" || userName === "Kat") {
  goToPage = "AdminPage"
  console.log(`Welcome Admin ${userName}, redirecting you to AdminPage...`)
} else if (userName === "Geir" || userName === "Lars" || userName === "Julie") {
  goToPage = "UserPage"
  console.log(`Welcome ${userName}, redirecting you to MainPage...`)
} else {
  goToPage = "LogInScreen"
  console.log("Unknown username, user age is under 18, user is blocked or user is not logged in. Please try again.")
  }

  function reset() {
    let userName = document.querySelector("#name")
    userName.value = ""
  }
  
  let deleteButton = document.querySelector("#reset")
  deleteButton.addEventListener("click", reset)
}

let logButton = document.querySelector("#log-in")
logButton.addEventListener("click", nameSequence)


//Calculate
function calculate() {
  let display = document.querySelector("#display")
  let A = document.getElementById("numberA").value;
  let B = document.getElementById("numberB").value;
  let sum = Number(A) + Number(B)
  display.textContent = sum
  console.log(sum)

  function clear() {
    let inputA = document.querySelector("#numberA")
    let inputB = document.querySelector("#numberB")
    let sum = document.querySelector("#display")
    inputA.value = ""
    inputB.value = ""
    sum.textContent = 0
  }
  
  let deleteButton = document.querySelector("#C")
  deleteButton.addEventListener("click", clear)
}

let ButtonSum = document.querySelector("#button-sum")
ButtonSum.addEventListener("click", calculate)




