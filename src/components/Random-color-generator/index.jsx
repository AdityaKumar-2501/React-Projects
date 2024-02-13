import React, { useEffect, useState } from "react";
import "./style.css";

export default function Random() {
  const [typeOf, setTypeOf] = useState("hex");
  const [color, setColor] = useState("#000");

  function generatRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHEXColor() {
    let hexArray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexCode = "#";
    // as hex code only conatin 6 characters
    for (let i = 0; i < 6; i++) {
      hexCode += hexArray[generatRandom(hexArray.length)];
    }
    setColor(hexCode);
  }

  function handleRandomRGBColor() {
    const r = generatRandom(256);
    const g = generatRandom(256);
    const b = generatRandom(256);

    let RGBcolor = `rgb(${r},${g},${b})`;
    setColor(RGBcolor);
  }

  useEffect(() => {
    if (typeOf === "hex") {
      handleRandomHEXColor();
    } else handleRandomRGBColor();
  }, [typeOf]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
      }}
    >
      <div className="btns">
        <button onClick={() => setTypeOf("hex")}>Generator Hex Color</button>
        <button onClick={() => setTypeOf("rgb")}>Generator RGB Color</button>
        <button
          onClick={() =>
            typeOf === "hex" ? handleRandomHEXColor() : handleRandomRGBColor()
          }
        >
          Generator Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          marginTop: "40px",
          flexDirection: "column",
          color: "white",
          gap: "20px",
        }}
      >
        <h1>{typeOf === "hex" ? `HEX Color` : `RGB Color`}</h1>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
