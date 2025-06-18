import { ArtistProvider } from "./context/ArtistContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <ArtistProvider>
      <Home />
    </ArtistProvider>
  );
}

export default App;
