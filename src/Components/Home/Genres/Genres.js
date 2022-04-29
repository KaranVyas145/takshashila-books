import React, { Component } from "react";
import Genre from "./Genre/Genre";
import axios from "axios";

class Genres extends Component {
    state = {
        nonfiction: [],
        horror:[],
        scifi:[],
        fantasy:[],
        thriller:[],
        comics:[],
        drama:[],
        romance:[],
        isLoaded: null
    }
  componentDidMount() {
    axios
      .get("https://takshashila-fc0ba-default-rtdb.firebaseio.com/books.json")
      .then((response) => {
        const fetchBooks = [];
        for (let key in response.data) {
          fetchBooks.push({
            ...response.data[key],
            id: key,
          });
        }
        console.log(
          fetchBooks.filter((book) => {
            return book.genre === "nonfiction";
          })
        );
        let nonfictionBooks = fetchBooks.filter((book) => {
          return book.genre === "nonfiction";
        });
        let romanceBooks = fetchBooks.filter((book) => {
            return book.genre === "romance";
          }); 
          let dramaBooks = fetchBooks.filter((book) => {
            return book.genre === "drama";
          }); 
          let horrorBooks = fetchBooks.filter((book) => {
            return book.genre === "horror";
          }); 
          let scifiBooks = fetchBooks.filter((book) => {
            return book.genre === "scifi";
          }); 
          let thrillerBooks = fetchBooks.filter((book) => {
            return book.genre === "thriller";
          }); 
          let comicBooks = fetchBooks.filter((book) => {
            return book.genre === "comics";
          }); 
          let fantasyBooks = fetchBooks.filter((book) => {
            return book.genre === "fantasy";
          }); 
        this.setState({ 
            nonfiction: nonfictionBooks,
            horror:horrorBooks,
            scifi:scifiBooks,
            fantasy:fantasyBooks,
            thriller:thrillerBooks,
            comics:comicBooks,
            drama: dramaBooks,
            romance:romanceBooks,
             isLoaded: 1});

      })

      .catch((error) => {
        console.log(error);
      });
  }
  render() {
      let GenreTags = "";
      if(this.state.isLoaded){
        GenreTags = (
            <div className="Genres">
        <Genre name="Romance" books={this.state.romance} />
        <Genre name="Horror" books={this.state.horror} />
        <Genre name="Sci-fi" books={this.state.scifi} />
        <Genre name="Fantasy" books={this.state.fantasy} />
        <Genre name="Thriller" books={this.state.thriller} />
        <Genre name="Non Fiction" books={this.state.nonfiction} />
        <Genre name="Graphic Novels" books={this.state.comics} />
        
        </div>)
      }
    return GenreTags;
  }
}

export default Genres;
