import React, { useState } from "react";
import "./QuotationModal.css";

export default function QuotationModal({
  open,
  onClose,
  service,
  category,
  type,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    width: "",
    height: "",
    unit: "Feet",
    message: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enquiry = {
      service,
      category,
      type,
      ...form,
    };

    console.log("QUOTATION ENQUIRY:", enquiry);

    // Backend API yahan baad mein connect karenge.

    alert("Your quotation request has been submitted.");

    onClose();

    setForm({
      name: "",
      phone: "",
      email: "",
      width: "",
      height: "",
      unit: "Feet",
      message: "",
    });
  };

  return (
    <div className="quotation-modal-overlay" onClick={onClose}>
      <div
        className="quotation-modal"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          type="button"
          className="quotation-modal__close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="quotation-modal__header">
          <span>GET QUOTATION</span>

          <h2>
            Tell us about your
            <br />
            <em>space.</em>
          </h2>

          <p>
            Share your requirements and dimensions.
            Our team will get back to you with a quotation.
          </p>
        </div>

        <div className="quotation-product">
          <small>PRODUCT</small>

          <strong>
            {type || category || service}
          </strong>

          <span>
            {[service, category, type]
              .filter(Boolean)
              .join(" • ")}
          </span>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="quotation-grid">

            <div className="quotation-field">
              <label>Name *</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="quotation-field">
              <label>Phone *</label>

             <input
  type="tel"
  name="phone"
  value={form.phone}
  onChange={handleChange}
  onInput={(e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  }}
  placeholder="10-digit phone number"
  inputMode="numeric"
  maxLength="10"
  pattern="[0-9]{10}"
  required
/>
            </div>

          </div>

          <div className="quotation-field">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
            />
          </div>

          <div className="quotation-dimensions">

            <div className="quotation-field">
              <label>Width *</label>

              <input
                type="number"
                name="width"
                value={form.width}
                onChange={handleChange}
                placeholder="Width"
                min="0"
                step="any"
                required
              />
            </div>

            <div className="quotation-field">
              <label>Height *</label>

              <input
                type="number"
                name="height"
                value={form.height}
                onChange={handleChange}
                placeholder="Height"
                min="0"
                step="any"
                required
              />
            </div>

            <div className="quotation-field">
              <label>Unit</label>

              <select
                name="unit"
                value={form.unit}
                onChange={handleChange}
              >
                <option value="Feet">Feet</option>
                <option value="Inches">Inches</option>
                <option value="CM">CM</option>
              </select>
            </div>

          </div>

          <div className="quotation-field">
            <label>Message</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your requirement..."
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="quotation-submit"
          >
            Submit Enquiry
            <span>→</span>
          </button>

        </form>

      </div>
    </div>
  );
}