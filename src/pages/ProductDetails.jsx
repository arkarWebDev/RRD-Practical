import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>ProductDetailsPage</h1>
      <h1>Product title - {title}</h1>
      <button onClick={navigateHandler}>Go Back to products</button>
    </>
  );
};

export default ProductDetails;
