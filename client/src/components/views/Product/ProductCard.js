import React from "react";
import { Link } from "react-router-dom";
// import { Rating } from "@material-ui/lab";
import ImageSlider from "../../utils/ImageSlider";
import "./Product.css"

const ProductCard = ({ product }) => {
  //   const options = {
  //     value: product.ratings,
  //     readOnly: true,
  //     precision:0.5,
  //   };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      {/* <img src={product.images[0]} alt={product.name} /> */}
      <ImageSlider images={product.images} />

      <p>{product.title}</p>
      {/* <div>
        <Rating {...options} className="productCardSpan"/> <span>({product.numOfReviews} reviews)</span>
      </div> */}
      <span>{`₨ ${product.price} /-`}</span>
    </Link>
  );
};

export default ProductCard;
