import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const taxRate = 0.08;
  const freeShippingThreshold = 50;

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return removeItem(id);

    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );

    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const clearCart = () => {
    if (window.confirm('Clear all items from cart?')) {
      setCartItems([]);
      localStorage.removeItem('cart');
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const shipping = subtotal >= freeShippingThreshold ? 0 : 9.99;
  const total = subtotal + tax + shipping;
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1>Shopping Cart</h1>
          <div className="empty-cart-page">
            <h3>Your cart is empty</h3>
            <p>Add items to see them here.</p>
            <a href="/products" className="btn btn-primary">
              Start Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items-section">

            {cartItems.map(item => (
              <div key={item.id} className="cart-item" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>

                {/* ✅ PRODUCT IMAGE */}
                <div className="cart-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '90px',
                      height: '90px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      background: '#f9f9f9',
                      padding: '0.5rem'
                    }}
                  />
                </div>

                {/* PRODUCT INFO */}
                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p style={{ color: '#666' }}>${item.price.toFixed(2)}</p>
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="quantity-controls-page">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                {/* ITEM TOTAL */}
                <div style={{ minWidth: '80px', fontWeight: '600' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* REMOVE */}
                <button onClick={() => removeItem(item.id)} className="btn btn-outline">
                  Remove
                </button>

              </div>
            ))}

            <div className="cart-actions">
              <button className="btn btn-secondary" onClick={clearCart}>
                Clear Cart
              </button>
              <a href="/products" className="btn btn-outline">
                Continue Shopping
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Items ({itemCount}): ${subtotal.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Shipping: {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
            <h3>Total: ${total.toFixed(2)}</h3>

            <button className="btn btn-primary">
              Proceed to Checkout
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
