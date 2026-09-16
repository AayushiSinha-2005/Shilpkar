import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import trainingData from "../../data/trainingData";
import "./TrainingDetail.css";

export default function TrainingDetail() {
  const { trainingId } = useParams();

  const training = trainingData[trainingId];

  if (!training) {
    return (
      <section className="training-detail-not-found">
        <div>
          <span>404</span>
          <h1>Training Program Not Found</h1>

          <Link to="/franchise/installation-training">
            Back to Training Programs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="training-detail">

      {/* HERO */}
      <section className="training-detail-hero">
        <div className="training-detail-container">

          <motion.div
            className="training-detail-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="training-detail-eyebrow">
              <span />
              {training.category}
              <span />
            </div>

            <div className="training-detail-number">
              {training.number}
            </div>

            <h1>
              {training.title}
            </h1>

            <div className="training-detail-line" />

            <p>
              {training.short}
            </p>
          </motion.div>

        </div>
      </section>


      {/* COURSE INFORMATION */}
      <section className="training-course-info">
        <div className="training-detail-container">

          <div className="training-info-grid">

            <div className="training-info-item">
              <span>ORGANISED BY</span>
              <strong>{training.organizedBy}</strong>
            </div>

            <div className="training-info-item">
              <span>TRAINING LOCATION</span>
              <strong>{training.trainingLocation}</strong>
            </div>

          </div>

        </div>
      </section>


      {/* COURSE OBJECTIVE */}
      <section className="training-objective">
        <div className="training-detail-container">

          <div className="training-detail-section-heading">
            <div className="training-detail-eyebrow">
              <span />
              COURSE OBJECTIVE
              <span />
            </div>

            <h2>
              What You Will
              <br />
              <em>Learn</em>
            </h2>

            <div className="training-detail-line" />
          </div>

          <p className="training-objective-text">
            {training.objective}
          </p>

        </div>
      </section>


      {/* 7 DAY TRAINING */}
      <section className="training-schedule">
        <div className="training-detail-container">

          <div className="training-detail-section-heading">
            <div className="training-detail-eyebrow">
              <span />
              7-DAY TRAINING PROGRAM
              <span />
            </div>

            <h2>
              Training
              <br />
              <em>Schedule</em>
            </h2>

            <div className="training-detail-line" />
          </div>


          <div className="training-days">

            {training.days.map((day, index) => (
              <motion.article
                className="training-day-card"
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
              >

                <div className="training-day-number">
                  {day.day}
                </div>

                <div className="training-day-content">

                  <div className="training-day-label">
                    DAY {day.day}
                  </div>

                  <h3>
                    {day.title}
                  </h3>

                  <ul>
                    {day.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <span>◆</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>


      {/* FACILITIES */}
      <section className="training-facilities">
        <div className="training-detail-container">

          <div className="training-detail-section-heading">
            <div className="training-detail-eyebrow">
              <span />
              TRAINING SUPPORT
              <span />
            </div>

            <h2>
              Facilities Provided
              <br />
              <em>by the Company</em>
            </h2>

            <div className="training-detail-line" />
          </div>


          <div className="training-facilities-grid">

            {training.facilities.map((facility, index) => (
              <motion.div
                className="training-facility-card"
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <span>0{index + 1}</span>

                <p>{facility}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* CERTIFICATION */}
      <section className="training-certification">
        <div className="training-detail-container">

          <div className="training-certification-box">

            <div className="training-detail-eyebrow">
              <span />
              {training.certificationTitle}
              <span />
            </div>

            <h2>
              Complete the Journey.
              <br />
              <em>Earn Your Certificate.</em>
            </h2>

            <p>
              {training.certificationText}
            </p>

            <div className="training-certificate-name">
              “{training.certificate}”
            </div>

            <div className="training-certification-line" />

            <p className="training-tagline">
              {training.tagline}
            </p>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="training-detail-cta">
        <div className="training-detail-container">

          <div className="training-cta-inner">

            <div>
              <span>READY TO BEGIN?</span>

              <h2>
                Start Your
                <br />
                <em>Training Journey</em>
              </h2>
            </div>

            <Link
              to="/franchise/training-application"
              className="training-cta-button"
            >
              APPLY FOR TRAINING
              <span>→</span>
            </Link>

          </div>

        </div>
      </section>


      {/* BACK */}
      <div className="training-back">
        <Link to="/franchise/installation-training">
          ← Back to All Training Programs
        </Link>
      </div>

    </main>
  );
}