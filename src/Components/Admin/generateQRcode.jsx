import React, { useState } from "react";
import { dk } from "../../constants/districts";
import { config } from "../../config";
import QRCode from "qrcode.react";
import { addQrCode } from "../../firebase/services";
import useFireStore from "../../hooks/use-firestore";
import { collections } from "../../firebase/collections";
import Table2 from "../../Assets/table2";

const GenerateQRcode = () => {
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [station, setStation] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const { data, isLoading } = useFireStore(collections.QR_CODES);

  // Handlers Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!district || !taluka) {
      return alert("required...");
    }

    const qrLink = `${config.appUrl}?district=${district}&taluka=${taluka}&station=${station}`;

    if (
      !isLoading &&
      data &&
      data.length > 0 &&
      data.some(({ qrValue }) => qrValue === qrLink)
    ) {
      return alert("QR code for this station is already Generated");
    }
    setQrValue(qrLink);
  };

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `qr-code.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setTimeout(() => URL.revokeObjectURL(downloadLink), 5000);
  };

  const saveQrCode = async () => {
    setIsSaving(true);
    const payload = {
      district,
      taluka,
      station,
      qrValue,
    };
    const res = await addQrCode(payload);
    setIsSaving(false);
    if (res) {
      alert("QR Code saved successfully");
      setDistrict("");
      setTaluka("");
      setStation("");
      setQrValue("");
    }
  };

  return (
    <>
      <section class="dashboard">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div className="overview">
            <div className="title">
              <i class=" fa fa-solid fa-qrcode"></i>
              <span className="text">Generate QR Code</span>
            </div>
          </div>
          {/* <div class="qr_image_container">
            <div class="qr_image">
              <img src="/images/police.jpg" alt="" />
            </div>
            
          </div> */}

          {/* // fetching qr codes  */}
          {/* <Table2 dataFile={data} /> */}

          <div className="qr_generation">
            <form onSubmit={handleSubmit}>
              <div className="district">
                <select
                  className="district__1"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {dk.map((dist) => (
                    <option value={dist.value} className="option__forform">
                      {dist.label}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className="district">
                <select
                  className="district__1"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                >
                  <option value="">Select District</option>
                  {dk.map((dist) => (
                    <option value={dist.value} className="option__forform">
                      {dist.label}
                    </option>
                  ))}
                </select>
              </div> */}
              {district && (
                <div className="district__taluko">
                  <select
                    className="district__taluko1"
                    onChange={(e) => setTaluka(e.target.value)}
                  >
                    <option value="">Select Taluka</option>
                    {dk
                      ?.find((obj) => obj?.value === district)
                      ?.talukas?.map((taluko) => (
                        <option
                          value={taluko.value}
                          className="option__forform"
                        >
                          {taluko.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              {district && taluka && (
                <div className="district__police">
                  <select
                    className="district__police1"
                    onChange={({ target }) => setStation(target.value)}
                  >
                    <option value="">Select Station</option>x
                    {dk
                      ?.find((obj) => obj?.value === district)
                      ?.talukas?.find((obj) => obj?.value === taluka)
                      ?.stations?.map((police) => (
                        <option
                          value={police.value}
                          className="option__forform"
                        >
                          {police.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              {qrValue && (
                <QRCode
                  id="qr-code"
                  value={qrValue}
                  size={290}
                  level={"H"}
                  includeMargin={true}
                />
              )}
              {qrValue ? (
                <>
                  <button
                    className="sendOtp generateQR disable"
                    disabled={!qrValue}
                    onClick={downloadQR}
                  >
                    Download QR
                  </button>
                  {/* {qrValue && (
                  <button
                    className="sendOtp generateQR disable"
                    disabled={isSaving}
                    onClick={saveQrCode}
                  >
                    {isSaving ? "Saving..." : "Save QR Code"}
                  </button>
                )} */}
                </>
              ) : (
                <button
                  className="sendOtp generateQR"
                  type="submit"
                  disabled={!station}
                >
                  Generate QR
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerateQRcode;
