/**
 * Prolem:
 * Given a string, return true if the string is a palindrome
 * or false if it's not.
 * Palindromes are strings that form the same word if reversed
 * DO* include spaces and punctutation in determining if the string is a palindrome
 * Examples:
 * palindrome("TENET") === true
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
  // Solution using split to convert string to array
  // and every function to compare each charater to the last one
  // to make sure the word is a palindrome
  // This solution has higher order of operation as it compares the
  // character twice making it not an ideal solution
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
