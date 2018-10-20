const calculateDigits = function(number) {
  let count = 0;
  while(number != 0) {
    number = Math.floor(number/10);
    count ++;
  }
  return count;
}

const calcCube = function(number) {
  return number*number*number;
}

const checkTrimorphic = function(number) {
  let cube = calcCube(number);
  let numberOfDigits = calculateDigits(number);
  let divisor = calcDivisor(numberOfDigits);
  let remainder = cube % divisor;
  if(remainder == number) {
    return true;
  }
  return false;
}

const calcDivisor = function(numberOfDigits) {
  let divisor = 0;
  while(numberOfDigits) {
    divisor += 10;
    numberOfDigits --;
  }
  return divisor;
}

exports.testTrimorphic = checkTrimorphic;






