import React from "react";
import "./Genre.css";
import Book from "../../../Book/Book";

const Genre = (props) => {
  return (
    <div className="Genre">
      <h3> {props.name} </h3>
      <div className="BookContainer">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default Genre;
