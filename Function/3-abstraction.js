'use strict';

// power абстракция более высокого уровня
// с помощью  наследуется при помощи лямбды 
// понидается уровень абстракции

const power = Math.pow;
const square = x => power(x, 2);
const cube = x => power(x, 3);

console.log(power(10, 2));
console.log(square(10));

console.log(power(10, 3));
console.log(cube(10));