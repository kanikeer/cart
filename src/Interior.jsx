import React from "react";

// 1. Default Light Green
export function InteriorDefault({ text }) {
  return (
    <div className="interior-box" style={{ background: "pink" }}>
      <p className="interior-text">{text}</p>
    </div>
  );
}

// 2. Dark Mode
export function InteriorDark({ text }) {
  return (
    <div
      className="interior-box"
      style={{ background: "#333", color: "#fff" }}
    >
      <p className="interior-text" style={{ color: "#fff" }}>
        {text}
      </p>
    </div>
  );
}

// 3. Gradient
export function InteriorGradient({ text }) {
  return (
    <div
      className="interior-box"
      style={{
        background: "linear-gradient(135deg, lightgreen, #fad0c4)",
      }}
    >
      <p className="interior-text">{text}</p>
    </div>
  );
}

// MAIN LOGIC
export default function Interior({ text, index }) {
  if (index < 3) return <InteriorDefault text={text} />;
  if (index < 6) return <InteriorDark text={text} />;
  return <InteriorGradient text={text} />;
}
