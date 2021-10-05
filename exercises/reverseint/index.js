// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // convert the number to string and split to array and reverse join
  // convert the string to int
  const reversed = n.toString().split("").reverse().join("");
  // handle negative number

  // way - 1
  /*
  if (n < 0) {
    // if number is less than 0 then multiple -1 with the reversed number
    return parseInt(reversed) * -1;
  } else {
    // return the reversed number
    return parseInt(reversed);
  }
  */

  //way 2 using Math.sign
  // Math.sign returns 1 if the number is positive
  // and -1 if the number is negative
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
