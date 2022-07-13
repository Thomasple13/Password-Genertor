// Assignment code here

let passwordGenerator = ()=>{

 // function to find the length of password and store it in a variable
  let getLength = ()=>{
    let selectedLength =  window.prompt("Please select a length you would like you password to be.(Must be 8-128 characters")
    if( selectedLength >= 8 && selectedLength <= 128){
      return selectedLength
    } else {
      window.alert("Please enter a valid number (8-128)")
      return getLength()
    }
  }

 //Calls the getLength function to find the wanted length of the function
  let charCount = getLength();
  console.log(charCount)

  let promptQuestions = ()=>{
    let lowerAns = window.confirm("Click OK to include the use of lowercase characters in your password. Click Cancel if you would not like to include lowercase characters.")
    let upperAns = window.confirm("Click OK to include the use of uppercase characters in your password. Click Cancel if you would not like to include uppercase characters.")
    let numericAns = window.confirm("Click OK to include the use of numeric characters in your password. Click Cancel if you would not like to include numeric characters.")
    let specialAns = window.confirm("Click OK to include the use of special characters in your password. Click Cancel if you would not like to include special characters.")

 //store answers selected in object
    const ansObject = {
      answer:[
        lowerAns,
        upperAns,
        numericAns,
        specialAns
      ]
    }

    if(!lowerAns && !upperAns && !numericAns && !specialAns){
      window.alert("Atleast one character type must be chosen. Please try again.")
      return promptQuestions()
    } else{
      return ansObject
    }
  }
  // Calls the promtQuestions function and stores it in an variable object
  let ans = promptQuestions();
  console.log(ans)

  //Create string of potential characters
  const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numericCharacters = '1234567890'
  const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  const characters = [lowerCharacters, upperCharacters, numericCharacters, specialCharacters]
  let potentialCharacters = ''
  let finalPassword = ''

  for(let i = 0; i < ans.answer.length; i++){
    if(ans.answer[i] === true){
      potentialCharacters += characters[i]
    }
  }
  
  console.log(potentialCharacters)

//Loops through potential characters and picks random character to add to final password.
  for(let i = 0; i < charCount; i++){
    finalPassword += potentialCharacters.charAt(Math.floor(Math.random() * potentialCharacters.length))
    console.log(finalPassword)
  }
  return finalPassword
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
