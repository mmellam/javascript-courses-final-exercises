/* 
Function which takes a ROT13 encoded string as 
input and returns a decoded string.
*/


function rot13(str) {
    let regex = /[A-Z]/;
    let arr = str.split("");
    //console.log(arr);
    let newArr = arr.map(item => {
      if (regex.test(item) === true) {
       let charCode = item.charCodeAt(0);
       if (charCode >= 78) {
         return String.fromCharCode(charCode-13)
       } else if (charCode < 78) {
         return String.fromCharCode(charCode+13)
       }
     } else {
        return item;
      }
    });
    
    let newStr = newArr.join("");
    console.log(newStr);
    return newStr;
   
   /*
    let m = String.fromCharCode(78-13);
    console.log(m);
    let z = String.fromCharCode(90+13-26);
    console.log(z);
   */
    
   }
   
   rot13("SERR PBQR PNZC!");
   rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");