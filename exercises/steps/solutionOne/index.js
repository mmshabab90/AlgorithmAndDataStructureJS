// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// iterative solution
function steps(n) {
  // convert n to positive
  const iter = Math.abs(n);
  // from 0 to iter (iterate through rows)
  for (let row = 0; row < iter; row++) {
    // create an empty string 'step'
    let step = "";
    // from 0 to iter (iterate through columns)
    for (let col = 0; col < iter; col++) {
      // if the current column is equal to or less than the current row
      if (col <= row) {
        // add a '#' to 'step'
        step += "#";
      } else {
        // else add a space to 'step'
        step += " ";
      }
    }
    // console log 'step'
    console.log(step);
  }
}

module.exports = steps;
