import { Link, useParams, Navigate } from "react-router-dom";
import wallpaperCategories from "../../data/wallpaperCategories";
import "./WallpaperCategory.css";

export default function WallpaperCategory() {
  const { categorySlug } = useParams();

  const category = wallpaperCategories[categorySlug];

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="wallpaper-category">

      {/* HERO */}

      <section className="wallpaper-category__hero">
        <div className="container">

          <span className="eyebrow">
            SHOP BY CATEGORY
          </span>

          <h1>{category.title}</h1>

          <div className="wallpaper-category__line"></div>

          <p>{category.description}</p>

        </div>
      </section>


      {/* PRODUCTS */}

      <section className="wallpaper-category__products">
        <div className="container">

          <div className="wallpaper-category__heading">
            <span className="eyebrow">
              THE COLLECTION
            </span>

            <h2>
              Explore Our <span>Pichwai Collection</span>
            </h2>
          </div>


          <div className="wallpaper-category__grid">

            {category.products.map((product, index) => (

              <Link
                key={product.slug}
                to={`/shop/${categorySlug}/${product.slug}`}
                className="wallpaper-card"
              >

                <div className="wallpaper-card__image">

                  {product.images?.[0] ? (
  <img
    src={product.images[0]}
    alt={product.title}
  />
) : (
                    <div className="wallpaper-card__placeholder">
                      <span>SHILPKAR FACTORY</span>
                      <small>Product Image Coming Soon</small>
                    </div>
                  )}

                  <div className="wallpaper-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>


                <div className="wallpaper-card__content">

                  <h3>{product.title}</h3>

                  <p>{product.description}</p>

                  <div className="wallpaper-card__bottom">

                    <span>
                      {product.price}
                    </span>

                    <strong>
                      Explore →
                    </strong>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>
      </section>

    </main>
  );
}