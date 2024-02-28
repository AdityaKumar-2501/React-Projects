import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

function QRcodeGenerator() {
    const [input, setInput] = useState("");
    const [qrcode, setQrcode] = useState("");

    function handleClick() {
        setQrcode(input);
        setInput('');
    }

    return (
        <div>
            <div>
                <h1>QRcode Generator</h1>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    className="input"
                    type="text"
                    name="input"
                    placeholder="Enter Your Value"
                    value={input}
                />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    className="btn"
                    onClick={handleClick}
                >
                    Generat QR Code
                </button>
            </div>

            <QRCode
                className="qrcode"
                size={50}
                value={qrcode}
                viewBox={`0 0 256 256`}
            />
        </div>
    );
}

export default QRcodeGenerator;
