// ITERATION 1

function updateSubtotal(product) {
  
  
  const price = product.querySelector('.price span').textContent; // get the price value
  const quantity = product.querySelector('.quantity input').value; // get the quantity value
  const subtotal = price * quantity; // calculate the subtotal

  // Update the DOM element for the subtotal value
  const subtotalElement = product.querySelector('.subtotal span');
  subtotalElement.textContent = subtotal;
  return subtotal;
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
  const target = event.currentTarget;
  const row = target.parentNode.parentNode;
  row.remove();
}
  

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
//... your code goes here
  //const child = document.getElementsByClassName('.action button');
  const removeButtons = document.querySelectorAll(".btn-remove");
  console.log(removeButtons);
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
  const addButton = document.getElementById("create");
  console.log(addButton);
  addButton.addEventListener('click', createProduct);
})
  //... your code goes here


// ITERATION 5
function createProduct() {
  // Selecting input fields for product name and unit price
  const productNameInput = document.querySelector('.create-product input[type="text"]');
  const productPriceInput = document.querySelector('.create-product input[type="number"]');

  // Extracting values from input fields
  const productName = productNameInput.value;
  const productPrice = parseFloat(productPriceInput.value); // Converting to a floating-point number

  // Checking if both name and price are provided
  if (productName.trim() === '' || isNaN(productPrice) || productPrice < 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  // Clearing input fields after extracting values
  productNameInput.value = '';
  productPriceInput.value = '0';

  // Creating a new row for the product in the table
  const tableBody = document.querySelector('tbody');
  const newRow = tableBody.insertRow();

  // Adding cells for name, unit price, quantity, subtotal, and remove button
  const nameCell = newRow.insertCell(0);
  const priceCell = newRow.insertCell(1);
  const quantityCell = newRow.insertCell(2);
  const subtotalCell = newRow.insertCell(3);
  const removeCell = newRow.insertCell(4);

  // Setting content and classes for the cells
  nameCell.textContent = productName;
  priceCell.textContent = `$${productPrice.toFixed(2)}`;
  quantityCell.innerHTML = '<input type="number" min="0" value="1">';
  subtotalCell.textContent = `$${productPrice.toFixed(2)}`;
  removeCell.innerHTML = '<button class="btn btn-remove">Remove</button>';

   // Adding event listener to the remove button
   const removeButton = removeCell.querySelector('.btn-remove');
   removeButton.addEventListener('click', removeProduct);
   
  // Recalculate totals when a new product is added
  calculateAll();
}