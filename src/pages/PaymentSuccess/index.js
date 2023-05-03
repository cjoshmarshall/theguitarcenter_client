import React from "react";
import "./index.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function PaymentSuccess() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const timeout = setTimeout(() => {
    dispatch(resetCart(cart));
    window.location.href = "/orders";
  }, 1000);

  return (
    <div className="paymentsuccess">
      <div className="paymentsuccess_iconContainer">
        <CheckCircleOutlineIcon
          className="paymentsuccess_icon"
          fontSize="inherit"
        />
      </div>
      <p className="paymentsuccess_description">
        Payment PaymentSuccess. Redirecting to The Guitar Store
      </p>
    </div>
  );
}

export default PaymentSuccess;
