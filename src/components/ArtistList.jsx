import { useArtists } from "../context/ArtistContext";

const ArtistList = () => {
  const { artists, setSelectedArtist } = useArtists();

  return (
    <div className="artist-list">
      {artists.map((artist) => (
        <div
          key={artist.id}
          onClick={() => setSelectedArtist(artist)}
          className="artist-card"
        >
          <img className="artist-img" src={artist.image} alt={artist.name} />
          <h3>{artist.name}</h3>
          <p>{artist.style}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistList;
