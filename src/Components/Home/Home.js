import React from "react";
import Navigation from './Navigation/Navigation';
import ImageSliders from './ImageSliders/ImageSliders';
import Genres from "./Genres/Genres"

const Home = ()=>{
    return (
        <header>
        {/* <Navigation/> */}
        <ImageSliders/>
        <Genres/>
      </header>
    )
}

export default Home;