//Problem 
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
*/
//
////Solution 1
//
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}
console.log(mutation("Mary", "Aarmy"))
//return true
//
////Solution 2
//
function mutation(arr) {
  var arr1 = arr[0].toLowerCase().split("");
  var arr2 = arr[1].toLowerCase().split("");
  var count = 0;
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > -1) {
      count++;
    }
  }
  if (count == arr2.length) {
    return true;
  } else {
    return false;
  }
}

console.log("It is :", mutation(["alien", "lvine"]));
