import { useArtists } from "../context/ArtistContext";
import ArtistList from "../components/ArtistList";
import ArtistDetails from "../components/ArtistDetails";

const Home = () => {
  const { selectedArtist } = useArtists();

  return (
    <div className="home">
      <h1>Artists Gallery</h1>
      <div className="gallery">
        <ArtistList />
        {selectedArtist && <ArtistDetails />}
      </div>
    </div>
  );
};

export default Home;
