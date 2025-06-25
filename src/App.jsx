import { useState } from "react";
import { ArtistProvider } from "./context/ArtistContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ArtistProvider>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="dark-mode-toggle"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <Home />
      </div>
    </ArtistProvider>
  );
}

export default App;
