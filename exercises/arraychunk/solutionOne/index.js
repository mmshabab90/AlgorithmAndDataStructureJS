// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // create an empty array to hold chunks
  const chuncked = [];
  // for each element in original array
  for (let element of array) {
    // retrieve the last element in chuncked
    const last = chuncked[chuncked.length - 1];
    // if last element doesn't exist or if its length is equal to chunk size
    if (!last || last.length === size) {
      // push a new chunk into chuncked array with the current element
      chuncked.push([element]);
    } else {
      // else add the current element into the chunk
      last.push(element);
    }
  }

  return chuncked;
}

module.exports = chunk;
