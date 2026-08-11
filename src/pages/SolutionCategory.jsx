import { Link, useParams, Navigate } from "react-router-dom";
import solutions from "../data/solutions";
import products from "../data/products";
import "./SolutionCategory.css";

export default function SolutionCategory() {
  const { category } = useParams();

  const data = solutions[category];
  const productSection = products[category];

  if (!data) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="solution-category">

      {/* =========================
          HERO
      ========================== */}

      <section className="solution-category__hero">

        <div className="container">

          <span className="eyebrow">
            PRODUCT CATEGORY
          </span>

          <h1>{data.title}</h1>

          <p>{data.description}</p>

        </div>

      </section>


      {/* =========================
          PRODUCTS
      ========================== */}

      <section className="solution-category__products">

        <div className="container">

          <div className="solution-category__intro">

            <div>
              <span className="solutions-eyebrow">
                SHILPKAR FACTORY
              </span>

              <h2>
                Explore <span>{data.title}</span>
              </h2>
            </div>

            <p>
              Explore our range of premium {data.title.toLowerCase()}
              solutions designed for modern residential,
              commercial and hospitality spaces.
            </p>

          </div>


          <div className="solution-category__grid">

            {data.products.map((product, index) => {

              const productData =
                productSection?.categories?.[product.slug];

              const image =
                productData?.heroImage ||
                productData?.coverImage ||
                productData?.thumbnail ||
                "";

              const productCount =
                productData?.products?.length ||
                0;

              return (

                <Link
                  key={product.slug}
                  className="product-card"
                  to={`/solutions/${category}/${product.slug}`}
                >

                  {/* IMAGE */}

                  <div className="product-card__image">

                    {image ? (

                      <img
                        src={image}
                        alt={product.title}
                      />

                    ) : (

                      <div className="product-card__placeholder">

                        <span>
                          SHILPKAR FACTORY
                        </span>

                        <small>
                          {product.title}
                        </small>

                      </div>

                    )}

                    <div className="product-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>


                  {/* CONTENT */}

                  <div className="product-card__content">

                    <span className="product-card__eyebrow">
                      {data.title}
                    </span>

                    <h2>
                      {productData?.title || product.title}
                    </h2>

                    <p>
                      {productData?.shortDescription ||
                        productData?.description ||
                        `Premium ${product.title.toLowerCase()} solution designed for luxury interiors.`}
                    </p>


                    <div className="product-card__footer">

                      {productCount > 0 ? (
                        <span>
                          {productCount} Options
                        </span>
                      ) : (
                        <span>
                          Explore Product
                        </span>
                      )}

                      <strong>
                        →
                      </strong>

                    </div>

                  </div>

                </Link>

              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}