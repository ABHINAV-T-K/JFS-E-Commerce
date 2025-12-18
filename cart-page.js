// Cart Page Functionality
class CartPage {
    constructor() {
        this.cart = new ShoppingCart();
        this.taxRate = 0.08; // 8% tax rate
        this.freeShippingThreshold = 50;
        this.init();
    }

    init() {
        this.renderCartItems();
        this.updateSummary();
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItemsPage');
        
        if (this.cart.items.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-page">
                    <i class="fas fa-shopping-cart"></i>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added any items to your cart yet.</p>
                    <a href="index.html#products" class="btn btn-primary">Start Shopping</a>
                </div>
            `;
            return;
        }

        cartItemsContainer.innerHTML = `
            <div class="cart-table">
                <div class="cart-table-header">
                    <div class="col-product">Product</div>
                    <div class="col-price">Price</div>
                    <div class="col-quantity">Quantity</div>
                    <div class="col-total">Total</div>
                    <div class="col-action">Action</div>
                </div>
                ${this.cart.items.map(item => this.renderCartItem(item)).join('')}
            </div>
        `;
    }

    renderCartItem(item) {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        
        return `
            <div class="cart-table-row" data-id="${item.id}">
                <div class="col-product">
                    <div class="product-info">
                        <div class="product-image-small">
                            <i class="fas fa-${this.getProductIcon(item.name)}"></i>
                        </div>
                        <div class="product-details">
                            <h4>${item.name}</h4>
                            <p>SKU: ${item.id.padStart(6, '0')}</p>
                        </div>
                    </div>
                </div>
                <div class="col-price">
                    $${item.price.toFixed(2)}
                </div>
                <div class="col-quantity">
                    <div class="quantity-controls-page">
                        <button class="quantity-btn" onclick="cartPage.updateQuantity('${item.id}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" value="${item.quantity}" 
                               onchange="cartPage.updateQuantity('${item.id}', parseInt(this.value))" min="1">
                        <button class="quantity-btn" onclick="cartPage.updateQuantity('${item.id}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="col-total">
                    $${itemTotal}
                </div>
                <div class="col-action">
                    <button class="remove-btn" onclick="cartPage.removeItem('${item.id}')" title="Remove item">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    updateQuantity(productId, quantity) {
        this.cart.updateQuantity(productId, quantity);
        this.renderCartItems();
        this.updateSummary();
    }

    removeItem(productId) {
        this.cart.removeItem(productId);
        this.renderCartItems();
        this.updateSummary();
        this.showNotification('Item removed from cart', 'success');
    }

    updateSummary() {
        const subtotal = this.cart.getTotal();
        const itemCount = this.cart.getItemCount();
        const tax = subtotal * this.taxRate;
        const shipping = subtotal >= this.freeShippingThreshold ? 0 : 9.99;
        const total = subtotal + tax + shipping;

        document.getElementById('itemCount').textContent = itemCount;
        document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        document.getElementById('tax').textContent = tax.toFixed(2);
        document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
        document.getElementById('totalAmount').textContent = total.toFixed(2);

        // Update cart count in header
        document.querySelector('.cart-count').textContent = itemCount;
    }

    getProductIcon(productName) {
        const icons = {
            'Premium Laptop': 'laptop',
            'Wireless Headphones': 'headphones',
            'Smartphone Pro': 'mobile-alt'
        };
        return icons[productName] || 'box';
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            ${message}
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#3b82f6'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1002;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize cart page
const cartPage = new CartPage();

// Global functions for cart page
function proceedToCheckout() {
    if (cartPage.cart.items.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = document.getElementById('totalAmount').textContent;
    const itemCount = cartPage.cart.getItemCount();
    
    if (confirm(`Proceed to checkout?\nTotal: $${total} (${itemCount} items)`)) {
        alert('Redirecting to secure checkout...');
        // Here you would integrate with a payment processor
        // For demo purposes, we'll just clear the cart
        cartPage.cart.clear();
        cartPage.renderCartItems();
        cartPage.updateSummary();
    }
}

function clearCart() {
    if (cartPage.cart.items.length === 0) {
        alert('Your cart is already empty!');
        return;
    }
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cartPage.cart.clear();
        cartPage.renderCartItems();
        cartPage.updateSummary();
        cartPage.showNotification('Cart cleared successfully', 'success');
    }
}

// Update cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    cartPage.updateSummary();
});
