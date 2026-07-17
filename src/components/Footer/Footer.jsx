import React from "react";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* CTA */}

      <div className="footer__cta">
        <div className="container">

          <h2>Let's Create Something Remarkable</h2>
          <p>
            Premium stretch ceilings, decorative walls, epoxy flooring and
            bespoke interior solutions crafted for homes, offices, hospitality
            and commercial projects across India.
          </p>

          <Link to="/contact" className="btn">
            START YOUR PROJECT
          </Link>

        </div>
      </div>

      {/* Main Footer */}

      <div className="container footer__top">

        <div className="footer__brand">

          <h3 className="footer__mark">
            ◇Shilpkar <span>Factory</span>
          </h3>

          <p>
            Premium stretch ceilings, decorative wall systems,
            epoxy flooring and bespoke interior solutions,
            crafted with precision and installed across India.
          </p>

          <div className="footer__social">

            <a
              href="https://www.instagram.com/shilpkar_factory/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591313975186"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/shilpkar-factory-24544a335/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://www.youtube.com/@shilpkarfactory"
              target="_blank"
              rel="noreferrer"
            >
              <FiYoutube />
            </a>

          </div>

        </div>

        <div className="footer__col">

          <h4>Quick Links</h4>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/services">Services</Link></li>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        <div className="footer__col">

          <h4>Our Services</h4>

          <ul>

            <li>Stretch Ceiling</li>

            <li>Stretch Wall</li>

            <li>Wall Murals</li>

            <li>Epoxy Flooring</li>

            <li>Textile Ceiling</li>

            <li>Acrylic Panels</li>

          </ul>

        </div>

        <div className="footer__col">

          <h4>Contact</h4>

          <ul>

            <li>D-166, First Floor, Sector 10</li>
            <li>Noida - 201301, India</li>
            <li>+91 8171771229</li>
            <li>shilpkarfactory@gmail.com</li>
            <li>Mon – Sun : 24 Hours</li>

          </ul>

        </div>

      </div>

      <div className="footer__bottom">

        <div className="container footer__bottom-inner">

          <span>
            © {new Date().getFullYear()} Shilpkar Factory. All Rights Reserved.
          </span>

          <span>
            Crafted with Passion • Made in India
          </span>

        </div>

      </div>

    </footer>
  );
}