import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Shoes from "./Pages/ProductList/Shoes/Shoes";
import SignUp from "./Pages/SignUp/SignUp";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/productDetail" component={ProductDetail} />
          <Route exact path="/category/shoes" component={Shoes} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
