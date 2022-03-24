import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
// import { useForm } from "react-hook-form";
import * as actions from "../../../Store/action/index";
import { connect } from "react-redux";
import { updateObject, checkValidity } from "../../../shared/Utility";
import Input from "../../Input/Input";

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

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data.email, data.password);
  // };
  // console.log(watch("email"));
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

    return (
      <div className="Signup">
        <h1>Sign up</h1>
        {errorMessage}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            {...register("email", {
              required: "Enter a valid email id",
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
          />
          <p> {errors.email && <span>{errors.email.message}</span>} </p>
          <br></br>
          <input
            type="password"
            {...register("password", {
              required: "Invalid Password",
              minLength: 6,
            })}
          />
          <p> {errors.password && <span>{errors.password.message}</span>} </p>
          <br />
          <input type="submit" />
        </form> */}
        <form onSubmit={this.submitHandler}>
          {form}
          <input type="submit" value="Submit"/>
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
