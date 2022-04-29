import React from "react";
import "./Book.css";

const Book = (props) => {
  return (
    <div className="Book">
      <a href={props.downloadLink} target="_blank">
        <img src={props.imageLink} />
      </a>
    </div>
  );
};
export default Book;
