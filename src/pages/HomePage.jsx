// holds the vinyl carousel
// now playing component

const HomePage = () => {
  return (
    <div>
      <div>
        <h2>
          <span>Fly</span>
          <span>Radio</span>
        </h2>
        {/* about modal */}
        <About />
      </div>
      <div>{/* here is the vinyl carousel component */}</div>
      <div>{/* here is the nowplaying component */}</div>
    </div>
  );
};

export default HomePage;
