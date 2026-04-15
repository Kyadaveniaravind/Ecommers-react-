import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import { useState, useEffect } from "react";
import { getProductById } from "../data/products";
import { useCart } from "../context/Cartcontext";

export default function ProductDetails() {
    const { addToCart ,cartItems} = useCart();
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {   
        const fetchedProduct = getProductById(id);
        
        if (!fetchedProduct) {
            // Redirect if product ID doesn't exist
            navigate("/");
            return; 
        }
        setProduct(fetchedProduct);
    }, [id, navigate]);

    if (!product) {
        return <div className="loading">Loading...</div>;
    }
     const productInCart = cartItems.find(item => item.id === product.id);
     const productQuntitylabel = productInCart ? ` (${productInCart.quantity})` : '';

    return (
        <div className="page">
            <div className="container">
                <div className="productdetails">
                    <div className="productdetails-image">
                        {/* Fixed: Use curly braces for variables */}
                        <img src={product.image} alt={product.name} />
                    </div>
                    
                    <div className="productdetails-info">
                        <h1>{product.name}</h1>
                        <p className="price">${product.price}</p>
                        <p className="description">{product.description}</p>
                        <button className="btn-primary" onClick={() => addToCart(product.id)}>
                            Add to Cart{productQuntitylabel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}