import { Link } from "react-router-dom";
export default function Productcard({ product })
{
return(
    <div className="product-card">
                            <img src={product.image} alt={product.name} className="productimage" />
                            <div className="productcontent">
                                   <h3 className="productname">{product.name}</h3>
                            <p className="productprice">${product.price.toFixed(2)}</p>
                            <div className="product-card-action">
                            <Link className="btn-secondary">
                                View Details
                            </Link>
                            <button className="btn-primary">Add to Cart</button>
                            </div></div>


    </div>)
}