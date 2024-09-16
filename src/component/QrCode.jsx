import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

function QrCode({ value, size }) {
  const qrRef = useRef(null);
  const handleDownload = () => {
    console.log(qrRef);
    console.log(qrRef.current);
    const canvas = qrRef.current.querySelector("canvas");
    console.log(canvas);
    const image = canvas.toDataURL("image/png");
    console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div ref={qrRef}>
      <QRCodeCanvas value={value} size={size} />
      <button
        onClick={handleDownload}
        className=" px-4 py-2 bg-[#90AFC5] text-[#101820] mt-6 rounded-lg"
      >
        Download
      </button>
    </div>
  );
}

export default QrCode;
