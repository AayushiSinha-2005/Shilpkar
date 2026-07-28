import { useParams, Link } from "react-router-dom";
import SplitText from "../components/Effects/SplitText";
import serviceCategories from "../data/serviceCategories";
import "./ServiceCategory.css";

export default function ServiceCategory() {
  const { serviceSlug } = useParams();

  const service = serviceCategories[serviceSlug];

  if (!service) return <h2>Service Not Found</h2>;

  return (
    <section className="service-category-page">

      {/* Hero */}

      <div className="service-category-hero">

        <div className="container service-category-hero__grid">

          <div className="hero-left">

            <span className="eyebrow">
              {service.hero.title}
            </span>

            <SplitText
              as="h1"
              className="chisel"
              text={service.title}
            />

            <p className="hero-subtitle">
              {service.hero.subtitle}
            </p>

            <p className="hero-desc">
              {service.hero.description}
            </p>

          </div>

          <div className="hero-right">

            <img
              src={service.image}
              alt={service.title}
            />

          </div>

        </div>

      </div>

      {/* Product Categories */}

      <section className="service-types">

        <div className="container">

          <span className="eyebrow">
            PRODUCT CATEGORIES
          </span>

          <div className="types-grid">

            {service.categories.map((item) => (

              <Link
                key={item.slug}
                className="type-card"
                to={`/services/${serviceSlug}/${item.slug}`}
              >

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </section>
  );
}