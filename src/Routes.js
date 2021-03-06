import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import Shoes from "./Pages/ProductList/Shoes/Shoes";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import InstaModal from "./Pages/Main/Components/Instagram/InstaModal";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/category/:id" component={Shoes} />
          <Route exact path="/search/:id" component={Shoes} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/modal" component={InstaModal} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
