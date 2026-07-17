import "./FeatureGrid.css";

export default function FeatureGrid({ title, cards }) {
  return (
    <section className="feature-grid">
      <div className="container">

        <h2 className="feature-grid__title">
          {title}
        </h2>

        <div className="feature-grid__cards">

          {cards.map((card, index) => (
            <div className="feature-grid__card" key={index}>

              <div className="feature-grid__icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}