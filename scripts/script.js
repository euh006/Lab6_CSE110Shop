// Script.js

window.addEventListener('DOMContentLoaded', () => {
  
  if (!window.localStorage.getItem('products')) {

    let temp = JSON.parse(myStorage.getItem('products'));

      for (let i = 0; i < temp.length; i++) {

        let product_item = document.createElement('product-item');

        const shadow = product_item.shadowRoot;

        shadow.querySelector('img').src = temp[i].image;
        shadow.querySelector('img').alt = temp[i].title;
        shadow.querySelector('.title').textContent = temp[i].title;
        shadow.querySelector('.price').textContent = temp[i].price;
        

        /*
        product_item.setAttribute('img', temp[i].image);
        product_item.setAttribute('alt', temp[i].title);

        product_item.setAttribute('title', temp[i].title);
        product_item.setAttribute('price', '$' + temp[i].price);
        
        product_item.setAttribute('button', temp[i].id);*/

        document.getElementById('product-list').appendChild(product_item);
      }
  }
  else {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => { 
      var myStorage = window.localStorage;
      myStorage.setItem('products', JSON.stringify(data));
  
      let temp = JSON.parse(myStorage.getItem('products'));
  
      for (let i = 0; i < temp.length; i++) {

        let product_item = document.createElement('product-item');

        const shadow = product_item.shadowRoot;

        shadow.querySelector('img').src = temp[i].image;
        shadow.querySelector('img').alt = temp[i].title;
        shadow.querySelector('.title').textContent = temp[i].title;
        shadow.querySelector('.price').textContent = temp[i].price;

        document.getElementById('product-list').appendChild(product_item);
      }
    });

  }

});