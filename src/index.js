module.exports = function toReadable (number) {
  let ones = [ "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];
  let teens = [ "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
  let tens = [ "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];
  
  let numberStr = number.toString();
  let numberLength = numberStr.length;

  if (number === 0) {
    return 'zero';
  } 
  else {
    switch (numberLength) {
      case 1:
        return getOneDigitsNumber(number);
        break;
      case 2:
        return getTwoDigitsNumber(number);
        break;
      case 3:
        return getThreeDigitsNumber(number);
        break;
    }
  }

  function getOneDigitsNumber (number) {
    return (ones[number]).toLowerCase();
  }

  function getTwoDigitsNumber (number) {
    if (number < 10) {
      return getOneDigitsNumber(number);
    }
    else if (number < 20) {
      return (
        teens[numberStr[numberLength - 1]]
        ).toLowerCase();
    } else {
      return (
        tens[numberStr[numberLength - 2]] 
        + ' ' 
        + getOneDigitsNumber(numberStr[numberLength - 1])
        ).toLowerCase().trim();
    }
  }

  function getThreeDigitsNumber (number) {
    return (
      ones[numberStr[0]] + " hundred " 
      + getTwoDigitsNumber(+(number.toString().slice(1))) 
      ).toLowerCase().trim();
  }


}
