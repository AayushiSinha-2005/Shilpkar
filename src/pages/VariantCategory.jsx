import { Link, Navigate, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductCategory.css";

export default function VariantCategory() {
  const { category, product, item } = useParams();

  const section = products[category];

  if (!section) {
    return <Navigate to="/solutions" replace />;
  }

  const categoryData = section.categories?.[product];

  if (!categoryData) {
    return <Navigate to={`/solutions/${category}`} replace />;
  }

  const selectedProduct = categoryData.products.find(
    (p) => p.slug === item
  );

  if (!selectedProduct) {
    return (
      <Navigate
        to={`/solutions/${category}/${product}`}
        replace
      />
    );
  }

  return (
    <div className="product-category">

      {/* HERO */}

      <section className="product-category__hero">
        <div className="container">

          <span className="eyebrow">
            {categoryData.title}
          </span>

          <h1>{selectedProduct.title}</h1>

          <p>
            Choose your preferred lighting option.
          </p>

        </div>
      </section>

      {/* GRID */}

      <section className="product-category__section">
        <div className="container">

          <div className="product-category__grid">

            {(selectedProduct.variants || []).map((variant) => (

              <Link
                key={variant.slug}
                className="product-card"
                to={`/solutions/${category}/${product}/${item}/${variant.slug}`}
              >

                <div className="product-card__image">

                  <div className="product-card__placeholder">

                    <span>SHILPKAR FACTORY</span>

                    <small>Image Coming Soon</small>

                  </div>

                </div>

                <div className="product-card__content">

                  <h2>{variant.title}</h2>

                  <p>
                    Premium lighting solution for luxury interiors.
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