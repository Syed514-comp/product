import iconOrderConfirmed from './images/icon-order-confirmed.svg'
import './Modal.css'

function Modal({ orderItems, products, images }) {
  // Get full details for each ordered item
  const orderedDetails = orderItems.map(item => {
    const product = products.find(p => p.id === item.id);
    const imgData = images.find(img => img.id === item.id);
    return {
      ...item,
      name: product.name,
      price: product.price,
      img: imgData.desktop, 
      alt: imgData.alt
    };
  });

  return (
    <div id="modal-background">
      <div id='modal-container'>
        <img src={iconOrderConfirmed} alt="Order confirmed" />
        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div id='modal-description'>
          {orderedDetails.map((product) => (
            <div key={product.id} className="modal-item">
              <img src={product.img} alt={product.alt} className="modal-item-img" />
              <div className="modal-item-details">
                <div className="modal-item-name">{product.name}</div>
                <div className="modal-item-meta">
                  {product.quantity} × £{product.price.toFixed(2)}  
                  <span className="modal-item-subtotal">
                    = £{(product.quantity * product.price).toFixed(2)}
                  </span>
                </div>
                <button id='start-new-order'>Start new order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
