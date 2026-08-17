import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import navigation from "../../data/navigation";
import logo from "../../assets/logos/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // ===============================
  // TICKER LINKS
  // ===============================
  const tickerItems = [
    {
      label: "DEALERSHIP PROGRAM",
      path: "/franchise/dealership",
    },
    {
      label: "BECOME A DEALER",
      path: "/franchise/dealership-application",
    },
    {
      label: "ASSOCIATE PROGRAM",
      path: "/franchise/associate",
    },
    {
      label: "BECOME AN ASSOCIATE",
      path: "/franchise/associate-application",
    },
    {
      label: "INSTALLATION TRAINING",
      path: "/franchise/installation-training",
    },
    {
      label: "SHOP BY CATEGORY",
      path: "/shop",
    },
    {
      label: "CONTACT US",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ===============================
          NAVBAR
      =============================== */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__container">

          {/* Logo */}
          <NavLink to="/" className="navbar__logo">
            <img
              src={logo}
              alt="Shilpkar Factory"
              className="navbar__logo-image"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="navbar__desktop">
            {navigation.map((item) =>
              item.children ? (
                <div
                  className="navbar__dropdown"
                  key={item.label}
                >
                  <button className="navbar__link navbar__dropdown-btn">
                    {item.label}
                    <FiChevronDown />
                  </button>

                  <div className="navbar__dropdown-menu">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="navbar__dropdown-item"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            {/* SHOP BY CATEGORY */}
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              SHOP BY CATEGORY
            </NavLink>
          </nav>

          {/* CTA */}
          <a
            href="https://www.shilpkaradmin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            Login
          </a>

          {/* Mobile Button */}
          <button
            className="navbar__mobile-btn"
            onClick={() => setMobileOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* ===============================
          MOVING TICKER
      =============================== */}
      <div className="shilpkar-ticker">
        <div className="shilpkar-ticker__track">

          {/* FIRST SET */}
          <div className="shilpkar-ticker__group">
            {tickerItems.map((item) => (
              <React.Fragment key={item.label}>
                <Link
                  to={item.path}
                  className="shilpkar-ticker__link"
                >
                  {item.label}
                </Link>

                <span className="shilpkar-ticker__separator">
                  ✦
                </span>
              </React.Fragment>
            ))}
          </div>

          {/* DUPLICATE SET */}
          <div
            className="shilpkar-ticker__group"
            aria-hidden="true"
          >
            {tickerItems.map((item, index) => (
              <React.Fragment
                key={`${item.label}-duplicate-${index}`}
              >
                <Link
                  to={item.path}
                  className="shilpkar-ticker__link"
                >
                  {item.label}
                </Link>

                <span className="shilpkar-ticker__separator">
                  ✦
                </span>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ===============================
          MOBILE MENU
      =============================== */}
      <div
        className={`mobile-menu ${
          mobileOpen ? "mobile-menu--open" : ""
        }`}
      >
        <div className="mobile-menu__header">
          <h3>Menu</h3>

          <button
            onClick={() => setMobileOpen(false)}
          >
            <FiX />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {navigation.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="mobile-menu__parent"
                  onClick={() =>
                    setSolutionsOpen(!solutionsOpen)
                  }
                >
                  {item.label}

                  <FiChevronDown
                    className={
                      solutionsOpen ? "rotate" : ""
                    }
                  />
                </button>

                {solutionsOpen && (
                  <div className="mobile-menu__children">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() =>
                  setMobileOpen(false)
                }
              >
                {item.label}
              </NavLink>
            )
          )}

          <NavLink
            to="/shop"
            className="mobile-menu__parent"
            onClick={() => setMobileOpen(false)}
          >
            SHOP BY CATEGORY
          </NavLink>

          <NavLink
            to="/contact"
            className="mobile-menu__cta"
            onClick={() => setMobileOpen(false)}
          >
            Book a Consultation
          </NavLink>
        </nav>
      </div>
    </>
  );
}