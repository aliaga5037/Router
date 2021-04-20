import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Nav from "./nav";
import ShopDetail from "./pages/shop/details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/:slug" component={ShopDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
