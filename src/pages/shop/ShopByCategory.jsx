import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import shopCategories from "../../data/shopCategories";
import "./ShopByCategory.css";

// Temporary cards
// Images baad mein add karenge
const shopCards = [
  {
    title: "Pichwai Wallpaper",
    slug: "pichwai-wallpaper",
    description:
      "Traditional Indian artistry reimagined for elegant contemporary spaces.",
  },
  {
    title: "Indian Wallpaper",
    slug: "indian-wallpaper",
    description:
      "Rich cultural patterns, heritage motifs and timeless Indian aesthetics.",
  },
  {
    title: "Abstract Wallpaper",
    slug: "abstract-wallpaper",
    description:
      "Modern artistic compositions created to bring character and depth to walls.",
  },
  {
    title: "Artistic Wallpaper",
    slug: "artistic-wallpaper",
    description:
      "Curated artistic designs for refined residential and commercial interiors.",
  },
];

export default function ShopByCategory() {
  const [wallpaperOpen, setWallpaperOpen] = useState(false);
const closeTimer = useRef(null);

const openWallpaperMenu = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
  }

  setWallpaperOpen(true);
};

const closeWallpaperMenu = () => {
  closeTimer.current = setTimeout(() => {
    setWallpaperOpen(false);
  }, 300);
};
  return (
    <main className="shop-category-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="shop-category-page__hero">

        <div className="container">

          {/* WALLPAPER & MURALS DROPDOWN */}

         <div
  className="shop-category-page__dropdown-wrap"
  onMouseEnter={openWallpaperMenu}
  onMouseLeave={closeWallpaperMenu}
>
  <button
    className={`shop-category-page__dropdown-btn ${
      wallpaperOpen
        ? "shop-category-page__dropdown-btn--open"
        : ""
    }`}
    onClick={() => setWallpaperOpen((prev) => !prev)}
  >
              <span>WALLPAPER & MURALS</span>

              <FiChevronDown
                className={
                  wallpaperOpen
                    ? "shop-category-page__chevron--open"
                    : ""
                }
              />
            </button>


            {/* DROPDOWN */}

            <div
              className={`shop-category-page__dropdown ${
                wallpaperOpen
                  ? "shop-category-page__dropdown--open"
                  : ""
              }`}
            >

              <div className="shop-category-page__dropdown-inner">

                {shopCategories.map((category) => (

                  <div
                    className="shop-category-page__dropdown-column"
                    key={category.title}
                  >

                    <h3>{category.title}</h3>

                    <div className="shop-category-page__dropdown-line" />

                    <div className="shop-category-page__dropdown-items">

                      {category.items.map((item) => (

                        <NavLink
                          key={item.slug}
                          to={`/shop/${item.slug}`}
                          onClick={() => setWallpaperOpen(false)}
                        >
                          {item.label}
                        </NavLink>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>


          <h1>
            Shop By Category
          </h1>


          <div className="shop-category-page__line" />


          <p>
            Explore our collection of wallpapers, murals, ceilings,
            surfaces and interior solutions crafted for elevated spaces.
          </p>

        </div>

      </section>


      {/* =========================
          WALLPAPER COLLECTION
      ========================= */}

      <section className="shop-category-page__content">

        <div className="container">


          <div className="shop-category-page__heading">

            <span>WALLPAPER & MURALS</span>

            <h2>
              Explore Our <em>Wallpaper Collection</em>
            </h2>

            <p>
              Discover wallpapers and wall murals across artistic,
              natural, luxurious and contemporary styles.
            </p>

          </div>


          {/* =========================
              CARDS
          ========================= */}

          <div className="shop-category-page__cards">

            {shopCards.map((card) => (

              <NavLink
                key={card.slug}
                to={`/shop/${card.slug}`}
                className="shop-category-card"
              >

                {/* IMAGE AREA
                    Image baad mein add karenge */}

                <div className="shop-category-card__image">
                </div>


                <div className="shop-category-card__content">

                  <h3>
                    {card.title}
                  </h3>

                  <p>
                    {card.description}
                  </p>


                  <div className="shop-category-card__bottom">

                    <span>
                      Explore Collection
                    </span>

                    <FiArrowRight />

                  </div>

                </div>

              </NavLink>

            ))}

          </div>


        </div>

      </section>

    </main>
  );
}