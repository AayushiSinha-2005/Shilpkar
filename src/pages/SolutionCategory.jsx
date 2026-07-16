import { Link, useParams, Navigate } from "react-router-dom";
import solutions from "../data/solutions";
import "./SolutionCategory.css";

export default function SolutionCategory() {
  const { category } = useParams();

  const data = solutions[category];

  if (!data) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="solution-category">

      <section className="solution-category__hero">
        <div className="container">

          <span className="eyebrow">
            Product Category
          </span>

          <h1>{data.title}</h1>

          <p>{data.description}</p>

        </div>
      </section>

      <section className="solution-category__products">
        <div className="container">

          <div className="solution-category__grid">

            {data.products.map((product) => (

              <Link
                key={product.slug}
                className="product-card"
                to={
                  category === "ceilings"
                    ? `/solutions/${category}/${product.slug}`
                    : `/solutions/${category}/${product.slug}/${product.slug}`
                }
              >

                <div className="product-card__image">

                  <div className="product-card__placeholder">
                    <span>SHILPKAR FACTORY</span>
                    <small>Image Coming Soon</small>
                  </div>

                </div>

                <div className="product-card__content">

                  <h2>{product.title}</h2>

                  <p>
                    Premium interior solution designed for luxury
                    residential and commercial spaces.
                  </p>

                  <span>
                    View Details →
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