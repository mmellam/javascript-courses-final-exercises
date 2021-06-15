/*
Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same 
way both forward and backward, ignoring punctuation, 
case, and spacing. Remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything 
into the same case (lower or upper case) in order to 
check for palindromes.
*/

function palindrome(str) {

    let stringArr = str.toLowerCase().match(/[A-Za-z0-9]/g);
  
    console.log(stringArr);
  
    let bool = false;
    let i = 0;
    while (i <= stringArr.length/2) {
      if (stringArr[i] === stringArr[stringArr.length - 1 - i]) {
        bool = true;
      }
      else {
        bool = false;
        break;
      }
      i++;
    }
    console.log(bool);
    return bool;
  }
  
  
  palindrome("2A3*3a2");