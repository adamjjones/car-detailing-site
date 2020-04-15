import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const car_images = ["../img/ss.jpg", "../img/guide-to-car-detailing-like-a-pro-cover.jpg"]

const HomePage = () => {
  return (
    <div>
      <Carousel
        width="480px"
        showThumbs={true}>
        {
          car_images.map(c => {
            return (
              <div key={"key"}>
                <img src={c} key={c} alt="" />
                <p>It works!!</p>
              </div>
            )
          })
        }
      </Carousel>
      <img src="/img/ss.jpg" />
    </div>
  );
}

export default HomePage;