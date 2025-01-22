// holds the vinyl carousel
// now playing component
import AboutModal from "../components/AboutModal";

const HomePage = () => {
  return (
    <div>
      <div>
        <h2 className="absolute top-12 left-16 text-loveBlue">
          {/* // can also make the fonts equal */}
          <span className="font-playground relative top-[-22px] mr-[2px] text-2xl">Fly</span> 
          <span className="font-serif text-3xl">Radio</span>
        </h2>
        {/* about modal */}
        <AboutModal />
      </div>
      <div>{/* here is the  carousel component */}</div>
      <div>{/* here is the nowplaying component */}</div>
    </div>
  );
};

export default HomePage;
