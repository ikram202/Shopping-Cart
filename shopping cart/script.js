const quantityInputs = document.querySelectorAll('.product-quantity');
const priceElements = document.querySelectorAll('.product-price');
const linePriceElements = document.querySelectorAll('.product-line-price');
const cartSubtotal = document.getElementById('cart-subtotal');
const heartElements = document.querySelectorAll('.heart');
const trashIcons = document.querySelectorAll('.trash');

function updateTotal() {
  let totalPrice = 0;

  for (let i = 0; i < quantityInputs.length; i++) {
    const quantity = parseInt(quantityInputs[i].value);
    const price = parseFloat(priceElements[i].textContent.replace('$', ''));
    const linePrice = quantity * price;
    
    linePriceElements[i].textContent = `$${linePrice.toFixed(2)}`;
    totalPrice += linePrice;
  }
  
  cartSubtotal.textContent = `$${totalPrice.toFixed(2)}`;
}

quantityInputs.forEach(input => {
  input.addEventListener('input', updateTotal);
});

heartElements.forEach(element => {
  element.addEventListener('click', event => {
    event.target.classList.toggle('selected');
  });
});

trashIcons.forEach(trashIcon => {
  trashIcon.addEventListener('click', () => {
    const row = trashIcon.closest('tr');
    row.remove();
    updateTotal();
  });
});

updateTotal();
