import React, { useEffect, useState } from "react";
import "./index.css";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../redux/api/apiHandle";
import { Link, useHistory } from "react-router-dom";

const STRIPE_KEY =
  "pk_test_51KmWGfSGIFDQV8rwn9CfCmjRs9VcLPlecOdo5G7bSkqZy0SLTT2TKtv81giujmHxovpzxEF9GgRz048Zu0LEjRK700JCcnQjFV";

function Stripe({ cart, user }) {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/orders", {
          tokenId: stripeToken.id,
          amount: cart.total,
          products: cart.products,
          user: user.currentUser._id,
        });
        history.push("/payment-success", { data: res.data });
      } catch (err) {
        console.log(err);
        alert("Something went Wrong");
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div>
      {user.currentUser ? (
        <StripeCheckout
          name="The Guitar Center"
          image="https://theguitarstore.s3.ap-south-1.amazonaws.com/icon_box.png"
          billingAddress
          shippingAddress
          amount={cart.total * 100}
          token={onToken}
          stripeKey={STRIPE_KEY}
        >
          <button className="stripe_button">CHECKOUT</button>
        </StripeCheckout>
      ) : (
        <Link to="/login">
          <button className="stripe_button">CHECKOUT</button>
        </Link>
      )}
    </div>
  );
}

export default Stripe;
