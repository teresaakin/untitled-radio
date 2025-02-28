import "../style.css";

// decided to just use plain ole css for the carousel animation for now

const Carousel2 = () => {
  // also might need to make an array for this to get indicators maybe, but not rn, and some other tweaks and such
  return (
    // wraps all content
    <div className="flex items-center justify-center min-h-screen snap-x snap-mandatory">
      {/* this is the CD container */}
      <div className="carousel-container mt-20">
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
        <div className="cd-animation cd-size">
          <span className="cd-title font-serif text-4xl">Playlist Title</span>
          <span className="cd-date font-mono text-[14px] text-gray-400">
            LAST UPDATED: 05/05/01
          </span>
          <div className="cd-container">
            <img src="/images/cd.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
