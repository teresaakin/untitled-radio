import { useNavigate } from "react-router-dom";
import "../style.css";
import { useFetchPlaylistData } from "../useFetchPlaylistData";

// going to fetch playlists here I think
const Carousel2 = () => {
  const { playlists } = useFetchPlaylistData();
  const navigate = useNavigate();

  const handlePlaylistClick = (playlistId) => {
    navigate(`/HomePage/playlist/${playlistId}`);
  };

  // also might need to make an array for this to get indicators maybe, but not rn, and some other tweaks and such
  return (
    // Your carousel component with playlists mapped
    <div className="flex items-center justify-center min-h-screen snap-x snap-mandatory">
      <div className="carousel-container mt-20">
        {playlists.map((playlist) => (
          <div key={playlist.id} 
               className="cd-animation cd-size"
               onClick={() => handlePlaylistClick(playlist.id)}>
            <span className="cd-title font-serif text-4xl">
              {playlist.name}
            </span>
            <span className="cd-date font-mono text-[14px] text-gray-400">
              {/* gonna need to fix the dates */}
              LAST UPDATED:{" "}
              {new Date(
                playlist.last_modified || Date.now()).toLocaleDateString()}
            </span>
            <div className="cd-container">
            <img src=
                "/images/cd.png"
                alt={playlist.name}
              />
              {/* <img
                src={playlist.images?.[0]?.url || "/images/cd.png"}
                alt={playlist.name}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //   // wraps all content
  //   <div className="flex items-center justify-center min-h-screen snap-x snap-mandatory">
  //     {/* this is the CD container */}
  //     <div className="carousel-container mt-20">
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //       <div className="cd-animation cd-size">
  //         <span className="cd-title font-serif text-4xl">Playlist Title</span>
  //         <span className="cd-date font-mono text-[14px] text-gray-400">
  //           LAST UPDATED: 05/05/01
  //         </span>
  //         <div className="cd-container">
  //           <img src="/images/cd.png" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
//   return (
//     // wraps all content
//     <div className="flex items-center justify-center min-h-screen snap-x snap-mandatory">
//       {/* this is the CD container */}
//       <div className="carousel-container mt-20">
//         {playlists.map((playlist) => (
//           <div key={playlist.id} className="cd-animation cd-size">
//             <span className="cd-title font-serif text-4xl">{playlist.name}</span>
//             <span className="cd-date font-mono text-[14px] text-gray-400">
//               LAST UPDATED: 05/05/2001
//             </span>
//             <div className="cd-container">
//               <img
//                 src="/images/cd.png"
//                 alt={playlist.name}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

// };

export default Carousel2;

// each disc is going to need an ID
