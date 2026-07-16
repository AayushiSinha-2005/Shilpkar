import SplitText from '../Animations/SplitText';
import './PageBanner.css';

export default function PageBanner({ eyebrow, title, image, height = '58vh' }) {
  return (
    <section className="page-banner" style={{ height }}>
      <img src={image} alt="" className="page-banner__img" />
      <div className="page-banner__scrim" />
      <div className="page-banner__content container">
        {eyebrow && <p className="eyebrow page-banner__eyebrow">{eyebrow}</p>}
        <SplitText text={title} as="h1" className="page-banner__title" />
      </div>
    </section>
  );
}
