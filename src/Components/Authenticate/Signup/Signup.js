import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import * as actions from "../../../Store/action/index";
import { connect } from "react-redux";
import { updateObject, checkValidity } from "../../../shared/Utility";
import Input from "../../Input/Input";
import { Redirect } from "react-router";
import "../../../shared/button.css"

class Signup extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email Address",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  inputChangedHandler = (event, controlName) => {
    const UpdatedControls = updateObject(this.state.controls, {
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    });
    this.setState({ controls: UpdatedControls });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
    );
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
      />
    ));
    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if(this.props.isAuthenticated){
      authRedirect= <Redirect to="/" />
    }

    return (
      <div className="Signup">
        {authRedirect}
        <h1>Sign up</h1>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          {/* <input type="submit" value="Submit"/> */}
          <button type="submit" class="custom-btn btn-3"><span>Sign Up</span></ button>
        </form>
        <NavLink to="/auth/login">Already have an account?</NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password) => dispatch(actions.authSignup(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
