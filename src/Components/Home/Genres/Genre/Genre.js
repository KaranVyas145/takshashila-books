import React from "react";
import "./Genre.css";
import Book from "../../../Book/Book";

const Genre = (props) => {
  let bookTags = [];
  props.books.forEach(book => {
    bookTags.push(<Book imageLink={book.Image} downloadLink={book.BookLink} />)
  });
  // console.log(props.books[0].Image);
  return (
    <div className="Genre">
      <h3> {props.name} </h3>
      <div className="BookContainer">
        {bookTags}
      </div>
    </div>
  );
};

export default Genre;
