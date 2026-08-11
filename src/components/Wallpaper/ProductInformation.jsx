import { useState } from "react";

export default function ProductInformation({ product }) {
  const [open, setOpen] = useState(null);

  const sections = [
    {
      title: "Free Shipping",
      content:
        "We provide safe and reliable delivery for your custom wallpaper order. Production and dispatch details will be confirmed at the time of order.",
    },
    {
      title: "Free Customization",
      content:
        "Our wallpaper designs can be customized according to your wall size and design requirements. Final customization options will be confirmed with the project team.",
    },
    {
      title: "How to Measure",
      content:
        "Measure the complete width and height of the wall. Enter the dimensions in the calculator above to estimate the required area and price.",
    },
    {
      title: "How to Install",
      content:
        "The wallpaper is professionally installed according to the selected material. Installation requirements may vary depending on the selected paper type.",
    },
    {
      title: "More Information",
      content:
        "Product specifications, material details, customization requirements and other project information can be provided by the NOOH / Shilpkar team.",
    },
  ];

  const toggleSection = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="wallpaper-product__information">

      <div className="container">

        <div className="wallpaper-product__information-grid">

          {/* LEFT — PRODUCT DETAILS */}

          <div className="wallpaper-product__details">

            <span className="wallpaper-product__category">
              Product Details
            </span>

            <h2>
              {product.title}
            </h2>

            <div className="wallpaper-product__meta">

              <div>
                <strong>SKU</strong>
                <span>
                  {product.sku || "GD4322"}
                </span>
              </div>

              <div>
                <strong>Minimum Order Value</strong>
                <span>
                  {product.minimumOrder || "₹2,500"}
                </span>
              </div>

            </div>

            <p className="wallpaper-product__description">
              {product.description ||
                "A premium custom wallpaper designed to bring timeless artistry and character into your interiors."}
            </p>

          </div>


          {/* RIGHT — ACCORDIONS */}

          <div className="wallpaper-product__accordions">

            {sections.map((section, index) => (

              <div
                className={`wallpaper-product__accordion ${
                  open === index ? "is-open" : ""
                }`}
                key={section.title}
              >

                <button
                  type="button"
                  onClick={() => toggleSection(index)}
                >

                  <span>
                    {section.title}
                  </span>

                  <strong>
                    {open === index ? "−" : "+"}
                  </strong>

                </button>

                {open === index && (

                  <div className="wallpaper-product__accordion-content">

                    <p>
                      {section.content}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}