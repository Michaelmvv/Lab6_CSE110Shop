// Script.js
let cartCount = 0;
let inCartArray = [];
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('ProductArray') === null) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('ProductArray', JSON.stringify(data));
        })
        .then(addProducts());
  } else {
    addProducts();
  }
});

// Only call after loaded..
function updateCartCount(amt, id) {
  cartCount += amt;
  document.getElementById('cart-count').textContent = cartCount;
  if (id != -1) {
    inCartArray[id] = !inCartArray[id];
    localStorage.setItem('inCartArray', JSON.stringify(inCartArray));
  }
}

function addProducts() {
  let productHolder = document.getElementById('product-list');
  let bar = JSON.parse(localStorage.getItem('ProductArray'));

  // Save cart....
  let tmp = localStorage.getItem('inCartArray');
  if (tmp === null) {
    bar.forEach(e => {
      inCartArray[e.id] = false;
    });
    localStorage.setItem('inCartArray', JSON.stringify(inCartArray));
  } else {
    inCartArray = JSON.parse(tmp)
    inCartArray.forEach(element => {
      if (element) {
        cartCount++;
      }
    });
    updateCartCount(0, -1);
  }

  bar.forEach(element => productHolder.appendChild(new ProductItem(element)));
}