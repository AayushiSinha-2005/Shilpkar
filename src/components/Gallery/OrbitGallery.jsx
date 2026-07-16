import { Link } from 'react-router-dom';
import './OrbitGallery.css';

/**
 * OrbitGallery — images arranged on a rotating orbit ring around a
 * central label, used as the gallery teaser on the home page.
 */
export default function OrbitGallery({ images, centerLabel = 'Our Work', centerTo = '/gallery' }) {
  const count = images.length;

  return (
    <div className="orbit-gallery">
      <div className="orbit-gallery__ring">
        {images.map((img, i) => {
          const angle = (360 / count) * i;
          return (
            <div
              className="orbit-gallery__item"
              key={img.id || i}
              style={{ '--angle': `${angle}deg` }}
            >
              <div className="orbit-gallery__item-inner">
                <img src={img.src} alt={img.alt || ''} loading="lazy" data-cursor="Explore" />
              </div>
            </div>
          );
        })}
      </div>
      <Link to={centerTo} className="orbit-gallery__center" data-cursor="Open">
        <span>{centerLabel}</span>
      </Link>
    </div>
  );
}
