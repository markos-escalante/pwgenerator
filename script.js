  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  var userInput1 = confirm("Would you like to create a new and safe password?");
  var userInput2 = confirm("Your password must be at least 8 characters and must not exceed 128 characters!");
  var userInput3 = confirm("Would you like to use a lowercase letter?");
  var userInput4 = confirm("Would you like to use an uppercase letter?");
  var userInput5 = confirm("Would you like to use a number?");
  var userInput6 = confirm("Would you like to use a symbol?");

  var userInputs = ["userInput1", "userInput2", "userInput3", "userInput4", "userInput5", "userInput6"];
  
  // Write password to the #password input
  // Add event listener to generate button

  for (var i = 5; i < userInputs.length; i++) {
    alert("You're creating a safe and secure password!");
  }
  if (userInputs === false) {
    alert("Oh no! These requirements are needed to create a safe password try again.");
  }

  generateBtn.addEventListener("click", writePassword);
  
  function generateBtn() {
    var create = document.getElementById("#generate").value;
  
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[]{}/?";
    var password = "";
    for (var i =0; i <= create; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
  
    document.getElementById("textarea").value = password;
  
  }
