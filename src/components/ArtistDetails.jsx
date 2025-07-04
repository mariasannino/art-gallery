import { useArtists } from "../context/ArtistContext";

const ArtistDetails = () => {
  const { selectedArtist, setSelectedArtist } = useArtists();

  return (
    <div className="artist-details">
      <button className="close-button" onClick={() => setSelectedArtist(null)}>
        ❌
      </button>
      <h2>{selectedArtist.name}</h2>
      <img src={selectedArtist.image} alt={selectedArtist.name} />
      <p>
        <strong>Style:</strong> {selectedArtist.style}
      </p>
      <p>{selectedArtist.bio}</p>
    </div>
  );
};

export default ArtistDetails;
