import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QRCodeSVG } from "qrcode.react";

function QrCode({ value }) {
  const qrCode = React.useMemo(() => {
    return <QRCodeSVG value={value} size={200} level={"H"} />;
  }, [value]);

  console.log(qrCode);

  return (
    <div>
      <QRCodeCanvas value={value} />
      {/* <QRCodeSVG value={value} /> */}
      {/* <a href="/" download={`${(<QRCodeSVG value={value} />)}.png`}>
        Download
      </a> */}
    </div>
  );
}

export default QrCode;
