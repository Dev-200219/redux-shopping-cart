import { useDispatch, useSelector } from "react-redux";
import { remCreator } from "../Redux/actions";
import "./Cart.css";

let Cart = () => {
  let cartList = useSelector((state) => {
    let filterdCartList = state.filter((el) => {
      return el.qty > 0;
    });

    return filterdCartList;
  });

  let dispatch = useDispatch();

  let totalAmount = 0;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((el, index) => {
            let amount = el.qty * el.price;
            totalAmount += amount;
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{el.name}</td>
                <td>Rs. {el.price}</td>
                <td>{el.qty}</td>
                <td>Rs. {amount}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(remCreator(el.id));
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Rs. {totalAmount}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cart;
