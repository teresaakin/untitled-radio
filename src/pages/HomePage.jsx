// holds the vinyl carousel
// now playing component
import AboutModal from "../components/AboutModal";
import TimeAndWeather from "../TimeAndWeather";
import "../style.css";


// import Carousel from "../components/Carousel";

import Carousel2 from "../components/Carousel2";

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Header section */}
      {/* <div className="absolute  w-full p-4 z-10 border border-purple-300"> */}
      <div className="absolute w-full flex items-center justify-between py-12">
        {/* <div className="font-mono text-loveBlue tracking-widest flex-start ml-8">
          + TORONTO CANADA + 00:00 <br />
          37 DEGREES
        </div> */}
        <TimeAndWeather />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                <h2 className="relative">
          {/* // can also make the fonts equal */}
          <span className="font-playground relative top-[-22px] mr-[2px] text-2xl">
            Fly
          </span>
          <span className="font-serif text-3xl">Radio</span>
        </h2>
        </div>
  

        <div className="mr-8">
          {/* about modal */}
          <AboutModal />
        </div>
      </div>
      <Carousel2 />
    </div>
  );
};

export default HomePage;
