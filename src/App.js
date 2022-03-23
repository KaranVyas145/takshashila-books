import React, { Component } from "react";
import "./App.css";

import Signin from "./Components/Authenticate/SignIn/Signin";
import Signup from "./Components/Authenticate/Signup/Signup";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Authenticate from "./Components/Authenticate/Authenticate";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/auth" exact component={Authenticate} />
          <Route path="/auth/login" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
