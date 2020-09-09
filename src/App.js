import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import Services from "./Page/Services";
import SignUp from "./Page/SignUp";
import Products from "./Page/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
