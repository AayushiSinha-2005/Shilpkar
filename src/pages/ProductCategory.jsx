import { Link, Navigate, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductCategory.css";

export default function ProductCategory() {
  const { category, product } = useParams();

  const section = products[category];

  if (!section) {
    return <Navigate to="/solutions" replace />;
  }

  const categoryData = section.categories?.[product];
  if (!categoryData) {
    return <Navigate to={`/solutions/${category}`} replace />;
  }
  return (
    <div className="product-category">

      {/* HERO */}

      <section className="product-category__hero">

        <div className="container">

          <span className="eyebrow">
            {section.title}
          </span>

          <h1>{categoryData.title}</h1>

          <p>{categoryData.description}</p>

        </div>

      </section>

      {/* GRID */}

      <section className="product-category__section">

        <div className="container">

          <div className="product-category__grid">

            {categoryData.products.map((item) => (

              <Link
                key={item.slug}
                to={`/solutions/${category}/${product}/${item.slug}`}
                className="product-card"
              >

                <div className="product-card__image">

                  {item.heroImage ? (
                    <img
                      src={item.heroImage}
                      alt={item.title}
                    />
                  ) : (
                    <div className="product-card__placeholder">

                      <span>SHILPKAR FACTORY</span>

                      <small>Product Image Coming Soon</small>

                    </div>
                  )}

                </div>

                <div className="product-card__content">

                  <h2>{item.title}</h2>

                  <p>
                    {item.shortDescription ||
                      "Premium interior solution crafted with precision and installed across India."}
                  </p>

                  <span>
                    Explore Product →
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>
    </div>
  );
}