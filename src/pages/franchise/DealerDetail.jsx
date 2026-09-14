import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import "./DealerDetail.css";

/* =====================================================
   DEALER DATA
   ===================================================== */

const dealers = {
  "dealer-1": {
    number: "01",
    name: "OINDRILA CHAKRABORTY",
    company: "Archi Services",

    business: {
      type: "Individual",
      experience: "10 Years",
      currentBusiness: "Interior Designing",
    },

    office: {
      address: "1 D D Mondal Ghat Road",
      city: "Kolkata",
      state: "West Bengal",
      pincode: "700076",
    },

    contact: {
      mobile: "8583889252",
      email: "oindrila.banerjee14@gmail.com",
    },

    image: "/images/dealer-1.jpg",
  },

  "dealer-2": {
    number: "02",
    name: "N. RAMESH BABU",
    company: "Eden Marketing",

    business: {
      type: "Firm",
      experience: "5 Years",
      currentBusiness: "—",
    },

    office: {
      address: "1-57-6/40, NH16, Tikkathota Maddilapalem",
      city: "Visakhapatnam",
      state: "",
      pincode: "530022",
    },

    contact: {
      mobile: "9291747777",
      email: "edenmarketingvizag@gmail.com",
    },

    image: "/images/dealer-2.jpg",
  },

  "dealer-3": {
    number: "03",
    name: "M. SUJENDRAN",
    company: "Magnific Builders and Interiors",

    business: {
      type: "Individual",
      experience: "10 Years",
      currentBusiness: "—",
    },

    office: {
      address: "#40, 41, Shanmuga Complex, 1st Floor",
      city: "Chennai - Guindy",
      state: "",
      pincode: "600073",
    },

    contact: {
      mobile: "9884156537",
      email: "sujendran5@gmail.com",
    },

    image: "/images/dealer-3.jpg",
  },

  "dealer-4": {
    number: "04",
    name: "SHOAIB",
    company: "D.D Decor",

    business: {
      type: "—",
      experience: "—",
      currentBusiness: "—",
    },

    office: {
      address: "Aamwala Polyclinic",
      city: "Dehradun",
      state: "",
      pincode: "248001",
    },

    contact: {
      mobile: "7906981293",
      email: "muhammadshoaib12311@gmail.com",
    },

    image: "/images/dealer-4.jpg",
  },

  "dealer-5": {
    number: "05",
    name: "UPENDRA SHARMA",
    company: "Woodtech Furniture Services",

    business: {
      type: "—",
      experience: "—",
      currentBusiness: "—",
    },

    office: {
      address: "Sanjay Colony, G No-15",
      city: "Faridabad",
      state: "",
      pincode: "121003",
    },

    contact: {
      mobile: "9971866230",
      email: "sharma16th@gmail.com",
    },

    image: "/images/dealer-5.jpg",
  },

  "dealer-6": {
    number: "06",
    name: "VINOD BANSAL",
    company: "Royal Builders & Suppliers",

    business: {
      type: "—",
      experience: "10 Years+",
      currentBusiness: "Interior & Exterior",
    },

    office: {
      address: "—",
      city: "Bulandshahr",
      state: "",
      pincode: "203001",
    },

    contact: {
      mobile: "9979995723",
      email: "vinodbansal86@gmail.com",
    },

    image: "/images/dealer-6.jpg",
  },
};

/* =====================================================
   REUSABLE SECTION
   ===================================================== */

function DealerInfoCard({ title, children, delay = 0 }) {
  return (
    <motion.div
      className="dealer-info-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="dealer-info-card__title">
        {title}
      </div>

      <div className="dealer-info-grid">
        {children}
      </div>
    </motion.div>
  );
}


/* =====================================================
   REUSABLE INFORMATION ITEM
   ===================================================== */

function DealerInfoItem({
  label,
  value,
  full = false,
  type = "text",
}) {
  if (!value || value === "—") {
    return (
      <div
        className={`dealer-info-item ${
          full ? "dealer-info-item--full" : ""
        }`}
      >
        <span>{label}</span>
        <strong>—</strong>
      </div>
    );
  }

  return (
    <div
      className={`dealer-info-item ${
        full ? "dealer-info-item--full" : ""
      }`}
    >
      <span>{label}</span>

      {type === "mobile" ? (
        <a href={`tel:${value}`}>{value}</a>
      ) : type === "email" ? (
        <a href={`mailto:${value}`}>{value}</a>
      ) : (
        <strong>{value}</strong>
      )}
    </div>
  );
}


