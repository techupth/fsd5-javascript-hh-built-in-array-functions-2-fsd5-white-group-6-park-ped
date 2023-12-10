function isPalindrome(string) {
  string.toLowerCase();
  let reverseString = string.split("");
  reverseString.reverse();
  reverseString = reverseString.join("");
  console.log(reverseString);
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
