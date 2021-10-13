'use strict';
// функция - это объект первого класса
function inc(a) {
  return ++a;
}

const sum = function(a, b) {
  return a + b;
};

const max = (a, b) => (a > b ? a : b);

console.log('Names: ');
console.dir({
  // атрибуты функции
  inc: inc.name,
  sum: sum.name,
  max: max.name,
})

console.log('Arguments: ');
console.dir({
  inc: inc.length,
  sum: sum.length,
  max: max.length,
});

console.log('Anonymus function: ' + function(x) { return x; }.name);
console.log('Anonymus lambda: ' + (x => x).name);

console.log('toString: ');
console.dir({
  inc: inc.toString(),
  sum: sum.toString(),
  max: max.toString()
});



