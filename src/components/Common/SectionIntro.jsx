import "./SectionIntro.css";
export default function SectionIntro({
  title,
  subtitle,
}) {
  return (
    <section className="franchise-intro">
      <div className="container">

        <div className="franchise-intro__content">

          <h2>{title}</h2>

          <p>{subtitle}</p>

        </div>

      </div>
    </section>
  );
}