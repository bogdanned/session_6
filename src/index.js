const productPricesNet = {
  milk: 3,
  apple: 6,
  bread: 23
};

// TODO: Complete applyTax to return the prices with VAT 19%
function applyTax(productPricesNet) {
  // TODO: Add your code here
  // Should return a new object with the same product
  // The new price should include the tax: old price * 1.19
  const productKeys = Object.keys(productPricesNet); //this is an array

  
  // reduce Array to an Object
  return productKeys.reduce(function (acc, element) {
    acc[element] = acc[element] * 1.19;
    return acc;
  }, productPricesNet); //create a new object as initial value
}

const productPricesBrutto = applyTax(productPricesNet);

console.log(productPricesBrutto);
