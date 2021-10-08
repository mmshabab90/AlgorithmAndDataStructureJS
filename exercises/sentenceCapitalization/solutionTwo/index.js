// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // create 'result' which is the first character of the input string capitalized
  let result = str[0].toUpperCase();

  // for each character in the string
  for (let i = 1; i < str.length; i++) {
    // if the character to the left is a space
    if (str[i - 1] === " ") {
      // then capitalize it and add it to the result
      result += str[i].toUpperCase();
    } else {
      // else add it to the result
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;
