const products = [
  { id: 1, name: "Sneakers", price: 15000 },
  { id: 2, name: "T-Shirt", price: 5000 },
  { id: 3, name: "Cap", price: 3000 }
];

// Load cart from localStorage if it exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = ""; // clear before re-render
  products.forEach(p => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <h3>${p.name}</h3>
      <p>₦${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1); // remove item at given index
  saveCart();
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₦${item.price}
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartList.appendChild(li);
    total += item.price;
  });
  document.getElementById("total").textContent = total;
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Initialize
displayProducts();
displayCart();