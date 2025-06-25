import { useArtists } from "../context/ArtistContext";

const Header = ({ darkMode, setDarkMode }) => {
  const { searchTerm, setSearchTerm } = useArtists();

  return (
    <header className="header">
      <div className="header-left">
        <h1>Artists Gallery</h1>
      </div>
      <div className="header-center">
        <input
          type="text"
          placeholder="Search artists by name or style..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="header-right">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-mode-toggle"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
