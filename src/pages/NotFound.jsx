import React from "react";
import { Link } from "react-router-dom";
import SplitText from "../components/Effects/SplitText.jsx";

export default function NotFound() {
  return (
    <section
      className="section-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 120,
      }}
    >
      <span className="eyebrow">404</span>
      <SplitText as="h1" className="chisel" text="This room doesn't exist" />
      <p style={{ color: "var(--ivory-dim)", margin: "22px 0 34px" }}>
        Let's take you back to somewhere real.
      </p>
      <Link to="/" className="btn" data-cursor="target">
        Back to Home
      </Link>
    </section>
  );
}
