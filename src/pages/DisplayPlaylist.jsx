// once user clicks on a CD they get to this page
// going to need spotify's api, need to sort that out
import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccessToken } from "../api.jsx";

const DisplayPlaylist = () => {
  const { playlistId } = useParams();
  const [playlistData, setPlaylistData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // function to handle both API calls
    const fetchData = async () => {
      try {
        // first get the access token
        const token = await getAccessToken();
        console.log("Token:", token); // debugging purposes

        // fetch the playlist data
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // for future ref when I get an array of the playlists
        // const playlistId = '4czabfC3eUXDFdC1TBm9gk';
        // const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }

        const data = await response.json();
        setPlaylistData(data); // update the playlist state
      } catch (error) {
        // handle errors if any of the fetch requests fail
        setError("Failed to fetch playlist data");
      }
    };

    fetchData(); //execute the function
  }, [playlistId]); // empty dependency array means it runs once the component mounts

  // Format duration from milliseconds to MM:SS
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="min-h-screen relative">
      {/* Back button container - absolutely positioned */}
      <div className="absolute lg:fixed w-full top-6">
        {/* this link links us back to the home page when we click the back button */}
        <Link to="/HomePage">
          <button className="ml-14 mt-6 rounded-md py-1 px-4 font-serif text-loveBlue bg-transparent border border-loveBlue">
            BACK
          </button>
        </Link>
      </div>

      {/* // container for all content besides the back button */}
      <div className="mt-20 max-w-6xl mx-auto">
        <div className="flex flex-row gap-4 items-center w-full">
          {/* // disc containter/placeholder */}
          <div className="box-border w-72 h-72 aspect-square">
            <div className="cd-container">
              <img src="/images/cd.png" />
            </div>
          </div>

          {/* // container for the playlist info */}
          <div className="flex flex-col gap-2 ml-12">
            <div className="font-serif text-5xl">
              {playlistData && playlistData.name}
            </div>
            <div className="font-mono text-sm text-white text-opacity-55">
              5 TRACKS
            </div>
            <div className="font-serif text-lg mb-1">By: Teresa A.</div>
            <div className="max-w-screen-sm font-serif text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 grid-rows-5 mt-6 items-center">
          {/* <!-- Row 1: Header row --> */}
          <div className="text-white text-opacity-70 text-[14px]">#</div>
          <div className="text-white text-opacity-70 -ml-[166px] text-[14px]">
            Title
          </div>
          <div className="text-white text-opacity-70 -ml-[230px] text-[14px]">
            Artist
          </div>
          <div className="text-white text-opacity-70 pl-32 text-[14px]">
            Time
          </div>

          {/* map through tracks so I do not have to hard code anything */}

          {playlistData &&
            playlistData.tracks &&
            playlistData.tracks.items.map((item, index) => (
              <React.Fragment key={item.track.id}>
                <div className="font-mono text-[14px]">{index + 1}</div>
                <div className="flex items-center gap-4 -ml-[166px]">
                  <div>
                    <img
                      src={item.track.album.images[1].url}
                      className="w-12 h-12 rounded-sm"
                    />
                  </div>
                  <div className="truncate text-[14px]">{item.track.name}</div>
                </div>

                <div className="truncate -ml-[230px] text-[14px]">
                  {item.track.artists.map((artist) => artist.name).join(", ")}
                </div>
                <div className="font-mono pl-32 text-[14px]">
                  {formatDuration(item.track.duration_ms)}
                </div>
              </React.Fragment>
            ))}

          {/* <!-- Row 2: Song 1 --> */}
          {/* <div>1</div>
          <div>Song Title 1</div>
          <div>Artist Name 1</div>
          <div className="font-mono">3:45</div> */}

          {/* <!-- Row 3: Song 2 --> */}
          {/* <div>2</div>
          <div>Song Title 2</div>
          <div>Artist Name 2</div>
          <div className="font-mono">4:05</div> */}

          {/* <!-- Row 4: Song 3 --> */}
          {/* <div>3</div>
          <div>Song Title 3</div>
          <div>Artist Name 3</div>
          <div className="font-mono">2:50</div> */}

          {/* <!-- Row 5: Song 4 --> */}
          {/* <div>4</div>
          <div>Song Title 4</div>
          <div>Artist Name 4</div>
          <div className="font-mono">3:30</div> */}
        </div>
      </div>
    </div>
  );
};

export default DisplayPlaylist;
