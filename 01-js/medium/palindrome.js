/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // console.log(str.toLowerCase() , str.toLowerCase().split("").reverse().join(""))
  if(str.split(" ").length > 1){
    // console.log(str.toLowerCase().split(" ").reverse().join(""))
if(str.toLowerCase().split(" ").join("") === str.toLowerCase().split(" ").join("")){
  return true
}
  }
  else if(str.toLowerCase() === str.toLowerCase().split("").reverse().join("")){
    return true;
  }
  return false
}
// console.log(isPalindrome('race car'))
module.exports = isPalindrome;
