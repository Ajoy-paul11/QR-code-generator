import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QrCode({ value, size }) {
  const qrRef = useRef(null);

  const handlePNG = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleJPG = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const image = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={qrRef}>
      <QRCodeCanvas value={value} size={size} className=" mx-auto" />
      <div className=" flex justify-center items-center gap-x-6 mt-6 text-2xl lg:text-3xl">
        Download :
        <button
          onClick={handlePNG}
          className=" px-4 py-2 bg-[#90AFC5] text-[#101820] rounded-lg text-xl"
        >
          png
        </button>
        <button
          onClick={handleJPG}
          className=" px-4 py-2 bg-[#90AFC5] text-[#101820] rounded-lg text-xl"
        >
          jpg
        </button>
      </div>
    </div>
  );
}

export default QrCode;
