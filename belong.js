//Problem
/*
Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted.
The returned value should be a number.
*/
//
//// Solution
//
function getIndexToIns(arr, num) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
//return 2
