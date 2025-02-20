import React, { Component } from "react";
import Slider from "react-slick";

import "../style.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: "images/cd.png",
    title: "Rainbow CD",
  },

  {
    image: "images/simsCloud.png",
    title: "Sims CD",
  },

  {
    image: "images/simsLove.png",
    title: "Love CD",
  },
];

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-7xl  mx-auto border border-yellow-200">
        <Slider>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="p-4 w-40 bg-red-300 flex items-center justify-center">
                  <p className="text-black">{item.title}</p>
                </div>

                <div>
                  <img src={item.image} className="w-52 h-52 object-contain" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CenterMode;
