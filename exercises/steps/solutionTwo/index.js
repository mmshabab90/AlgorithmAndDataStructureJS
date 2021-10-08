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

// recursion solution
function steps(n, row = 0, step = "") {
  // make sure n is always positive
  const iter = Math.abs(n);
  // if (row === iter) then we have hit the end of our problem [base case]
  if (iter === row) {
    return;
  }
  // if the 'step' string has a length === iter then we are at the end of a row
  if (iter === step.length) {
    console.log(step);
    return steps(iter, row + 1);
  }
  // if the length of the step string is less than or equal to the row number
  // we're working on, we add a '#'
  if (step.length <= row) {
    step += "#";
  } else {
    // otherwise add a space
    step += " ";
  }

  steps(iter, row, step);
}

module.exports = steps;
