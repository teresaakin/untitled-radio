// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutModal from "../components/AboutModal";

// const HeroPage = () => {
//   const navigate = useNavigate(); // hook for navigation

//   // create a state variable to control the visibility of the about section
//   // initially set to false (about section hidden)
//   const [isAboutVisible, setIsAboutVisible] = useState(false);

//   // function to toggle the about section's visibility
//   // when called, it flips the current state between true and false
//   const toggleAboutSection = () => {
//     setIsAboutVisible(!isAboutVisible);
//   };

//   return (
//     // outer container with full height and hidden overflow
//     // allows for smooth transitions between sections
//     <div className="relative h-screen flex flex-col overflow-hidden">
//       {/* hero section */}

//       {/* top left section with location & time data*/}
//       <div className="p-8 top-8 left-3 font-mono text-loveBlue ">
//       + TORONTO CANADA + 00:00 <br></br>
//       37 DEGREES
//       </div>
//       <div
//         className={`absolute inset-0 flex flex-col transition-all duration-500
//         ${isAboutVisible ? "opacity-30 scale-95" : "opacity-100"}
//         `}
//       >
//         {/* top right section with About button */}
//         <div className="flex justify-end p-4">
//           <button
//             className="font-serif mr-8 mt-2 rounded-md text-loveBlue bg-transparent border border-loveBlue py-2 px-4" onClick={toggleAboutSection}>
//             ABOUT
//           </button>
//         </div>

//         {/* main content of the hero section */}
//         <div className="flex-1 flex flex-col items-center justify-center">
//           {/* logo */}
//           <h1>
//             <span className="font-playground font-medium text-9xl">Fly</span>
//             <span className="font-serif text-9xl">Radio</span>
//           </h1>

//           {/* tagline */}
//           <h3 className="my-4 font-serif text-xl font-normal text-center">Discover hidden gems in music, one track at a time, with <br></br>
//           Fly Radio.</h3>
//           {/* start listening button */}
//           <button
//             className="px-4 py-2 rounded-md bg-loveBlue text-black font-serif" // just add "animate-pulseButton" back
//             onClick={() => navigate("/HomePage")}
//           >
//             START LISTENING
//           </button>
//         </div>
//       </div>

//       {/* about section */}
//       <div
//         className={`absolute inset-0 bg-white transform transition-all duration-500
//         ${
//           isAboutVisible
//             ? "translate-y-0" // When visible, slide to 0 position (on screen)
//             : "translate-y-full"
//         } // When hidden, slide down fully off-screen
//         flex flex-col items-center justify-center p-8`}
//       >
//         <About onClose={toggleAboutSection} />
//       </div>
//     </div>
//   );
// };

const HeroPage = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    // outer container with full height and hidden overflow
    // allows for smooth transitions between sections
    <div className="relative h-screen flex flex-col overflow-hidden">
      {/* hero section */}

      {/* top left section with location & time data*/}

      <div className="font-mono text-loveBlue tracking-widest absolute top-12 left-16">
        + TORONTO CANADA + 00:00 <br />
        37 DEGREES
      </div>

      {/* top right section with About button */}
      {/* <button 
                onClick={() => setIsOpen(true)}
                className="font-serif rounded-md py-1 px-4 text-loveBlue bg-transparent border border-loveBlue absolute top-12 right-16">
            ABOUT
          </button> */}
      <AboutModal />

      {/* main content of the hero section */}
      <div className="flex-1 flex flex-col items-center justify-center">
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
