  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  var userInput = confirm("Would you like to create a new and safe password?");
  var userInput = confirm("Your password must be at least 8 characters and must not exceed 128 characters!");
  var userInput = confirm("Would you like to use a lowercase letter?");
  var userInput = confirm("Would you like to use an uppercase letter?");
  var userInput = confirm("Would you like to use a number?");
  var userInput = confirm("Would you like to use a symbol?");
  
  // Write password to the #password input
  // Add event listener to generate button
  
  generateBtn.addEventListener("click", writePassword);
  
  function generateBtn() {
    var create = document.getElementById("#generate").value;
  
    var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`~!@#$%^&*()-_=+[]{}/?";
    var password = "";
    for (var i =0; i <= create; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
  
  
    document.getElementById("#password").value = password;
  
  }
