// Converts the given number into a roman numeral.

function convertToRoman(num) {

    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let strRoman = "";
    for (let i = 0; i<arabic.length; i++) { 
      while (num >= arabic[i]) {
        strRoman += roman[i];
        num -= arabic[i];
      }
    }
    console.log(strRoman);
    return strRoman;
  }
  
  convertToRoman(38);