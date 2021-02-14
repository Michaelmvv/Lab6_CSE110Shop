// Script.js
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

function addProducts() {
  let productHolder = document.getElementById('product-list');
  let bar = JSON.parse(localStorage.getItem('ProductArray'));
  bar.forEach(element => productHolder.appendChild(new ProductItem(element)));
}