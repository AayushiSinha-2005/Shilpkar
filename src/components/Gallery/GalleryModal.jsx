import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './GalleryModal.css';

export default function GalleryModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="gallery-modal__card"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gallery-modal__close" onClick={onClose} aria-label="Close">×</button>
            <div className="gallery-modal__img">
              <img src={project.cover || project.image} alt={project.title} />
            </div>
            <div className="gallery-modal__body">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="gallery-modal__desc">{project.description}</p>
              {project.slug && (
                <Link to={`/project/${project.slug}`} className="gallery-modal__link" data-cursor="Open">
                  View Full Project →
                </Link>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
