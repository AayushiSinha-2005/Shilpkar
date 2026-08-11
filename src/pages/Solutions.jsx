import { Link } from "react-router-dom";
import solutions from "../data/solutions";
import "./Solutions.css";

export default function Solutions() {
  return (
    <div className="solutions-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="solutions-hero">
        <div className="container">

          <span className="eyebrow">
            OUR SOLUTIONS
          </span>

          <h1>
            Explore Our <span>Interior Solutions</span>
          </h1>

          <div className="solutions-hero-line"></div>

          <p>
            Discover premium ceiling, wall and flooring solutions
            designed to transform residential, commercial and
            hospitality spaces.
          </p>

        </div>
      </section>


      {/* =========================
          CATEGORY SHOWCASE
      ========================== */}

      <section className="solutions-showcase">

        <div className="container">

          <div className="solutions-section-heading">

            <div>
              <span className="solutions-eyebrow">
                SHILPKAR FACTORY
              </span>

              <h2>
                Built For <span>Exceptional Spaces.</span>
              </h2>
            </div>

            <p>
              Explore our curated range of interior solutions,
              developed for modern architecture and premium spaces.
            </p>

          </div>


          <div className="solutions-category-grid">

            {Object.entries(solutions).map(([slug, item]) => (

              <Link
                key={slug}
                to={`/solutions/${slug}`}
                className="solution-category-card"
              >

                {/* IMAGE */}

                <div className="solution-category-card__image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="solution-category-card__overlay"></div>

                  <span className="solution-category-card__number">
                    {item.label}
                  </span>

                  <span className="solution-category-card__explore">
                    EXPLORE →
                  </span>

                </div>


                {/* CONTENT */}

                <div className="solution-category-card__content">

                  <div>

                    <span className="solution-category-card__label">
                      INTERIOR SOLUTIONS
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                  <p>
                    {item.description}
                  </p>


                  <div className="solution-category-card__footer">

                    <span>
                      {item.products.length} Solutions
                    </span>

                    <span className="solution-arrow">
                      →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =========================
          PRODUCT RANGE
      ========================== */}

      <section className="solutions-range">

        <div className="container">

          <div className="solutions-range__inner">

            <span className="solutions-eyebrow">
              COMPLETE INTERIOR RANGE
            </span>

            <h2>
              One Factory.
              <br />
              <span>Multiple Possibilities.</span>
            </h2>

            <p>
              From statement ceilings to premium wall finishes and
              distinctive flooring systems, explore solutions designed
              to bring creativity, functionality and finish together.
            </p>

            <div className="solutions-range__stats">

              <div>
                <strong>03</strong>
                <span>Core Categories</span>
              </div>

              <div>
                <strong>17+</strong>
                <span>Product Solutions</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Complete Ecosystem</span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}