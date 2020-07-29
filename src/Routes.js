import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import Shoes from "./Pages/ProductList/Shoes/Shoes";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/product/detail/:id" component={ProductDetail} />
          <Route exact path="/category/shoes" component={Shoes} />
          <Route exact path="/category/shoes/:id" component={Shoes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
