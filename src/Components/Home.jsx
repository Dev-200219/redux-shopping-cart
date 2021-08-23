import ProductCard from "./ProductCard";
import "./Home.css"

let Home = ()=>{

    return (
        <div className="product-container">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )

}

export default Home;