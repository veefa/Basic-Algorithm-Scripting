//Problem
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of
*/
function titleCase(str) {
 str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(titleCase("the pot of tea")); 
// return: The Pot Of Tea
console.log(titleCase("I'm a little tea pot"));
// return: I'm A Little Tea Pot
