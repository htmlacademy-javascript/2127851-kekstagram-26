// 1
function getRandomNumber (min, max) {
  if (min >= 0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  return ('Измените границы диапазона значений');
}
getRandomNumber (1,8);

//  2
function checkStringLength (myString, maxStringLength) {
  if (myString.length <= maxStringLength) {
    return true;
  }
  return false;
}
checkStringLength ('s34535', 21);
