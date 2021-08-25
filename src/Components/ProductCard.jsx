import { useHistory } from "react-router-dom";
import "./ProductCard.css";

let ProductCard = (props)=>{

    let historyObj = useHistory();

    return(<div className="product-card">

        <div  
         onClick={()=>{
            historyObj.push(`/preview/${props.data.id}`)
            }} 
        className="product-img">
            <img src={props.data.img} alt="some-product" />
        </div>

        <div className="product-btn">
            <button>Add to Cart</button>
        </div>
        </div>
    )
}

export default ProductCard;