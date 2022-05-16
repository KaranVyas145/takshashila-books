import React, { Component } from "react";
import { updateObject, checkValidity } from "../../shared/Utility";
import Input from "../Input/Input";
import "../../shared/button.css";
import "./Contact.css"

class Contact extends Component {
  state = {
    controls: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Full Name",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email ID",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Message",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
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
    return (
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form >
          {form}
          <br/>
          <button type="submit" class="custom-btn btn-3"><span>Submit</span></ button>
        </form>
      </div>
    );
  }
}

export default Contact;
