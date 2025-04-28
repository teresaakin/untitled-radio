import { useState, useEffect } from "react";
import { getAccessToken } from "./api.jsx";



export function useFetchPlaylistData() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // function to handle both API calls
    const fetchPlaylist = async () => {
      try {
        // first get the access token
        const token = await getAccessToken();
        console.log("Token:", token); // debugging purposes

        const playlistIds = [
          "4czabfC3eUXDFdC1TBm9gk",
          "5wO5QpZxoyzujm0ND3QYF8",
          "4qrJwcFCFqHz8mXixbpWXx",
          "7p4O1yWJWEnb6kwE7qOkPa",
        ];
        // fetch the playlist data in parallel now since it's multiple

        const playlistPromises = playlistIds.map((id) =>
          fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch playlist ${id}`);
            }
            return response.json();
          })
        );

        // wait for all requests to complete
        const fetchedPlaylists = await Promise.all(playlistPromises);
        setPlaylists(fetchedPlaylists); // update the playlist state
      } catch (error) {
        console.error("Error fetching playlists:", error)
      }
    };

    fetchPlaylist(); //execute the function
  }, []); // empty dependency array means it runs once the component mounts

  return { playlists };
}

