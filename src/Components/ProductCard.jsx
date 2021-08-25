import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCreator } from "../Redux/actions";
import "./ProductCard.css";

let ProductCard = (props) => {
  let historyObj = useHistory();
  let dispatch = useDispatch();

  return (
    <div className="product-card">
      <div
        onClick={() => {
          historyObj.push(`/preview/${props.data.id}`);
        }}
        className="product-img"
      >
        <img src={props.data.img} alt="some-product" />
      </div>

      <div className="product-btn">
        <button onClick={()=>{
            dispatch(addCreator(props.data.id));
        }}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
