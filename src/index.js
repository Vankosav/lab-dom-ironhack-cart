// ITERATION 1

function updateSubtotal(product) {
  /*const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input').innertext;*/
  
  const price = product.querySelector('.price span').textContent; // get the price value
  const quantity = product.querySelector('.quantity input').value; // get the quantity value
  const subtotal = price * quantity; // calculate the subtotal

  // Update the DOM element for the subtotal value
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;
  return subtotal;
  //... your code goes here
}
console.log('Calculating subtotal, yey!');

function calculateAll() {
  const products = document.getElementsByClassName('product');
  console.log(products)
  const newArray = [...products];
  let endTotal = 0;
  for (element of newArray) {
    endTotal = endTotal + updateSubtotal(element);
  }
  document.querySelector('#total-value span').textContent = endTotal
}


  
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
 


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.getElementsByClassName('.action button');
  
  console.log('The target in remove is:', target);
  //... your code goes here
  const parent = document.getElementsByClassName('action');
  const child = document.getElementsByClassName('btn btn-remove');
  //let rem = parent.removeChild(child);
  console.log(rem);
  
 parent.forEach(child => {
    //button.addEventListener('click', () => removeProduct());
    let rem = parent.removeChild(child);
    console.log(rem)
  });
 
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
