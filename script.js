// Assignment Code
var specChar = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',
];

// Array for numeric characters 
var numbChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array for uppercase characters
var upperCasedCharacters = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];

// Array for lowercase characters 
var lowerCasedCharacters = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function for password options
function passOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain? minimum 8 Characters'),
    10
  );

  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return null;
  }

  var hasspecChar = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasnumbChar = confirm(
    'Click OK to confirm including numeric characters.'
  );

    var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean regarding the inclusion of uppercase characters


  if (
    hasspecChar === false &&
    hasnumbChar === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return null;
  }

  var passwordOptions = {
    length: length,
    hasspecChar: hasspecChar,

