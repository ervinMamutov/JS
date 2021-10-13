'use strict';
 
//
const cities = ['Athena' , 'Roma', "London", 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length; // f - функция отображает длину строки

//function declaration 
function f1() {
  const cities = ['Athena', 'Roma']; // перекрывают наружние определения
  const f = s => s.toUpperCase();
  console.dir({ cities});
  console.dir(cities.map(f));

  {
    const f = s => s.toLowerCase(); // закрывате идентификатор f
    console.dir({ cities });
    console.dir(cities.map(f));
  }

  {
    const cities = ['London', 'Beijing' , 'Kiev'];
    console.dir({ cities});
    console.dir(cities.map(f));
  }
}

f1();

console.dir({ cities });
console.dir(cities.map(f));