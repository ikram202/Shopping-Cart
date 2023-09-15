const quantityInputs = document.querySelectorAll('.product-quantity');
const priceElements = document.querySelectorAll('.product-price');
const linePriceElements = document.querySelectorAll('.product-line-price');
const cartSubtotal = document.getElementById('cart-subtotal');

console.log(quantityInputs)

function updateTotal() {
  let totalPrice = 0;
  for (let i = 1; i < quantityInputs.length; i++) { 
    const quantity = parseInt(quantityInputs[i].value);
    const price = parseFloat(priceElements[i].textContent.replace('$', '')); 
    const linePrice = quantity * price;
    linePriceElements[i].textContent = `${linePrice}€`;
    totalPrice += linePrice;
  }
  cartSubtotal.textContent = `${totalPrice}€`; 
}

quantityInputs.forEach(function (input) {
  input.addEventListener('input', updateTotal);
});

function toggleHeartColor(e) {
  const clickedHeart = e.target;
  clickedHeart.classList.toggle('selected');
}

const heartElements = document.querySelectorAll('.heart');
heartElements.forEach((element) => {
  element.addEventListener('click', toggleHeartColor);
});

updateTotal();

document.querySelectorAll('.trash').forEach((trashIcon, index) => {
  trashIcon.addEventListener('click', () => {
    const row = trashIcon.parentElement.parentElement;
    row.remove();

    updateTotal();
    
  });
});

updateTotal();