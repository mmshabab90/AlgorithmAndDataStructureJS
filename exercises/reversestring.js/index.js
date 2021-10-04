/*
 * Giveb a string, return a new string
 *  with the reveresed order to characters
 * -- E.G. --
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
  // solution one -- using in-built js funcitons
  // return str.split("").reverse().join("");

  // solution two -- for loop
  /*
  var reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
  */

  // solution three -- using split & reduce
  debugger;
  return str.split("").reduce((rev, char) => char + rev, "");
}

// for debugging
reverse("abcd");

module.exports = reverse;
