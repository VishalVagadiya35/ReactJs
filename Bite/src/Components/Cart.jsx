import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    // Check if the user is logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            navigate('/account'); // Redirect to login page if not logged in
        }
    }, [navigate]);

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity, 0
    );

    const handleCheckout = () => {
        clearCart(); // Clear the cart on checkout
        navigate('/'); // Redirect to home page
    };

    return (
        <div className="cart-page">
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <p className="empty-cart-message">Your cart is empty.</p>
                ) : (
                    <ul className="cart-items-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{item.name}</h3>
                                    <p className="cart-item-price">${parseFloat(item.price).toFixed(2)}</p>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Payment Method UI */}
            <div className="payment-container">
                <h3>Payment Methods</h3>
                <form className="payment-form">
                    <label>
                        <input type="radio" name="paymentMethod" value="creditCard" defaultChecked /> Credit Card
                    </label>
                    <div className="payment-details">
                        <input type="text" placeholder="Card Number" className="payment-input" />
                        <input type="text" placeholder="Name on Card" className="payment-input" />
                        <input type="text" placeholder="Expiration Date (MM/YY)" className="payment-input" />
                        <input type="text" placeholder="CVV" className="payment-input" />
                    </div>
                    <label>
                        <input type="radio" name="paymentMethod" value="paypal" /> PayPal
                    </label>
                    <div className="payment-details">
                        <p>Click to proceed with PayPal</p>
                    </div>
                </form>
                <div className="cart-total">
                    <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                </div>
                <button className="payment-btn" onClick={handleCheckout}>Pay Now</button>
            </div>
        </div>
    );
}

export default Cart;
