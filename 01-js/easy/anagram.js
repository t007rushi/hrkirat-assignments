/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
if(str1.toLowerCase().split("").sort().join() === str2.toLowerCase().split("").sort().join()) {
  // console.log(str1.split("").toLowerCase().sort().join(),str2.toLowerCase().split("").sort().join())
  return true
}else {
  // console.log(str1.split("").sort().join(),str2.split("").sort().join())
  return false}
}
isAnagram('Debit Card', 'Bad Credit');
module.exports = isAnagram;
