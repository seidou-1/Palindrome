//Create a function that will test what we pass to it to see if it's a palindrome. 
// If the word is a palindrome, return true.. if not, return false

function checkForPalindrome(str){
  var tester = str;
  tester = tester.split(""); //what about the object? oh split it.
  tester = tester.reverse(); //what about the object? oh reverse it.
  tester = tester.join(""); //what about the object? oh join it.

  if (tester === str) {
    return true;
  } else {
    return false;
  }
}

checkForPalindrome ('bobo');                                                              
