import { Link } from "react-router-dom";
import solutions from "../data/solutions";
import "./Solutions.css";

export default function Solutions() {
  return (
    <div className="solutions-page">

      {/* HERO */}

      <section className="solutions-hero">

        <div className="container">

          <span className="eyebrow">
            Product Solutions
          </span>

          <h1>
            Explore Our Interior Solutions
          </h1>

          <p>
            Discover our complete range of premium ceiling,
            wall and flooring solutions designed for luxury
            residential and commercial interiors.
          </p>

        </div>

      </section>

      {/* GRID */}

      <section className="solutions-grid-section">

        <div className="container">

          <div className="solutions-grid">

            {Object.entries(solutions).map(([slug, item]) => (

              <Link
                key={slug}
                to={`/solutions/${slug}`}
                className="solution-card"
              >

                <div className="solution-card__image">

                  <div className="solution-card__placeholder">

                    <span>SHILPKAR FACTORY</span>

                    <small>Image Coming Soon</small>

                  </div>

                </div>

                <div className="solution-card__content">

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                  <span>
                    Explore →
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