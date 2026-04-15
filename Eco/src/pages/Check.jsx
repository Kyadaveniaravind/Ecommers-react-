import React from "react";
import { useCart } from "../context/Cartcontext";

export default function Check() {
    const { getCartItemsWithProducts, getCartTotal } = useCart();
    const items = getCartItemsWithProducts();

    return (
        <div className="page">
            <div className="container">
                <h1 className="title">Checkout</h1>
                <div className="checkout-grid">
                    {/* Left Side: Items List */}
                    <div className="checkout-items-section">
                        <h2>Your Items</h2>
                        {items.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="checkout-item">
                                    <img 
                                        src={item.product.image} 
                                        alt={item.product.name} 
                                        className="checkout-item-image" 
                                    />
                                    <div className="item-details">
                                        <h3>{item.product.name}</h3>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className="item-price">Price: ${item.product.price.toFixed(2)}</p>
                                    </div>
                                    <div className="item-subtotal">
                                        <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Right Side: Summary Card */}
                    <div className="order-summary-card">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span className="free-shipping">FREE</span>
                        </div>
                        <hr />
                        <div className="summary-row total-row">
                            <strong>Total Amount</strong>
                            <strong>${getCartTotal().toFixed(2)}</strong>
                        </div>
                        <button className="place-order-btn" disabled={items.length === 0}>
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}