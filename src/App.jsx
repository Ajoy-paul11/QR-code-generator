import { useCallback } from "react";
import { useState } from "react";
import QrCode from "./component/QrCode.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = useCallback((e) => {
    e.preventDefault();
    setInputValue(e.target.elements.url.value);
  }, []);
  console.log(inputValue);

  return (
    <>
      <h1> QR code Generator</h1>
      <form onSubmit={handleInput}>
        <label htmlFor="url">Enter your URL :</label>
        <input type="url" name="url" id="url" required />
        <button type="submit">Generate</button>
      </form>
      <QrCode value={inputValue} />
    </>
  );
}

export default App;
