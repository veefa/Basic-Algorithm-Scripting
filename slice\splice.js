//Problem
/*
Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/
//Solotion 1 
///
// Using "..." operatore to insert elements
///
//
/*Algorithm
  1 - make a copy of arr2 with slice() (where we make changes)
  2 - insert arr1 elements starting from index n and delete 0 with splice()
  3 - return the arrays combined
*/
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// return [4, 1, 2, 3, 5, 6]length :6
//Solotion 2
///
// Using for loop
///
//
/*Algorithm
  1 - make a copy of arr2 (where we make changes)
  2 - loop through arr1 element and insert them in the copy array starting from index n
  3 - increase n by 1 each the loop runs
  4 - return the arrays combined
*/
function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++
  }
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// return [4, 1, 2, 3, 5, 6]
