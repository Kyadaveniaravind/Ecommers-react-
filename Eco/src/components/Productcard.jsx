import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext";

export default function ProductCard({ product }) {
    // Safety check: if product isn't passed, don't render anything
     const { addToCart ,cartItems} = useCart();
     const productInCart = cartItems.find(item => item.id === product.id);
     const productQuntitylabel = productInCart ? ` (${productInCart.quantity})` : '';
    if (!product) return null;

    return (
        <div className="product-card">
            <img 
                src={product.image} 
                alt={product.name} 
                className="productimage" 
            />
            <div className="productcontent">
                <h3 className="productname">{product.name}</h3>
                <p className="productprice">
                    ${(product.price || 0).toFixed(2)}
                </p>
                
                <div className="product-card-action">
                    <Link className="btn-secondary" to={`/products/${product.id}`}>
                        View Details
                    </Link>
                    <button className="btn-primary"  onClick={() => addToCart(product.id)}>Add to Cart{productQuntitylabel}</button>
                </div>
            </div>
        </div>
    );
}