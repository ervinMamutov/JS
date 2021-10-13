'use strict'

const welcome = person => {
  const name = person.name;
  const first = name.charAt(0).toUpperCase();
  const capitalized = first + rest;
  console.log(`Ave, ${capitalized}!`);
}

welcome({ name: 'marcus'});