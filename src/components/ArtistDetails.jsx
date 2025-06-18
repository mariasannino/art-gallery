import { useArtists } from "../context/ArtistContext";

const ArtistDetails = () => {
  const { selectedArtist } = useArtists();

  if (!selectedArtist) return <p>Select an Artist to see the details</p>;

  return (
    <div className="artist-details">
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
