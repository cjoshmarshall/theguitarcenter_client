import React, { useEffect, useState } from "react";
import "./index.css";
import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { login } from "../../redux/api/userApi";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isFetching, error } = useSelector((state) => state.user);

  const user = useSelector((state) => state.currentUser);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Announcement />
      <Header />
      <div className="login">
        <h1 className="login_title">LOG IN</h1>
        <p className="login_description">
          If you have not logged in for awhile or are having trouble logging in
          to renew, use the "Forgot Password" link below to request a password
          reset.
        </p>
        <form className="login_container">
          <div className="login_subcontainer">
            {error && (
              <div className="login_error">Email or Password is wrong</div>
            )}
            <label className="login_label">Email</label>
            <input
              className="login_input"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="login_label">Password</label>
            <input
              className="login_input"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login_button" onClick={handleLogin}>
              {isFetching ? (
                <div className="login_loader"></div>
              ) : (
                <div>LOGIN</div>
              )}
            </button>
            <div>
              <p>FORGOT PASSWORD?</p>
              <Link to="/signup">
                <p>Create New Account</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Login;
