import axios from "axios";
import React, { Component } from "react";
import { updateObject, checkValidity } from "../../shared/Utility";
import Input from "../Input/Input";

class Admin extends Component {
  componentDidMount(){
    axios.get("https://takshashila-fc0ba-default-rtdb.firebaseio.com/books.json").then(response=>{
      const fetchBooks = [];
      for(let key in response.data){
        fetchBooks.push({
          ...response.data[key],
          id:key
        })
      }
      console.log(fetchBooks[0].BookLink);
    }).catch(error=>{
      console.log(error);
    })
  }
  state = {
    controls: {
      bookName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Book Name",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      Author: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Author",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      Image: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Image Link",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      BookLink: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Book Link",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      Description: {
        elementType: "textarea",
        elementConfig: {
          type: "text",
          placeholder: "Description",
        },
        value: "",
        validation: {
          required: true,
          isText: true,
        },
        valid: false,
        touched: false,
      },
      genre: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "drama", displayValue: "Drama" },
            { value: "romance", displayValue: "Romance" },
            { value: "fantasy", displayValue: "Fantasy" },
            { value: "horror", displayValue: "Horror" },
            { value: "scifi", displayValue: "Sci-fi" },
            { value: "thriller", displayValue: "Thriller" },
            { value: "nonfiction", displayValue: "Non Fiction" },
            { value: "comics", displayValue: "Graphic Novels" }
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
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

  submitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.controls) {
      formData[formElementIdentifier] =
        this.state.controls[formElementIdentifier].value;
    }
    console.log(formData);
    axios.post("https://takshashila-fc0ba-default-rtdb.firebaseio.com/books.json",formData).then(response=>{
      console.log(response);
    }).catch(error=>{
      console.log(error);
    })
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
    return (
      <div className="Signup">
        <h1>Admin</h1>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Admin;
