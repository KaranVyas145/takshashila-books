import React, { useState } from "react";
import "./imageSliders.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const App = () => {
  const [source, setSource] = useState(
    "https://source.unsplash.com/random/1600x900/?books"
  );
  return (
    <div className="container">
      <div className="ImageSliders">
        <Carousel
          showArrows={true}
          autoPlay={true}
          swipeable={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src={source} />
            <p className="legend1">
              Choose from a wide collection of books from various Genres
            </p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random/1600x900/?book" />
            <p className="legend1">
              Read your books anywhere, anytime and anyplace
            </p>
          </div>
          <div>
            <img src="https://source.unsplash.com/random/1600x900/?read" />
            <p className="legend1">
              Romance, Horror, Sci-fi, Fantasy and many more...
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
