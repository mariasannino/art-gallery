import { createContext, useContext, useEffect, useState } from "react";
import { fetchArtists } from "../services/api";
const ArtistContext = createContext();

export const useArtists = () => useContext(ArtistContext);

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    fetchArtists().then(setArtists);
  }, []);

  return (
    <ArtistContext.Provider
      value={{ artists, selectedArtist, setSelectedArtist }}
    >
      {children}
    </ArtistContext.Provider>
  );
};
