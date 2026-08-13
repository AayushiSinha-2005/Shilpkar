import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";
import shopCategories from "../../data/shopCategories";
import wallpaperCategories from "../../data/wallpaperCategories";
import "./ShopByCategory.css";
// =========================
// COLLECTION DATA
// Images baad mein add karenge
// =========================

const shopCollections = [
  {
    title: "BespokeWall™",
    subtitle: "Customized Wallpaper",
    cards: [
      {
        title: "Custom Photo Wallpaper",
        slug: "custom-photo-wallpaper",
      },
      {
        title: "Personalized Name & Family Wallpaper",
        slug: "personalized-name-family-wallpaper",
      },
      {
        title: "Customized Nature Wallpaper",
        slug: "customized-nature-wallpaper",
      },
      {
        title: "Custom Kids Room Wallpaper",
        slug: "custom-kids-room-wallpaper",
      },
      {
        title: "Corporate Logo Wallpaper",
        slug: "corporate-logo-wallpaper",
      },
      {
        title: "Restaurant Theme Wallpaper",
        slug: "restaurant-theme-wallpaper",
      },
      {
        title: "Hotel & Resort Wallpaper",
        slug: "hotel-resort-wallpaper",
      },
      {
        title: "Religious & Spiritual Wallpaper",
        slug: "religious-spiritual-wallpaper",
      },
      {
        title: "Customized Map Wallpaper",
        slug: "customized-map-wallpaper",
      },
      {
        title: "Any Image, Any Size Wallpaper",
        slug: "any-image-any-size-wallpaper",
      },
    ],
  },

  {
    title: "PatternLine™",
    subtitle: "Repeat Pattern Wallpaper",
    cards: [
      {
        title: "Modern Geometric",
        slug: "modern-geometric",
      },
      {
        title: "Botanical & Tropical",
        slug: "botanical-tropical",
      },
      {
        title: "Floral Elegance",
        slug: "floral-elegance",
      },
      {
        title: "Minimal Patterns",
        slug: "minimal-patterns",
      },
      {
        title: "Classic Damask",
        slug: "classic-damask",
      },
      {
        title: "Art Deco",
        slug: "art-deco",
      },
      {
        title: "Abstract Patterns",
        slug: "abstract-patterns",
      },
      {
        title: "Kids Patterns",
        slug: "kids-patterns",
      },
      {
        title: "Brick, Stone & Concrete",
        slug: "brick-stone-concrete",
      },
      {
        title: "Wood & Natural Texture",
        slug: "wood-natural-texture",
      },
      {
        title: "Indian Heritage Patterns",
        slug: "indian-heritage-patterns",
      },
      {
        title: "Luxury Metallic Patterns",
        slug: "luxury-metallic-patterns",
      },
    ],
  },

  {
    title: "EmbroWall™",
    subtitle: "Exclusive Embroidery Wallpaper",
    cards: [
      {
        title: "Floral Embroidery",
        slug: "floral-embroidery",
      },
      {
        title: "Botanical Embroidery",
        slug: "botanical-embroidery",
      },
      {
        title: "Royal Motif Collection",
        slug: "royal-motif-collection",
      },
      {
        title: "Indian Heritage Embroidery",
        slug: "indian-heritage-embroidery",
      },
      {
        title: "Contemporary Line Art",
        slug: "contemporary-line-art",
      },
      {
        title: "Birds & Nature Collection",
        slug: "birds-nature-collection",
      },
      {
        title: "Geometric Threadwork",
        slug: "geometric-threadwork",
      },
      {
        title: "Golden Thread Collection",
        slug: "golden-thread-collection",
      },
      {
        title: "Customized Monogram Embroidery",
        slug: "customized-monogram-embroidery",
      },
      {
        title: "Designer Signature Collection",
        slug: "designer-signature-collection",
      },
    ],
  },

  {
    title: "WallSculpt™",
    subtitle: "Architectural Wall Murals",
    cards: [
      {
        title: "3D Architectural Murals",
        slug: "3d-architectural-murals",
      },
      {
        title: "Sculptural Wall Art",
        slug: "sculptural-wall-art",
      },
      {
        title: "Arch & Column Designs",
        slug: "arch-column-designs",
      },
      {
        title: "HDMR + CNC Wall Panels",
        slug: "hdmr-cnc-wall-panels",
      },
      {
        title: "Canvas Insert Wall Panels",
        slug: "canvas-insert-wall-panels",
      },
      {
        title: "Textured Relief Murals",
        slug: "textured-relief-murals",
      },
      {
        title: "Classical Architectural Art",
        slug: "classical-architectural-art",
      },
      {
        title: "Modern Luxury Wall Panels",
        slug: "modern-luxury-wall-panels",
      },
      {
        title: "Backlit Wall Art",
        slug: "backlit-wall-art",
      },
      {
        title: "Customized Feature Walls",
        slug: "customized-feature-walls",
      },
    ],
  },
  {
  title: "Room-Wise Shopping",
  subtitle: "Choose Wallpaper According to Your Space",
  cards: [
    {
      title: "Living Room Wallpaper",
      slug: "living-room-wallpaper",
    },
    {
      title: "Drawing Room Wallpaper",
      slug: "drawing-room-wallpaper",
    },
    {
      title: "Bedroom Wallpaper",
      slug: "bedroom-wallpaper",
    },
    {
      title: "Kids Room Wallpaper",
      slug: "kids-room-wallpaper",
    },
    {
      title: "Dining Room Wallpaper",
      slug: "dining-room-wallpaper",
    },
    {
      title: "Kitchen Wallpaper",
      slug: "kitchen-wallpaper",
    },
    {
      title: "Office Wallpaper",
      slug: "office-wallpaper",
    },
    {
      title: "Reception Wallpaper",
      slug: "reception-wallpaper",
    },
    {
      title: "Restaurant & Café Wallpaper",
      slug: "restaurant-cafe-wallpaper",
    },
    {
      title: "Hotel & Resort Wallpaper",
      slug: "hotel-resort-room-wallpaper",
    },
    {
      title: "Retail & Showroom Wallpaper",
      slug: "retail-showroom-wallpaper",
    },
    {
      title: "Temple & Spiritual Wallpaper",
      slug: "temple-spiritual-wallpaper",
    },
  ],
},

{
  title: "Design-Wise Collections",
  subtitle: "Explore Wallpaper by Design & Style",
  cards: [
    {
      title: "Nature & Landscape",
      slug: "nature-landscape",
    },
    {
      title: "Floral & Botanical",
      slug: "floral-botanical",
    },
    {
      title: "Abstract Art",
      slug: "abstract-art",
    },
    {
      title: "Geometric",
      slug: "geometric",
    },
    {
      title: "Marble & Stone",
      slug: "marble-stone",
    },
    {
      title: "Wood & Concrete",
      slug: "wood-concrete",
    },
    {
      title: "Luxury Classic",
      slug: "luxury-classic",
    },
    {
      title: "Indian Heritage",
      slug: "indian-heritage",
    },
    {
      title: "Islamic Art",
      slug: "islamic-art",
    },
    {
      title: "Spiritual Art",
      slug: "spiritual-art",
    },
    {
      title: "Kids & Cartoon",
      slug: "kids-cartoon",
    },
    {
      title: "World Maps",
      slug: "world-maps",
    },
    {
      title: "Cityscapes",
      slug: "cityscapes",
    },
    {
      title: "Architecture",
      slug: "architecture",
    },
    {
      title: "Birds & Animals",
      slug: "birds-animals",
    },
    {
      title: "Texture & Minimal",
      slug: "texture-minimal",
    },
    {
      title: "Embroidery Art",
      slug: "embroidery-art",
    },
    {
      title: "3D Illusion",
      slug: "3d-illusion",
    },
  ],
  
},

{
  title: "Premium Special Collections",
  subtitle: "Exclusive Wallpaper & Architectural Wall Art",
  cards: [
    {
      title: "Signature Walls™",
      slug: "signature-walls",
    },
    {
      title: "Heritage Loom™",
      slug: "heritage-loom",
    },
    {
      title: "NatureCanvas™",
      slug: "nature-canvas",
    },
    {
      title: "Royale Walls™",
      slug: "royale-walls",
    },
    {
      title: "Artisan Walls™",
      slug: "artisan-walls",
    },
    {
      title: "CorporateCanvas™",
      slug: "corporate-canvas",
    },
    {
      title: "LittleDreams™",
      slug: "little-dreams",
    },
    {
      title: "DivineWalls™",
      slug: "divine-walls",
    },
    {
      title: "Hotelique™",
      slug: "hotelique",
    },
    {
      title: "WallMuse™",
      slug: "wall-muse",
    },
  ],
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
    COLLECTION ROWS
========================= */}

<div className="shop-category-page__collections">

  {shopCollections.map((collection) => (
    <section
      className="shop-category-page__collection"
      key={collection.title}
    >

      {/* COLLECTION HEADING */}

      <div className="shop-category-page__collection-heading">

        <h3>
          {collection.title}
        </h3>

        <p>
          {collection.subtitle}
        </p>

      </div>


      {/* HORIZONTAL CARDS */}

      <div className="shop-category-page__card-row">

        {collection.cards.map((card) => (

          <NavLink
            key={card.slug}
            to={`/shop/${card.slug}`}
            className="shop-category-page__small-card"
          >

            {/* IMAGE — BAAD MEIN */}
            <div className="shop-category-page__small-card-image">
            </div>


            {/* CARD INFO */}

            <div className="shop-category-page__small-card-info">

              <h4>
                {card.title}
              </h4>

              <span>
                Explore →
              </span>

            </div>

          </NavLink>

        ))}

      </div>

    </section>
  ))}

</div>


        </div>

      </section>

    </main>
  );
}