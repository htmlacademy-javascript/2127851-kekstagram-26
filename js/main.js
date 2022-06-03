// 1 Функция, возвращающая случайное целое число из переданного диапазона включительно.

// // источник:  https://schoolsw3.com/js/js_random.php

const GETRNDINTEGER = function (min, max) {
  if (min>=0 && min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min; }
  else {
    return ('Измените границы диапазона значений');
  }
};
GETRNDINTEGER (0, 8);

// 2 Функция для проверки максимальной длины строки. Будет использоваться для проверки длины
// введённого комментария, но должна быть универсальна

function checkStringLength(checkString, maxStringLength) {
  const MYSTRING = checkString;

  if (MYSTRING.length <= maxStringLength) {
    return true;

  }
  else {
    return false;
  }
}

checkStringLength ('asdad', 18);

