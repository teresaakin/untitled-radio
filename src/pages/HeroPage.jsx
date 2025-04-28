// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "../components/AboutModal";
import TimeAndWeather from "../TimeAndWeather";

const HeroPage = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    // outer container with full height and hidden overflow
    <div className="relative h-screen flex flex-col overflow-hidden ">
      {/* hero section */}

      {/* top left section with location & time data*/}

      {/* top bar section for hero page */}
      <div className="flex items-center justify-between mt-12 w-full h-12">
        {/* <div className="font-mono text-loveBlue tracking-widest ml-8">
          + TORONTO CANADA + 00:00 <br />
          37 DEGREES
        </div> */}
        <TimeAndWeather />
        <div className="mr-8">
          <AboutModal />
        </div>
      </div>

      {/* main content of the hero section NEED TO TWEAK THIS EVENTUALLY*/} 
      <div className="flex mt-32 flex-col items-center justify-center ">
        {/* logo */}
        <h1>
          <span className="font-playground font-medium text-9xl">Fly</span>
          <span className="font-serif text-9xl">Radio</span>
        </h1>

        {/* tagline */}
        <h3 className="my-4 font-serif text-xl font-normal text-center">
          Discover hidden gems in music, one track at a time, with <br />
          Fly Radio.
        </h3>
        {/* start listening button */}
        <button
          className="px-4 py-2 rounded-md bg-loveBlue text-black font-serif" // just add "animate-pulseButton" back
          onClick={() => navigate("/HomePage")}
        >
          START LISTENING
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
