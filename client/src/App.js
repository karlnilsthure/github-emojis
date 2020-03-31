import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [emojis, setEmojis] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/emojis")
      .then(res => res.json())
      .then(res => setEmojis(res.data));
  }, []);

  if (!emojis) return null;

  return (
    <div className="App">
      {Object.keys(emojis).map((key, index) => (
        <p key={index}>{key}</p>
      ))}
    </div>
  );
}

export default App;
