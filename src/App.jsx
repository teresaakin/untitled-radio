import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import all pages
import HeroPage from "./pages/HeroPage.jsx";
// import AboutModal from "./components/AboutModal.jsx";
import HomePage from "./pages/HomePage.jsx"
import DisplayPlaylist from "./pages/DisplayPlaylist.jsx";

// app component with all routes
export default function App() {
  return (
    <Router>
      <Routes>
                {/* <Route path="/AboutModal" element={<AboutModal />} /> */}
        <Route path="/" element={<HeroPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        {/* this is where you click on a vinyl from carousel to be redirected to its respective
                playlist */}
        <Route path="/HomePage/playlist/:playlistId" element={<DisplayPlaylist />} />
      </Routes>
    </Router>
  );
}
