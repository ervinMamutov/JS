const MAX_PURCHASE = 2000; /* UPPER_SNAKE_CASE */

const calculatal = (prices) => { // lowerCamelCase
  let amount = 0;
  // `Array` is a CamelCase
  if (!Array.isArray(prices)) throw 'Array expected';
  for (const price of prices) {
    amount += price;
}
return amount;
};
 
const purchase = {      //  [[1, 2, 3,], ['a', 'b', 'c']]
  Electronics: [
  { name: 'Laptop', price: 1500 },
  { name: 'Keyboard', price: 100 }, 
 { name: 'HDMI cable', price: 10 },
],
Textile: [
{ name: 'Bag', price: 50 },
],
};      // const json = JSON.stringfy(purchase);
        // const obj = JSON. parse(jeson); 
