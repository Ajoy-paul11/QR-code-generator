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
    <div className=" h-screen w-full bg-[#101820] text-[#90AFC5]">
      <h1 className=" w-full text-center mx-auto text-5xl font-bold py-16">
        QR code Generator
      </h1>
      <div className=" w-full text-center">
        <form onSubmit={handleInput}>
          <label
            htmlFor="url"
            className=" w-full text-2xl font-semibold block ml-[-136px] mb-6"
          >
            Enter your URL :
          </label>
          <div className=" flex items-center pl-40">
            <input
              type="url"
              name="url"
              id="url"
              required
              placeholder="Paste the URL"
              className=" h-10 w-96 px-3 outline-none bg-[#101820]/50 border rounded-l-lg text-xl"
            />
            <button
              type="submit"
              className=" px-3 py-2 bg-[#FBFCF8] text-[#1f427a] rounded-r-lg"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
      <div>
        <QrCode value={inputValue} />
      </div>
    </div>
  );
}

export default App;
