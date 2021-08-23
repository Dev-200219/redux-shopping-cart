import "./ProductCard.css";

let ProductCard = ()=>{
    return(<div className="product-card">
        <div className="product-img">
            <img src="https://m.media-amazon.com/images/I/61fy+u9uqPL._SL1500_.jpg" alt="some-product" />
        </div>
        <div className="product-btn">
            <button>Add to Cart</button>
        </div>
        </div>
    )
}

export default ProductCard;