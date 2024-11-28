// about modal

const About = ({ onClose }) => {
  return (
    <div onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="text-center">
          <h2>
            <span className="font-playground">Fly</span>
            <span className="font-serif">Radio</span>
          </h2>
          <div className="text-center">
            <h3 className="font-serif">Welcome to Fly Radio!</h3>
            <p className="mt-4">
              Listen to curated playlists filled with underrated artists and
              tracks. Join me as I share these tracks and explore new sounds.
              Tune in and find gems to listen to today!
            </p>
            <footer className="text-white opacity-50 text-xs">
              &copy; FLY ENGINEERING — {new Date().getFullYear()}
            </footer>
          </div>
        </div>
        <button
        className="flex justify-end" 
        onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default About;
