import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cursor from "./components/Cursor/Cursor.jsx";
import AppRouter from "./router/AppRouter.jsx";

const tickerItems = [
  ["DEALERSHIP PROGRAM", "/franchise/dealership"],
  ["BECOME A DEALER", "/franchise/dealership-application"],
  ["ASSOCIATE PROGRAM", "/franchise/associate"],
  ["BECOME AN ASSOCIATE", "/franchise/associate-application"],
  ["SHOP BY CATEGORY", "/shop"],
  ["OUR SERVICES", "/services"],
  ["PROJECT GALLERY", "/gallery"],
  ["CONTACT US", "/contact"],
];

function TickerItems() {
  return (
    <>
      {tickerItems.map(([label, link], index) => (
        <React.Fragment key={`${label}-${index}`}>
          <a href={link} className="sf-ticker__link">
            {label}
          </a>

          <span className="sf-ticker__dot">✦</span>
        </React.Fragment>
      ))}
    </>
  );
}

export default function App() {
  return (
    <>
      <Cursor />

      <Navbar />

      {/* =====================================================
          SHILPKAR MOVING LINK BAR
      ===================================================== */}

      <div className="sf-ticker">

        <style>{`
          .sf-ticker {
            position: relative;
            width: 100%;
            height: 48px;
            overflow: hidden;

            display: flex;
            align-items: center;

            background: #081712;
            border-top: 1px solid rgba(231, 201, 143, 0.22);
            border-bottom: 1px solid rgba(231, 201, 143, 0.22);

            z-index: 999;
          }

          .sf-ticker__track {
            display: flex;
            width: max-content;
            flex-shrink: 0;

            animation: sfTickerMove 30s linear infinite;
          }

          .sf-ticker:hover .sf-ticker__track {
            animation-play-state: paused;
          }

          .sf-ticker__group {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            white-space: nowrap;
          }

          .sf-ticker__link {
            display: inline-flex;
            align-items: center;

            color: rgba(247, 245, 239, 0.9);

            text-decoration: none;

            font-family: var(--font-body);
            font-size: 11px;
            font-weight: 700;

            letter-spacing: 0.18em;
            text-transform: uppercase;

            transition: color 0.25s ease;
          }

          .sf-ticker__link:hover {
            color: #e7c98f;
          }

          .sf-ticker__dot {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            margin: 0 24px;

            color: #e7c98f;

            font-size: 10px;
          }

          @keyframes sfTickerMove {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @media (max-width: 768px) {
            .sf-ticker {
              height: 42px;
            }

            .sf-ticker__link {
              font-size: 9px;
              letter-spacing: 0.13em;
            }

            .sf-ticker__dot {
              margin: 0 16px;
            }
          }
        `}</style>

        <div className="sf-ticker__track">

          <div className="sf-ticker__group">
            <TickerItems />
          </div>

          <div
            className="sf-ticker__group"
            aria-hidden="true"
          >
            <TickerItems />
          </div>

        </div>
      </div>

      <AppRouter />

      <Footer />
    </>
  );
}