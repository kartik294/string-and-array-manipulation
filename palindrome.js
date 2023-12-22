// Question: Write a function that checks if a given string is a palindrome
function isPalindrome(s) {
  const reversedStr = s.split("").reverse().join("");
  return s === reversedStr;
}
console.log(isPalindrome("level"));
//output true
