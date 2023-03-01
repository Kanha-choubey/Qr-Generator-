import React, { useState } from "react";
import QRCode from "qrcode";

function CreateQr() {
  const [qrValue, setQrValue] = useState("");

  const [qrImageUrl, setQrImageUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!qrValue) {
      return alert("please enter some value");
    }

    const response = await QRCode.toDataURL(qrValue);
    setQrImageUrl(response);
    setQrValue(" ");
  };
  return (
    <div className="col-md-4 mx-auto ">
      <h2 className="text-center mb-4">Create Qr Code</h2>
      <div className="card">
        <div className="card-body d-flex flex-column aling-items-center ">
          <form
            className="d-flex aling-items-center justify-content-between "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Enter text"
              className="from-control border-top-0 border-start-0 border-end-0 border border-primary"
              style={{ width: "93%", boxShadow: "revert-layer" }}
              id="text"
              value={qrValue}
              onChange={(e) => setQrValue(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary d-flex aling-items-center justify-content-center pb-2 "
            >
              +
            </button>
          </form>
          {qrImageUrl && (
            <div className="mt-4 mx-auto">
              <a href={qrImageUrl} download="qr.png">
                <img src={qrImageUrl} alt="QR Code" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateQr;
