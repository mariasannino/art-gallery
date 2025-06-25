import ArtistList from "../components/ArtistList";
import ArtistDetails from "../components/ArtistDetails";
import { useArtists } from "../context/ArtistContext";
import { useState } from "react";
import Header from "../components/Header";
const Home = () => {
  const { selectedArtist } = useArtists();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "home dark-mode" : "home"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="gallery">
        <ArtistList />
        {selectedArtist && <ArtistDetails />}
      </div>
    </div>
  );
};

export default Home;
