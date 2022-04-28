import Home from "./pages/Home.js"
import Product from "./pages/Product.js";
import ProductsPage from "./pages/ProductsPage.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Cart from "./pages/Cart.js";
import Orders from "./pages/Orders.js";
import PaymentSuccess from "./pages/PaymentSuccess.js";
import Error from "./pages/Error.js";
import { BrowserRouter, Redirect, Route , Switch } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
    const user=useSelector((state)=>state.user.currentUser)
    
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/guitars/" exact><ProductsPage /></Route>
        <Route path="/guitars/:id"><Product /></Route>
        <Route path="/login">{user?<Redirect to="/" />:<Login />}</Route>
        <Route path="/signup">{user?<Redirect to="/" />:<Signup />}</Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/orders">{user?<Orders />:<Redirect to="/login" />}</Route>
        <Route path="/payment-success">{user?<PaymentSuccess />:<Redirect to="/login" />}</Route>
        <Route path="*"><Error /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
