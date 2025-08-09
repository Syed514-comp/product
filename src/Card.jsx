function Card({cart, setCart, images }) {


  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const addToCart = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: 1 } : item
      )
    );
  };

  return (
    <>
      {images.map(({ id, desktop, mobile, alt, description, price }) => {
        const cartItem = cart.find((item) => item.id === id);
        const quantity = cartItem ? cartItem.quantity : 0;
        const inCart = quantity > 0;

        return (
          <div className="card" key={id}>
            <picture>
              <source media="(max-width: 768px)" srcSet={mobile} />
              <img src={desktop} alt={alt} />
            </picture>

            <div className="add-button">
              {!inCart ? (
                <div id="button-title" onClick={() => addToCart(id)}>
                  Add to Cart
                </div>
              ) : (
                <div id="quantity-controls">
                  <button id="decrement-btn" onClick={() => decrementQuantity(id)}>
                    -
                  </button>
                  <div id="quantity-display">{quantity}</div>
                  <button id="increment-btn" onClick={() => incrementQuantity(id)}>
                    +
                  </button>
                </div>
              )}
            </div>

            <div id="item-name">{alt}</div>
            <div id="description">{description}</div>
            <div id="item-price">$ {price}</div>
          </div>
        );
      })}
    </>
  );
}

export default Card;
