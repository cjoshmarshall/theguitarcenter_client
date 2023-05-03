import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "../../components/Header";
import Announcement from "../../components/Announcement";
import Component2 from "../../components/Specifications";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../redux/api/apiHandle";

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleQuantity = (type) => {
    if (type === "increment" && quantity < 5) {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  useEffect(() => {
    const getGuitars = async () => {
      try {
        const res = await publicRequest.get(`/guitars/find/${id}`, {
          headers: { "Content-Type": "application/json" },
        });
        setProduct(res.data);
      } catch (err) {}
    };
    getGuitars();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Announcement />
      <div className="product_container">
        <div className="product_imageContainer">
          <img src={product.image} alt=" " />
        </div>
        <div className="product_infoContainer">
          <h1 className="product_infoTitle">{product.title}</h1>
          <h2 className="product_infoTitle">{product.series}</h2>
          <h1 className="product_infoPrice">${product.price}</h1>
          <p className="product_infoDescription">{product.description}</p>
          <div className="product_infoButtons">
            <button
              className="product_infoNoButton"
              onClick={() => handleQuantity("decrement")}
            >
              -
            </button>
            <p className="product_infoNo">{quantity}</p>
            <button
              className="product_infoNoButton"
              onClick={() => handleQuantity("increment")}
            >
              +
            </button>
            <button className="product_infoButton" onClick={handleSubmit}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Component2 />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Product;
