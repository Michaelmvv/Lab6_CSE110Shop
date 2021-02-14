// Script.js
let productArray;
window.addEventListener('DOMContentLoaded', () => {
  productArray = localStorage.getItem('ProductArray');
  if (fromLocalStorage === null) {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('ProductArray', toString(data));
          productArray = data;
        });
  }
});