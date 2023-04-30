import { useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <h1>welcome to the product page</h1>

      <div className="imagediv">
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="image not found"
          className="image"
        ></img>
        <div className="ratingdiv">
          <h2 className="ratings">Ratings and reviews</h2>
          <h3> smith</h3>
          <h5>Rating 4 out of 5</h5>
          <p className="para">I loved the product </p>

          <div>
            <h3> john</h3>
            <h5>Rating 3 out of 5</h5>
            <p className="para">superb </p>
          </div>

          <div>
            <h3> david</h3>
            <h5>Rating 3 out of 5</h5>
            <p className="para">excellent product love everything </p>
          </div>

          <div>
            <h3>warner</h3>
            <h5>Rating 3 out of 5</h5>
            <p className="para">outstanding product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
