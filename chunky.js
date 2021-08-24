//Problem
/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/
//
////Solution
//
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let subArr = [];
  for (let i = 0; i < arr.length; i += size ){
    subArr = arr.slice(i, i + size);
    newArr.push(subArr);
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//return [["a", "b"], ["c", "d"]]
