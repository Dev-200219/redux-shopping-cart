import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCreator } from "../Redux/actions";
import "./Preview.css";

let Preview = () => {
  let { id } = useParams();
  let dispatch = useDispatch();

  let reqProduct = useSelector((state) => {
    return state[id];
  });

  return (
    <>
      <div className="preview-container">
        <div className="preview-img">
          <img src={reqProduct.img} alt="some-item" />
        </div>

        <div className="preview-listing">
          <h2>{reqProduct.name}</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ullam eius explicabo voluptatibus ratione assumenda deserunt harum
            ad sit corporis quasi laudantium quam, et eaque asperiores quae
            soluta, inventore debitis, recusandae blanditiis ab molestiae
            cupiditate. Vel sed minus facilis ipsa magni provident delectus
            sapiente laboriosam porro quod necessitatibus fuga iure cum dolorum
            quo, dolor earum possimus a laudantium, libero commodi consectetur!
            Animi cupiditate porro a fugit explicabo, nostrum aperiam ea,
            placeat doloremque reprehenderit molestiae aliquam quo est accusamus
            impedit eius id sunt temporibus minus sint tenetur repellendus ut?
            Laudantium dicta esse suscipit adipisci, explicabo aliquid id veniam
            asperiores! Totam, eos!
          </p>

          <button
            onClick={() => {
              dispatch(addCreator(id));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Preview;
