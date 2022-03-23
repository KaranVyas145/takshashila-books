import React from "react";
import Genre from "./Genre/Genre";

const Genres = ()=>{
    return (
        <div className="Genres">
            <Genre name="Horror"/>
            <Genre name="Sci-fi"/>
            <Genre name="Fantasy"/>
            <Genre name="Thriller"/>
            <Genre name="Non Fiction"/>
            <Genre name="Graphic Novels"/>
        </div>
    )
}

export default Genres;