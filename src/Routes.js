import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Shoes from "./Pages/ProductList/Shoes/Shoes";
import Nav from "./Components/Nav/Nav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/productDetail/:id" component={ProductDetail} />
          <Route exact path="/category/shoes" component={Shoes} />
          <Route exact path="/category/shoes/:id" component={Shoes} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
