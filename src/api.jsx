// ok so for api's in react I need to use the useEffect hook, but inside DisplayPlaylist
// this is just a file that contains the logic needed for api handling

const getAccessToken = async () => {
  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    console.error("Client ID or Secret not found in environment variables");
    throw new Error("API credentials missing");
  }

  // Use btoa() for base64 encoding in the browser
  const token = btoa(`${client_id}:${client_secret}`);

  // logic to fetch access token
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${token}`,
      },
      body: "grant_type=client_credentials",
    });

    // check if response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    // parse the JSON response to get the token
    const data = await response.json();

    console.log("Access Token:", data.access_token); // log the token in the console

    return data.access_token; // return the token to use in other requests
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw error;
  }
};

export { getAccessToken };

// I do not necessarily need the below code since all this is being done in the DisplayPlaylist.jsx file already
// but great to use for future reference

// const getPlaylistData = async (token, playlistId) => {
//   // logic to fetch playlist data
//   try {
//     const response = await fetch(
//       `https://api.spotify.com/v1/playlists/${playlistId}/`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch playlist data");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching playlist data:", error);
//     throw error;
//   }
// };

// export { getPlaylistData };

// function SpotifyAuth() {
//   const client_id = "9e56d82887e64e8fa148873d2e579d5e";
//   const client_secret = "54f2bbbce1804e538e70417237b70f47";

//   // this is for getting an access token
// useEffect(() => {

// })

//   // this is for fetching the literal data
//   useEffect(() => {
//     const fetchData = async () => {};
//   });
// }

// export default SpotifyAuth;
