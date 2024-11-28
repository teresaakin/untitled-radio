import { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "../components/About";

const HeroPage = () => {
  const navigate = useNavigate(); // hook for navigation
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen flex flex-col">
        <div className="flex justify-end p-4">
            <button
            className="font-mono mr-8 mt-2" 
            onClick={() => setShowModal(true)}>ABOUT</button>
        </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <h1>
          <span className="font-playground font-medium text-9xl">Fly</span>
          <span className="font-serif text-9xl">Radio</span>
        </h1>
        
        {/* MIGHT make the button pulse state be blue instead of a grey */}
        <button
        className="px-4 py-2 rounded-md bg-customBlue text-white mb-10 mt-4 animate-pulseButton" 
        onClick={() => navigate("/HomePage")}>Start Listening</button>
        <h3 className="my-10">Discover Hidden Gems in Music.</h3>
      </div>
      {showModal && <About onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default HeroPage;
