// this is going to contain relevant info of each of my Spotify Playlists
// darn it!! I need to get an access token!!!!

// authentication --> client credentials flow 


const client_id = "9e56d82887e64e8fa148873d2e579d5e";
const client_secret = "54f2bbbce1804e538e70417237b70f47";
let accessToken = null;

async function getToken() {

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
    });

    const data = await response.json();

    // store the new token
    accessToken = data.access_token;
    return data;

  } catch (error) {
    console.log("There was an error fetching the token", error);
    throw error;
  }
}

async function getPlaylistInfo(access_token) {
  try {

    // if no token exists, get a new one
    if (!accessToken) {
      await getToken();
    }
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/4czabfC3eUXDFdC1TBm9gk",
      {
        method: "GET",
        headers: { Authorization: "Bearer " + access_token },
      }
    );

    const playlistData = await response.json();
    console.log(playlistData);  } catch (error) {

    // if token is invalid, get a new token and retry
    if (error.response && error.response.status === 401) {
      await getToken();
      return getPlaylistInfo(); // retry the request
    }
    console.log("There was an error fetching playlist data", error);
    throw error;
  }
}


// main function to run the process
async function main() {
  try {
    const profile = await getPlaylistInfo();
    console.log(profile);
  } catch (error) {
    console.error("Error in main process:", error);
  }
}

// Run the main function
main();

// // I need to get refresh token
// const getRefreshToken = async () => {

//   // refresh token that has been previously stored
//   const refreshToken = localStorage.getItem('refresh_token');
//   const url = "https://accounts.spotify.com/api/token";

//    const payload = {
//      method: 'POST',
//      headers: {
//        'Content-Type': 'application/x-www-form-urlencoded'
//      },
//      body: new URLSearchParams({
//        grant_type: 'refresh_token',
//        refresh_token: refreshToken,
//        client_id: clientId
//      }),
//    }
//    const body = await fetch(url, payload);
//    const response = await body.json();

//    localStorage.setItem('access_token', response.accessToken);
//    if (response.refreshToken) {
//      localStorage.setItem('refresh_token', response.refreshToken);
//    }
//  }



// const client_id = '9e56d82887e64e8fa148873d2e579d5e';
// const client_secret = '54f2bbbce1804e538e70417237b70f47';

// async function getSpotifyToken() {
//   try {
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         // Base64 encode the client ID and secret
//         'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
//       },
//       body: new URLSearchParams({
//         grant_type: 'client_credentials'
//       })
//     });

//     // Check if the response is successful
//     if (!response.ok) {
//       throw new Error('Failed to get token');
//     }

//     // Parse the JSON response
//     const data = await response.json();
    
//     // Return the access token
//     return data.access_token;
//   } catch (error) {
//     console.error('Error getting Spotify token:', error);
//   }
// }

// // Example of using the token to fetch data
// async function fetchSpotifyData() {
//   try {
//     // Get the access token
//     const token = await getSpotifyToken();

//     // Example: Fetch a playlist (replace with your playlist ID)
//     const playlistResponse = await fetch('https://api.spotify.com/v1/playlists/4czabfC3eUXDFdC1TBm9gk', {
//       method: 'GET',
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });

//     const playlistData = await playlistResponse.json();
//     console.log(playlistData);
//   } catch (error) {
//     console.error('Error fetching Spotify data:', error);
//   }
// }

// // Run the function
// fetchSpotifyData();