import React, {useState} from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./imageSliders.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// const images = [
//   { url: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
//   { url: "https://images.unsplash.com/photo-1613431812949-77b3351bb23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
//   { url: "https://images.unsplash.com/photo-1520190282873-afe1285c9a2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hbGwlMjBzaXplfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
// ];

const App = () => {
  const [source, setSource]= useState("https://source.unsplash.com/random/1600x900/?books")
  return (
    <div className="ImageSliders">
      <Carousel
        showArrows={true}
        autoPlay={true}
        swipeable={true}
        infiniteLoop={true}
        showThumbs={false}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src={source} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1600x900/?book"/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://source.unsplash.com/random/1600x900/?read"
           />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default App;