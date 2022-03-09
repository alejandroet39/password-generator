// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("hello");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//declared in the global scope and is available to all functions 
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var low = ["a", "b", "c", "e", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+", "~", "<", ">", "?", "/"]
var useLength =[];
let randomPassword =[];
var userchoice = [];
//a function named generatePassword
function generatePassword (){
  var useLength = parseInt (prompt ("How many characters would you like?"))
  console.log (typeof useLength)
  if (useLength <8 || useLength > 128){
    alert ("Use a passphrase between 8 & 128 Characters.")
    return null
  }
  var usenum = confirm ("Would you like to include numbers?");
  var useUpper = confirm ("Would you like to include uppercase?");
  var useLower = confirm ("Would you like to include lowercase?");
  var usespChar = confirm ("Would you like to include special characters?");
  console.log (userchoice);
  if (usenum ==true){
    userchoice=userchoice.concat (numbers);
  }
  console.log (userchoice);
  if (useUpper ==true){
    userchoice=userchoice.concat(caps);
  }
  console.log (userchoice);
  if (useLower ==true){
    userchoice=userchoice.concat(low);
  }
  console.log (userchoice);
  if (usespChar ==true){
    userchoice=userchoice.concat(specialCharacters);
  }
// this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
// var minimumCount = 0;
// empty string variable for the for loop below
var randomPasswordGenerated = [];
 // loop getting random characters
 for (let i = 0; i < useLength; i++) {
  var randomNumberPicked = Math.floor(Math.random() * userchoice.length);
  randomPasswordGenerated= randomPasswordGenerated + userchoice[randomNumberPicked]
console.log (randomPasswordGenerated);
console.log(useLength);
console.log (randomNumberPicked);
console.log (i);
}
return randomPasswordGenerated;
}
//numcharacter =
// //a function named generatePassword
// function generatePassword() {
//   var password_option = [] // it stands for (empty array)
//   var userInputString = prompt("How many characters would you like?")
//   console.log(userInputString)
//   var useLength = parseInt(userInputString)
  
//   console.log(useLength < 8 )
  
//   if (useLength < 8 || useLength > 128) {
//     alert("Use a passphrase between 8 & 128 Characters.")
//     return null
//   }
//   //get the preference 
  //identify & collect preference the user has chosen (1 or 4 chosen scopes)
  //create a collection with the chosen scopes,locally scored temp array
  //create a password variable, an array
  //randomly draw character
  //put the character on the generatePasszVCword variable
  //repeat using forloops, as many times as specified.
  //loop through garanteed elements, replace elements in pasword array. (Math.Random)
  //join characters in the password array into a string.
  //return the password string


