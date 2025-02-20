// here i'll just make my own custom carousel cause omfg fr

// lowkey looks like i'm def gonna need useState and useEffect for this p
import { useState } from "react";

const Carousel = () => {
  // state management to keep track of the index //
  const [activeIndex, setActiveIndex] = useState(1);

  const data = [
    // tbh I'm not entirely sure if i'm gonna use id or not...I might
    {
      id: 1,
      image: "images/cd.png",
      title: "Rainbow CD",
    },

    {
      id: 2,
      image: "images/simsCloud.png",
      title: "Sims CD",
    },

    {
      id: 3,
      image: "images/simsLove.png",
      title: "Love CD",
    },
  ];

  // next button logic
  // when a user clicks on the next button, they go to the next item in the list
  const nextBtn = () => {
    // lowkey review how modulo arithmetic works heyy number theory
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length); // modulo helps when you are clicking thru and reach the end of the list so you get back to 0
  };

  // previous button logic
  const prevBtn = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length); // handles when you click prev when the first item is active
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 border">

      {/* // this is the slide container */}
      <div className="w-full max-w-7xl h-[400px] flex flex-row items-center justify-center relative border border-red-200"> 
        <button
          onClick={prevBtn}
          className="z-[2] absolute left-1/3 font-vcr text-loveBlue text-5xl p-4"
        >
          &lt;
        </button>
        <button
          onClick={nextBtn}
          className="z-[2] absolute right-1/3 font-vcr text-loveBlue text-5xl p-4"
        >
          &gt;
        </button>



        {data.map((item, index) => {
          // if i'm using {item.id} I can allegedly omit the index here since I don't need it
          return (
            <div
              key={index} // what if I used {item.id} here instead?
              className="relative flex flex-col items-center gap-4 w-full h-full snap-center" // container for the title & the CDs
            >
              {/* // container for the respective titles */}
              <div
                className={`p-4 w-full flex items-center justify-center transition-all duration-300 font-serif
                  ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              >
                <p className="text-white text-lg">{item.title}</p>
              </div>

              {/* // container for the CDs */}
              <div
                className={`flex items-center justify-center cursor-pointer transition-all duration-300
              ${index === activeIndex ? "scale-125" : "opacity-50"}`}
                // we click a disc and it becomes active
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.image} className="w-64 h-64 object-contain" />
              </div>
            </div>
          );
        })}

        {/* carousel dot indicators */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-loveBlue" : "bg-gray-700"
              }`}
            />
          ))}
        </div> */}

        <div className="absolute bottom-0 space-x-2">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-loveBlue" : "bg-gray-700"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


// so far 
// the main missing piece to create the smooth sliding effect 
//is animating the carousel items when you change the activeIndex.