/* =====================================================
   MAIN PAGE
   ===================================================== */

export default function DealerDetail() {
  const { dealerId } = useParams();

  const dealer = dealers[dealerId];

  /* =========================
     DEALER NOT FOUND
  ========================= */

  if (!dealer) {
    return (
      <main className="dealer-detail-page">

        <div className="dealer-not-found">

          <span>404</span>

          <h1>Dealer Not Found</h1>

          <Link to="/franchise/dealers">
            BACK TO DEALERS
          </Link>

        </div>

      </main>
    );
  }


  return (
    <main className="dealer-detail-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="dealer-detail-hero">

        <div className="dealer-detail-hero__image">
          <img
            src={dealer.image}
            alt={`${dealer.name} - Shilpkar Dealer`}
          />
        </div>

        <div className="dealer-detail-hero__overlay" />


        <div className="dealer-detail-hero__content">

          <div className="dealer-detail-eyebrow">
            <span />
            AUTHORIZED SHILPKAR DEALER
            <span />
          </div>


          <div className="dealer-number">
            {dealer.number}
          </div>


          <h1>
            {dealer.name}
          </h1>


          <p>
            {dealer.company}
          </p>


          <div className="dealer-location">
            {dealer.office.city}

            {dealer.office.state
              ? `, ${dealer.office.state}`
              : ""}
          </div>

        </div>

      </section>


      {/* =================================================
          DEALER INFORMATION
      ================================================= */}

      <section className="dealer-detail-section">

        <div className="dealer-detail-container">


          {/* SECTION HEADING */}

          <div className="dealer-detail-heading">

            <div className="dealer-detail-eyebrow">
              <span />
              DEALER PROFILE
              <span />
            </div>


            <h2>
              Dealer <span>Information</span>
            </h2>


            <div className="dealer-detail-line" />

          </div>


          {/* =================================================
              BUSINESS DETAILS
          ================================================= */}

          <DealerInfoCard
            title="BUSINESS DETAILS"
            delay={0}
          >

            <DealerInfoItem
              label="DEALER NAME"
              value={dealer.name}
            />

            <DealerInfoItem
              label="FIRM / COMPANY"
              value={dealer.company}
            />

            <DealerInfoItem
              label="BUSINESS TYPE"
              value={dealer.business.type}
            />

            <DealerInfoItem
              label="YEARS OF EXPERIENCE"
              value={dealer.business.experience}
            />

            <DealerInfoItem
              label="CURRENT BUSINESS"
              value={dealer.business.currentBusiness}
              full
            />

          </DealerInfoCard>


          {/* =================================================
              OFFICE DETAILS
          ================================================= */}

          <DealerInfoCard
            title="OFFICE DETAILS"
            delay={0.1}
          >

            <DealerInfoItem
              label="OFFICE / SHOP ADDRESS"
              value={dealer.office.address}
              full
            />

            <DealerInfoItem
              label="CITY"
              value={dealer.office.city}
            />

            <DealerInfoItem
              label="STATE"
              value={dealer.office.state}
            />

            <DealerInfoItem
              label="PINCODE"
              value={dealer.office.pincode}
            />

          </DealerInfoCard>


          {/* =================================================
              CONTACT DETAILS
          ================================================= */}

          <DealerInfoCard
            title="CONTACT DETAILS"
            delay={0.2}
          >

            <DealerInfoItem
              label="MOBILE"
              value={dealer.contact.mobile}
              type="mobile"
            />

            <DealerInfoItem
              label="EMAIL"
              value={dealer.contact.email}
              type="email"
            />

          </DealerInfoCard>


          {/* =================================================
              BACK BUTTON
          ================================================= */}

          <div className="dealer-detail-back">

            <Link to="/franchise/dealers">

              <span>←</span>

              BACK TO ALL DEALERS

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}