import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [word, setWord] = useState("");
  const [link, setLink] = useState("");


 useEffect(() => {
    setLink(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=200x200`
    );
  }, [word]);

  const handleClick = () => {
    setWord(input);
  };

  return (
    <div className="qrcode-app">
      <h2>QR code Generator</h2>
      <div className="creator">
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Enter text"
        ></input>
        <button onClick={handleClick}>Create</button>
      </div>
      <div className="qr-image">
        <img src={link} alt="" className="img"></img>
      </div>
    </div>
  );
}

export default App;
