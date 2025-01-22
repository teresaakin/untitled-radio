import { useState } from "react";

// about modal overlay component

// // define the about component, accepting an onClose prop
// const About = ({ onClose }) => {
//   return (
//     <div className="relative w-full h-full flex items-center justify-center mx-auto text-center p-6">
//       {/* close button */}
//       <button
//       className="absolute top-6 left-6 text-black font-mono"
//       onClick={onClose}>
//         BACK
//       </button>

//       {/* content container */}
//       <div className="w-full max-w-lg">
//         <h2 className="mb-6 text-black text-xl">
//           <span className="font-playground">Fly</span>
//           <span className="font-serif">Radio</span>
//         </h2>

//         {/* main content */}
//         <div>
//           <h3 className="font-serif mb-6 text-black text-6xl">Welcome to Fly Radio!</h3>
//           <p className="mt-4  text-black text-m leading-relaxed">
//             Listen to curated playlists filled with underrated artists and
//             tracks. Join me as I share these tracks and explore new sounds. Tune
//             in and find gems to listen to today!
//           </p>
//           <footer className="mt-10 text-gray-500 text-xs">
//             &copy; Fly Engineering — {new Date().getFullYear()}
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// };

// about modal overlay component

const AboutModal = () => {
  // this creates our open/close state
  const [isOpen, setIsOpen] = useState(false); // false is the starting value (modal starts closed and isOpen = no so false ;)
  // isOpen is the current state (true/false)
  // setIsOpen is a function we use to change isOpen

  return (
    // a parent container needs to wrap content in the return always
    <>
      {/* top right section with About button */}
      <button
        onClick={() => setIsOpen(true)}
        className="font-serif rounded-md py-1 px-4 text-loveBlue bg-transparent border border-loveBlue absolute top-12 right-16"
      >
        ABOUT
      </button>

      {/* this stuff only shows then isOpen is TRUE */}
      {isOpen && (
        // this main container hosts the overlay and the modal
        <div className="fixed inset-0">

          {/* dark overlay/backdrop when modal is open */}
          <div
            className="fixed inset-0 bg-black/20"
            onClick={() => setIsOpen(false)} // click on the backdrop and you can close the modal too
          />

          {/* ACTUAL MODAL CONTENT */}
          <div className="bg-black rounded-[1.375rem] w-[22.375rem] h-[23.438rem] absolute top-12 right-8">


            {/* // button container */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                // added the z-index z-(num of choice) to put it the X button on top of the other content
                className="z-10 rounded cursor-pointer bg-loveBlue text-black w-10 h-10 flex items-center justify-center -top-2 -right-2 absolute font-vcr text-lg"
              >
                X
              </button>
            </div>

            <div className="bg-transparent border border-loveBlue rounded-[0.5rem] w-[20.625rem] h-[22rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8">
              <h1 className="mb-8 text-base mt-2">
                <span className="font-playground font-medium">Fly</span>
                <span className="font-serif">Radio</span>
              </h1>

              <h2 className="font-serif text-2xl mb-4">Welcome to Fly Radio!</h2>

              <h3 className="font-serif text-opacity-80 mb-20">
                Listen to curated playlists <i>filled</i> with underrated artists and
                tracks. Join me as I share these tracks and explore new sounds.
                Tune in and find gems to listen to today!
              </h3>
              <footer className="font-mono text-white text-opacity-40 text-xs text-center">
                {" "}
                &copy; FLY ENGINEERING — {new Date().getFullYear()}{" "}
              </footer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutModal;
