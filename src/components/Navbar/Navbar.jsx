import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import navigation from "../../data/navigation";
import shopCategories from "../../data/shopCategories";
import logo from "../../assets/logos/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [shopCloseTimer, setShopCloseTimer] = useState(null);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
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

                <div className="navbar__dropdown" key={item.label}>

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
<div
  className="navbar__mega-dropdown"
  onMouseEnter={() => {
    if (shopCloseTimer) {
      clearTimeout(shopCloseTimer);
    }
    setShopOpen(true);
  }}
  onMouseLeave={() => {
    const timer = setTimeout(() => {
      setShopOpen(false);
    }, 250);

    setShopCloseTimer(timer);
  }}
>
  <button className="navbar__link navbar__mega-btn">
    SHOP BY CATEGORY
    <FiChevronDown
      className={shopOpen ? "navbar__mega-chevron--open" : ""}
    />
  </button>

  <div
    className={`navbar__mega-menu ${
      shopOpen ? "navbar__mega-menu--open" : ""
    }`}
  >
    <div className="navbar__mega-inner">

      {shopCategories.map((category) => (
        <div
          className="navbar__mega-column"
          key={category.title}
        >
          <h4>{category.title}</h4>

          <div className="navbar__mega-line"></div>

          {category.items.map((item) => (
            <NavLink
              key={item.slug}
              to={`/shop/${item.slug}`}
              className="navbar__mega-item"
              onClick={() => setShopOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      ))}

    </div>
  </div>
</div>

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

      {/* Mobile Menu */}

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
