import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Dealers.css";

const dealers = [
  {
    id: "dealer-1",
    number: "01",
    name: "OINDRILA CHAKRABORTY",
    city: "Kolkata",
    state: "West Bengal",
    company: "Archi Services",
    image: "/images/dealer-1.jpg",
  },

  {
    id: "dealer-2",
    number: "02",
    name: "N. RAMESH BABU",
    city: "Visakhapatnam",
    state: "",
    company: "Eden Marketing",
    image: "/images/dealer-2.jpg",
  },

  {
    id: "dealer-3",
    number: "03",
    name: "M. SUJENDRAN",
    city: "Chennai",
    state: "",
    company: "Magnific Builders and Interiors",
    image: "/images/dealer-3.jpg",
  },

  {
    id: "dealer-4",
    number: "04",
    name: "SHOAIB",
    city: "Dehradun",
    state: "",
    company: "D.D Decor",
    image: "/images/dealer-4.jpg",
  },

  {
    id: "dealer-5",
    number: "05",
    name: "UPENDRA SHARMA",
    city: "Faridabad",
    state: "",
    company: "Woodtech Furniture Services",
    image: "/images/dealer-5.jpg",
  },

  {
    id: "dealer-6",
    number: "06",
    name: "VINOD BANSAL",
    city: "Bulandshahr",
    state: "",
    company: "Royal Builders & Suppliers",
    image: "/images/dealer-6.jpg",
  },
];

export default function Dealers() {
  return (
    <main className="dealers-page">

      {/* =========================
          DEALERS
      ========================= */}
      <section className="dealers-list">

        <div className="container">

          {/* Small Header */}
          <motion.div
            className="dealers-section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="dealers-section-eyebrow">
              <span />
              OUR DEALER NETWORK
              <span />
            </div>

            <h1>
              Our <span>Dealers</span>
            </h1>

            <div className="dealers-section-line" />
          </motion.div>


          {/* Dealer Cards */}
          <div className="dealers-grid">

            {dealers.map((dealer, index) => (

              <motion.div
                key={dealer.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  to={`/franchise/dealers/${dealer.id}`}
                  className="dealer-card"
                >

                  <div className="dealer-card__image">

                    <img
                      src={dealer.image}
                      alt={dealer.name}
                    />

                    <div className="dealer-card__overlay" />

                    <span className="dealer-card__number">
                      {dealer.number}
                    </span>

                  </div>


                  <div className="dealer-card__content">

                    <div className="dealer-card__label">
                      AUTHORIZED DEALER
                    </div>

                    <h3>
                      {dealer.name}
                    </h3>

                    <div className="dealer-card__location">
                      <span>⌖</span>
                      {dealer.city}, {dealer.state}
                    </div>

                    <div className="dealer-card__bottom">
                      <span>VIEW DEALER</span>
                      <strong>→</strong>
                    </div>

                  </div>

                </Link>
              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}