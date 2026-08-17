import React from "react";
import { NavLink } from "react-router-dom";
import "./ScrollingTicker.css";

const tickerItems = [
  {
    label: "DEALERSHIP PROGRAM",
    to: "/franchise/dealership",
  },
  {
    label: "BECOME A DEALER",
    to: "/franchise/dealership-application",
  },
  {
    label: "ASSOCIATE PROGRAM",
    to: "/franchise/associate",
  },
  {
    label: "BECOME AN ASSOCIATE",
    to: "/franchise/associate-application",
  },
  {
    label: "SHOP BY CATEGORY",
    to: "/shop",
  },
  {
    label: "OUR SERVICES",
    to: "/services",
  },
  {
    label: "PROJECT GALLERY",
    to: "/gallery",
  },
  {
    label: "CONTACT US",
    to: "/contact",
  },
];

function TickerItems() {
  return (
    <>
      {tickerItems.map((item) => (
        <React.Fragment key={item.label}>
          <NavLink
            to={item.to}
            className="scrolling-ticker__link"
          >
            {item.label}
          </NavLink>

          <span className="scrolling-ticker__separator">
            ✦
          </span>
        </React.Fragment>
      ))}
    </>
  );
}

export default function ScrollingTicker() {
  return (
    <div className="scrolling-ticker">
      <div className="scrolling-ticker__track">

        {/* First copy */}
        <div className="scrolling-ticker__group">
          <TickerItems />
        </div>

        {/* Duplicate copy for seamless loop */}
        <div
          className="scrolling-ticker__group"
          aria-hidden="true"
        >
          <TickerItems />
        </div>

      </div>
    </div>
  );
}