import React, { Component } from "react";
import "./App.css";
import * as actions from "./Store/action/index";

import { connect } from "react-redux";
import Signin from "./Components/Authenticate/SignIn/Signin";
import Signup from "./Components/Authenticate/Signup/Signup";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation/Navigation";
import Logout from "./Components/Authenticate/Logout/Logout";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Authenticate from "./Components/Authenticate/Authenticate";
import Admin from "./Components/Admin/Admin";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/auth" exact component={Authenticate} />
        <Route path="/auth/login" component={Signin} />
        <Route path="/auth/signup" component={Signup} />
        {/* <Route path="/admin" component={Admin} /> */}
        <Redirect to="/auth/login" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/auth" exact component={Authenticate} />
          <Route path="/auth/login" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/logout" component={Logout} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      );

      console.log(this.props.isAdmin);

      if(this.props.isAdmin){
        routes=(
          <Switch>
          <Route path="/auth" exact component={Authenticate} />
          <Route path="/auth/login" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
          <Route path="/auth/logout" component={Logout} />
          <Route path="/admin" component={Admin} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        )
      }
      console.log(routes);
    }

    return (
      <div>
        <Navigation isAuthenticated={this.props.isAuthenticated} isAdmin={this.props.isAdmin} />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    isAdmin: state.auth.userId === "EwXgiewGTQeWtcUNUsosKOB6jd43"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
