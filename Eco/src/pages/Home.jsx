import { getProducts } from "../data/products";

import Productcard from "../components/productcard";
export default function Home() {
    const products = getProducts();
    return (
        <div className="homepage">
         <div className="homehero">
            <h1>Welcome to Shophub</h1>
            <p>Your one-stop shop for all your shopping needs. Explore our wide range of products and enjoy a seamless shopping experience.</p>
        </div>   
            <div className="homecontainer">  
                <h2 className="pagetile" >Our Products</h2>
                <div className="productsgrid">
                    {products.map((product) => (
                        <Productcard key={product.id} product={product} />
                    ))}

                </div>
            </div>
        </div>
    );
}