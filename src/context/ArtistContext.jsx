import { createContext, useContext, useEffect, useState } from "react";
import { fetchArtists } from "../services/api";

const ArtistContext = createContext();

export const useArtists = () => useContext(ArtistContext);

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists().then((data) => {
      setArtists(data);
      setLoading(false);
    });
  }, []);

  const filteredArtists = artists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artist.style.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ArtistContext.Provider
      value={{
        artists: filteredArtists,
        selectedArtist,
        setSelectedArtist,
        searchTerm,
        setSearchTerm,
        loading,
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
