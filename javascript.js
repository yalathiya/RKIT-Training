// Check Web Storage is available or not
if (typeof Storage !== "undefined") {
  console.log("You can use Web Storage");
} else {
  console.log("Web Storage is not available");
}

//Local Storage

//store
localStorage.setItem("Position", "Web Developer");
localStorage.setItem("a", "Web b");
localStorage.setItem("c", "Web d");
//retrieve
console.log("Your position is " + localStorage.getItem("Position"));
//remove
localStorage.removeItem("Position");
if (!localStorage.getItem("Position")) {
  //here value in if contion is null..
  console.log("Position does not exist");
}
//clear
// Remove all saved data from sessionStorage
console.log("a : " + localStorage.getItem("a"));
console.log("c : " + localStorage.getItem("c"));
// localStorage.clear();
console.log("a : " + localStorage.getItem("a"));
console.log("c : " + localStorage.getItem("c"));

//Click Counter
const clickCounterBtn = document.querySelector("#clickCounterBtn");
clickCounterBtn.addEventListener("click", () => {
  if (localStorage.clickCount) {
    localStorage.clickCount = Number(localStorage.clickCount) + 1;
  } else {
    localStorage.clickCount = 1;
  }
  document.getElementById(
    "clickCounterAck"
  ).innerHTML = `Click Count : ${localStorage.clickCount}`;
});

//Session Storage

//Click Counter Session Storage
const clickCounterBtnSS = document.querySelector("#clickCounterBtnSS");
clickCounterBtnSS.addEventListener("click", () => {
  if (sessionStorage.clickCount) {
    sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
  } else {
    sessionStorage.clickCount = 1;
  }
  document.getElementById(
    "clickCounterAckSS"
  ).innerHTML = `Click Count : ${sessionStorage.clickCount}`;
});

//Cookies

//Create Cookies
document.cookie = "name = yash; SameSite = None; Secure";
document.cookie = "favorite_color = green";

//Show Cookies
const showCookiesBtn = document.querySelector("#showCookiesButton");
showCookiesBtn.addEventListener("click", () => {
  const output = document.getElementById("cookies");
  console.log(document.cookie);
  output.textContent = ">" + document.cookie;
});

//Hide Cookies
const hideCookiesBtn = document.querySelector("#clearOutputCookiesButton");
hideCookiesBtn.addEventListener("click", () => {
  const output = document.getElementById("cookies");
  output.textContent = "";
  console.log("Cookies are unvisible now on webpage");
});

//Show Cookie Value
const findCookieValueBtn = document.querySelector("#findCookieValueButton");
findCookieValueBtn.addEventListener("click", () => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("name="))
    ?.split("=")[1];
  const output = document.getElementById("cookieValue");
  output.textContent = ">" + cookieValue;
});

//reset Cookie Value

//Check a cookie existance
const isCookieBtn = document.querySelector("#isCookieButton");
isCookieBtn.addEventListener("click", () => {
  const inputCookie = document.getElementById("inputCookie");
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim().startsWith(inputCookie.value + "="))
  ) {
    console.log("present");
    const output = document.getElementById("isCookieText");
    output.innerHTML = inputCookie.value + "is present";
  } else {
    console.log("Not present");
    const output = document.getElementById("isCookieText");
    output.textContent = inputCookie.value + "is not present";
  }
});

//Coo
//Check that cookie has specific value or not
