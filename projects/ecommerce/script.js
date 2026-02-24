const products = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, emoji: '🎧' },
    { id: 2, name: 'Smart Watch', price: 199.99, emoji: '⌚' },
    { id: 3, name: 'Laptop', price: 999.99, emoji: '💻' },
    { id: 4, name: 'Camera', price: 549.99, emoji: '📷' },
    { id: 5, name: 'Smartphone', price: 699.99, emoji: '📱' },
    { id: 6, name: 'Tablet', price: 449.99, emoji: '📱' }
];

let cart = [];

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    document.getElementById('cartCount').textContent = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

renderProducts();
