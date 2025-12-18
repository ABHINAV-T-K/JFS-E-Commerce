import React from 'react';

const Products = () => {

  const products = [
    {
      id: 1,
      name: 'Smartphone Pro',
      price: 699,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Laptop Ultra',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: 199,
      image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Audio'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 299,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
      category: 'Wearables'
    },
    {
      id: 5,
      name: 'Tablet Pro',
      price: 599,
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
      category: 'Electronics'
    },
    {
      id: 6,
      name: 'Gaming Console',
      price: 499,
      image: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/BEST-HANDHELD-GAMING-CONSOLES-2048px-09705.jpg?auto=webp&quality=75&width=1024',
      category: 'Gaming'
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      price: 149,
      image: 'https://mm.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd1b834a7/JBL_LINK_PORTABLE_BROWN_BACK_1605x1605px.png?sw=537&sfrm=png',
      category: 'Audio'
    },
    {
      id: 8,
      name: 'Fitness Tracker',
      price: 99,
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=600&q=80',
      category: 'Wearables'
    },
    {
      id: 9,
      name: 'Wireless Mouse',
      price: 49,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
      category: 'Accessories'
    }
  ];

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.id === product.id);

    let updatedCart;
    if (existing) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="fade-in">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Products</h1>

          <div className="products-grid">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-card scale-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="product-image" style={{ padding: '1.5rem' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <div
                  className="product-info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                  }}
                >
                  <h3>{product.name}</h3>

                  <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    {product.category}
                  </p>

                  <p className="product-price">${product.price}</p>

                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    High-quality product with premium features and excellent performance.
                  </p>

                  <button
                    className="btn"
                    style={{ width: '100%', marginTop: 'auto' }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
