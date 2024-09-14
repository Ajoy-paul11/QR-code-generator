import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QRCodeSVG } from "qrcode.react";

function QrCode({ value }) {
  return (
    <div>
      {/* <QRCodeCanvas value={value} /> */}
      <QRCodeSVG value={value} />
      <a href="/" download={`${(<QRCodeSVG value={value} />)}.png`}>
        Download
      </a>
    </div>
  );
}

export default QrCode;
