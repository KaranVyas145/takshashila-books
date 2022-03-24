import React, { Component } from "react";
import "./App.css";
import * as actions from "./Store/action/index";

import { connect } from "react-redux";
import Signin from "./Components/Authenticate/SignIn/Signin";
import Signup from "./Components/Authenticate/Signup/Signup";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation/Navigation";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Authenticate from "./Components/Authenticate/Authenticate";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={Authenticate} />
        <Route path="/auth/login" component={Signin} />
        <Route path="/auth/signup" component={Signup} />
        <Redirect to="/auth/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" exact component={Authenticate} />
          <Route path="/auth/login" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      );
    }

    return (
      <div>
        <Navigation />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
