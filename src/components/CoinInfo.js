import React from "react";

function CoinInfo() {
  return (
    <div
      style={{
        color: "#333",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold",
        width: "60%",
        padding: "20px",
        backgroundColor: "#f0f8ff", // light background
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "40px auto",
        textAlign: "justify",
        lineHeight: "1.6",
        maxWidth: "800px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#1e90ff" }}>
        Cryptocurrency Overview
      </h2>
      <p>
        A cryptocurrency is a digital or virtual currency that is secured by
        cryptography, making it nearly impossible to counterfeit or
        double-spend. Many cryptocurrencies are decentralized networks based on
        blockchain technology—a distributed ledger enforced by a disparate
        network of computers.
      </p>
      <p>
        A defining feature of cryptocurrencies is that they are generally not
        issued by any central authority, rendering them theoretically immune to
        government interference or manipulation.
      </p>
      <div style={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
        Stay tuned for future updates...
      </div>
    </div>
  );
}

export default CoinInfo;
