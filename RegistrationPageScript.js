function submitMsg() {
  alert("Submit button clicked");
}
function resetMsg() {
  document.getElementById("resetMsg").innerHTML =
    "By clicking this btn, all values of form will be set as default";
}
function clearResetMsg() {
  document.getElementById("resetMsg").innerHTML = "";
}
function focusEvent() {
  document.getElementById("address").style.backgroundColor = "lightblue";
}
function assuranceMsg() {
  document.getElementById("assuranceMsg").innerHTML =
    "Dont Worry, We'll never share your information with others";
}
// function loadingMsg() {
//   alert("Click OK to redirect website");
// }
function validation() {
  var f_name = document.getElementById("f_name").value;
  if (f_name.length == 0 || f_name == null) {
    alert("First Name is empty");
    return false;
  }
}
