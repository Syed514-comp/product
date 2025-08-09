import emptyCart from './images/illustration-empty-cart.svg'
import carbonNeutral from './images/icon-carbon-neutral.svg'
import { useState } from 'react';
import Modal from './Modal';
function Cart({products, cart, setCart, images}) {
  const [showModal, setShowModal] =useState(false)
  const getTotalPrice = () => {
    return cart.reduce((sumP, cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      return sumP + cartItem.quantity * product.price;
    }, 0);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => 
      prevCart.map((item) => item.id === productId ? {...item, quantity: 0} : item))
  }

  const getTotalQuantity = () => {
    return cart.reduce((sumQ, cartItem) => {
      return sumQ + cartItem.quantity; 
    }, 0);
  };

  const orderItems = cart.filter(item => item.quantity > 0)
  return (
    <div>
      {cart.filter(item => item.quantity > 0).length === 0 ? (
      <div id='empty'>
        <div id='empty-cart-text'>Your Cart ({getTotalQuantity()})</div>
        <img src={emptyCart} alt="empty" />
        <div id="empty-cart-message">Your added items will appear here</div>
      </div>
      ):<div id='non-empty'>
        <div id="non-empty-cart-text"> Your Cart ({getTotalQuantity()})</div>

        {cart.filter((item)=> item.quantity > 0).map((item) => {
          const product = products.find((p) => p.id === item.id);
          return (
            <div key={item.id}>
              <div id='added-item-name'>{product.name}</div>
              <div id='item-desc'> {`${item.quantity}x + ${product.price} = £${product.price * item.quantity}`}</div>
              <button onClick={()=> removeFromCart(item.id)}>X</button>
            </div>
          )
        })}

        <div id='total-price-container'>
          <div id='total-text'>Order Total</div>
          <div id='total-price'>{`£${getTotalPrice()}`}</div>
        </div>

        <div id='eco-container'>
          <img src={carbonNeutral} alt="Carbon neutral identifier logo" />
          <div id='eco-message'> This is a <span id='eco-message-bold' style={{fontWeight: 'bold'}}>carbon-neutral</span> delivery</div>
        </div>

        <button id='confirm-button' onClick={()=> setShowModal(true)}>Confirm Order</button>

        {showModal && (
  <Modal 
    orderItems={orderItems} 
    products={products} 
    images={images} 
  />
)}

        </div>}
    </div>
  )
}
export default Cart 