// Problem
/*
Given an array, remove all falsy values from the array and return an array of only truthy values.
*/
//Solution 1
//
///using the FOR...OF loop
//
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([7, "ate", "", false, 9]));
//return (3) [7, "ate", 9]

//Solution 2
//
///using the filter().
//
function bouncer(arr) {
  return arr.filter(value => {
    return Boolean(value);
  });
}

console.log(bouncer([7, "ate", "", false, 9]));
//return (3) [7, "ate", 9]
