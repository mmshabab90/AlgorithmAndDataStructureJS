// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Convert string to object with key value pairs
  const chars = {};
  let max = 0;
  let maxChar = "";

  // assign the character as key with number of occurances as value
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  // iterate over an object
  for (let char in chars) {
    if (chars[char] > max) {
      // update the max occurance
      max = chars[char];
      // store the key as the result to return
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
