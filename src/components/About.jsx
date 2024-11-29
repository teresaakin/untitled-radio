// about modal overlay component

// define the about component, accepting an onClose prop
const About = ({ onClose }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center mx-auto text-center p-6">
      {/* close button */}
      <button 
      className="absolute top-6 left-6 text-black font-mono" 
      onClick={onClose}>
        BACK
      </button>

      {/* content container */}
      <div className="w-full max-w-lg">
        <h2 className="mb-6 text-black text-xl">
          <span className="font-playground">Fly</span>
          <span className="font-serif">Radio</span>
        </h2>

        {/* main content */}
        <div>
          <h3 className="font-serif mb-6 text-black text-6xl">Welcome to Fly Radio!</h3>
          <p className="mt-4  text-black text-m leading-relaxed">
            Listen to curated playlists filled with underrated artists and
            tracks. Join me as I share these tracks and explore new sounds. Tune
            in and find gems to listen to today!
          </p>
          <footer className="mt-10 text-gray-500 text-xs">
            &copy; Fly Engineering — {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
