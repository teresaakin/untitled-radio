import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";

const HeroPage = () => {
  const navigate = useNavigate(); // hook for navigation

  // create a state variable to control the visibilit of the about section
  // initially set to false (about section hidden)
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // function to toggle the about section's visibility
  // when called, it flips the current state between true and false
  const toggleAboutSection = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    // outer container with full height and hidden overflow
    // allows for smooth transitions between sections
    <div className="relative h-screen flex flex-col overflow-hidden">
      {/* hero section */}
      <div
        className={`absolute inset-0 flex flex-col transition-all duration-500 
        ${isAboutVisible ? "opacity-30 scale-95" : "opacity-100"}
        `}
      >
        {/* top right section with About button */}
        <div className="flex justify-end p-4">
          <button className="font-mono mr-8 mt-2" onClick={toggleAboutSection}>
            ABOUT
          </button>
        </div>

        {/* main content of the hero section */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* logo */}
          <h1>
            <span className="font-playground font-medium text-9xl">Fly</span>
            <span className="font-serif text-9xl">Radio</span>
          </h1>

          {/* start listening button */}
          <button
            className="px-4 py-2 rounded-md bg-customBlue text-white mb-10 mt-4 animate-pulseButton"
            onClick={() => navigate("/HomePage")}
          >
            Start Listening
          </button>
          {/* tagline */}
          <h3 className="my-10">Discover Hidden Gems in Music.</h3>
        </div>
      </div>

      {/* about section */}
      <div
        className={`absolute inset-0 bg-white transform transition-all duration-500 
        ${
          isAboutVisible
            ? "translate-y-0" // When visible, slide to 0 position (on screen)
            : "translate-y-full"
        } // When hidden, slide down fully off-screen
        flex flex-col items-center justify-center p-8`}
      >
        <About onClose={toggleAboutSection} />
      </div>
    </div>
  );
};

export default HeroPage;
