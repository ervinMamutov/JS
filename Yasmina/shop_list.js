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
 


