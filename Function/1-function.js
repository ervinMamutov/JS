'use strict'

// function declaration
/*
 если сделать такое объявление функции,
 то он будет виден во всех частях этого файла.

*/
function inc(a) {
  return a + 1;
}

// function expresion
/*
будет видна после того как присловили переменную.
*/
const sum = function(a, b) {
  return a + b;
};

// lambda expresion
/*
return не используется
функция доходит до return и выходит 
*/
const max = (a, b) => (a > b ? a : b);

const avg = (a, b) => {
  const s = sum(a, b);
    return s / 2;
  };

  console.log('inc(5) = ' + inc(5));
  console.log('sum(1, 3) = ' + sum(1, 3));
  console.log('max(8, 6 =' + max(8, 6));
  console.log('avg)8, 6) = ' + a(8, 6));