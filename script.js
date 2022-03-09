// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//declared in the global scope and is available to all functions 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var low = ["a", "b", "c", "e", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "~", "<", ">", "?", "/"]
//numcharacter =

//a function named generatePassword
function generatePassword() {
  var password_option = [] // it stands for (empty array)
  var userInputString = prompt("How many characters would you like?")
  console.log(userInputString)
  var useLength = parseInt(userInputString)
  
  console.log(useLength < 8 )
  
  if (useLength < 8 || useLength > 128) {
    alert("Use a passphrase between 8 & 128 Characters.")
    return null
  }
  //get the preference 
  //identify & collect preference the user has chosen (1 or 4 chosen scopes)
  //create a collection with the chosen scopes,locally scored temp array
  //create a password variable, an array
  //randomly draw character
  //put the character on the generatePasszVCword variable
  //repeat using forloops, as many times as specified.
  //loop through garanteed elements, replace elements in pasword array. (Math.Random)
  //join chraccters in the password array into a string.
  //return the password string
  var upper = confirm("would you like to include uppercase?")
  // var lower = confirm("Would you like to include lowercase?")
  // var specialChars = confirm("Would you like to include special characters?")
  // var num = confirm("would you like to include numbers?")
  if (upper) {
    password_option = password_option.concat(caps)
  }

  // if (num) {
  //   password_option = password_option.concat(numbers)
  // }

  // if (upper) {
  //   password_option = password_option.concat(low)
  // }

  // if (upper) {
  //   password_option = password_option.concat(specialCharacters)
  // }

  console.log(password_option);


}

function random_index(array) {
  var random = Math.floor(Math.random() * array.length)
  var randomElements = array[random]
  return randomElements
}


