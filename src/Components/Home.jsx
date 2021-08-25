import ProductCard from "./ProductCard";
import "./Home.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

let Home = () => {
    let state = useSelector(state => state);
    let historyObj = useHistory();
  return (
    <>
      <div className="product-container">
        {
            state.map((el, idx)=>{
                return <ProductCard key={idx} data={el}/>
            })
        }
      </div>

      <div onClick={()=>{
          historyObj.push("/cart");
      }} className="cart-btn">
        <span class="material-icons-outlined">shopping_cart</span>
      </div>
    </>
  );
};

export default Home;
