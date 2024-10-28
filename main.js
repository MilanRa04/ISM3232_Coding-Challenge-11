// Task 1 completed in index.html

// Task 2: Add event listener for product selection: lines 20 and 21
// Task 3: Calculate total price dynamically: lines 11-18
// The following code will contain the code for tasks 2 and 3 to ensure that the total price updates in real time as a user changes the product or the quantity.

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');

// Calculate and update the total price when product or quantity changes
function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

//Add event listeners to note product and quantity choices.
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

//Task 3: As noted above the code for task 3 is included at the beginning of task 2: lines 11-18


