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
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
