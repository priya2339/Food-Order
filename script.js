const foodItems = [
    { id: 1, name: 'Margherita Pizza', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Cheese Burger', price: 8, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Pasta Alfredo', price: 12, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Chocolate Cake', price: 6, image: 'https://via.placeholder.com/150' },
  ];
  
  let cart = [];
  
 
  function displayMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = foodItems.map(item => `
      <div class="food-item">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <button onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
    `).join('');
  }
  
  function addToCart(id) {
    const item = foodItems.find(food => food.id === id);
    cart.push(item);
    displayCart();
  }
  

  function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `).join('');
  
    updateTotal();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
  }
  

  function updateTotal() {
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('cart-total').innerText = total;
  }
  
 
  function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  }
  

  document.getElementById('place-order-btn').addEventListener('click', () => {
    alert('Order placed successfully!');
    cart = [];
    displayCart();
  });
  
  displayMenu();
  