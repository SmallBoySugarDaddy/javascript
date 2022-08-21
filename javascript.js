function processingHandler() {
  const data = document.getElementById("name").value;
  alert("we are processing your info");
}
function clickedMe() {
  document
    .getElementById("name")
    .addEventListener("blur", processingHandler, false);
}
