import React, { Component } from "react";
import Header from "./containers/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
          <Route path="/" exact element={<ProductListing/>}/>
          <Route path="/product/:productId" exact element={<ProductDetail/>} />
          <Route>404 Not Found</Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
