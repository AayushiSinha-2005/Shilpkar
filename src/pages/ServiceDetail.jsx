import { useParams } from "react-router-dom";
import SplitText from "../components/Effects/SplitText";
import serviceDetails from "../data/serviceDetails";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { serviceSlug, categorySlug } = useParams();

  const service = serviceDetails?.[serviceSlug]?.[categorySlug];

  if (!service) {
    return <h2 style={{ padding: "120px 20px" }}>Service Not Found</h2>;
  }

  return (
    <div className="service-detail-page">

      {/* HERO */}

      <section className="service-detail-hero">

        <div className="container">

          <span className="eyebrow">
            {service.hero.subtitle}
          </span>

          <h1 className="chisel hero-title">
            {service.hero.title}
          </h1>

          <p>
            {service.hero.description}
          </p>

        </div>

      </section>

      {/* ZIG ZAG */}

      <section className="service-sections">

        <div className="container">

          {service.sections.map((item, index) => (

            <div
              key={item.title}
              className={`service-section ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >

              {/* IMAGE */}

              <div className="section-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              {/* CONTENT */}

              <div className="section-content">

                <span className="section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{item.title}</h2>

                <p>{item.description}</p>

                {/* SPECIFICATION CARDS */}

                <div className="detail-specs">

                  {item.specs?.map((spec) => (

                    <div
                      className="spec-card"
                      key={spec.label}
                    >
                      
                      <span>
                      {spec.label}
                      </span>

                      <h4>
                        {spec.value}
                      </h4>
                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}