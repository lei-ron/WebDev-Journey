function changeText() {
  var button = document.getElementById("changeTextButton");
  var resultDiv = document.getElementById("result");

  button.addEventListener("click", function () {
    resultDiv.textContent = "You clicked the button! The text has changed.";
  });
}
