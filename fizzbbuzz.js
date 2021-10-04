/* 
Problem: A program that prints number 1 to 100.
But for multiples of 3 print "Fizz" intead of the number
and for multiples of 5 print "Buzz" instead of the number.
For multiples of both 3 and 5 print "FizzBuzz" instead of the number.
*/

function fizzBuzz() {
  var i;

  // Solution using for and if
  // exhaustive solution
  var startTimeIf = performance.now();
  for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
  var endTimeIf = performance.now();

  // Single line solution with ternary op
  var startTimeTer = performance.now();
  for (i = 1; i < 101; i++)
    console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
  var endTimeTer = performance.now();

  console.log(
    `Performance using for and if conditions: ${
      endTimeIf - startTimeIf
    } seconds`
  );
  console.log(
    `Performance using for and ternary operation: ${
      endTimeTer - startTimeTer
    } seconds`
  );
}

fizzBuzz();
