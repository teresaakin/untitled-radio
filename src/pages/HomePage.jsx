// holds the vinyl carousel
// now playing component
import AboutModal from "../components/AboutModal";
// import CDCarousel from "../components/CDCarousel";

import Carousel from "../components/Carousel";

const HomePage = () => {
  return (

    
    <div className="min-h-screen relative">  {/*contains everything on page*/}

      {/* Header section */}
      <div className="absolute top-0 w-full p-4 z-10">
        <h2 className="absolute top-12 left-16">
          {/* // can also make the fonts equal */}
          <span className="font-playground relative top-[-22px] mr-[2px] text-2xl">
            Fly
          </span>
          <span className="font-serif text-3xl">Radio</span>
        </h2>
        {/* about modal */}
        <AboutModal />
      </div>
      {/* Main Content Section -- contains carousel for now not 100% sure about the NP component*/}
      {/* <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-7xl mx-auto">
          <CDCarousel />
        </div>
      </div> */}
<Carousel />
    </div>
  );
};

export default HomePage;
