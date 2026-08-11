import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProductInformation from "../../components/Wallpaper/ProductInformation";
import wallpaperCategories from "../../data/wallpaperCategories";
import "./WallpaperProduct.css";

const materials = [
  {
    name: "Standard Paper",
    price: 129,
    gsm: "200g",
    finish: "Smooth Matte",
    quality: "PASTE THE PAPER",
    features: ["PVC-Free", "Non-Toxic Inks", "Matte Finish", "Scratch Resistant", "Ceiling Safe"],
  },
  {
    name: "Canvas Paper",
    price: 169,
    gsm: "200g",
    finish: "Fabric Based",
    quality: "PASTE THE PAPER",
    features: ["Fabric Canvas", "Artistic Depth", "Sponge Cleanable", "Tear Resistant", "Matte Finish"],
  },
  {
    name: "Premium Paper",
    price: 179,
    gsm: "260g",
    finish: "Feather Finish",
    quality: "PASTE THE PAPER",
    features: ["Feather Finish", "Superior Durability", "Scratch Resistant", "Sponge Cleanable"],
  },
  {
    name: "Brush Stroke",
    price: 239,
    gsm: "240g",
    finish: "Stroke Textured",
    quality: "PASTE THE PAPER",
    features: ["Polyester Fabric", "Brush Strokes", "Textile Back", "DURA Ink Layer"],
  },
  {
    name: "Gold Line",
    price: 289,
    gsm: "280g",
    finish: "Golden Threads",
    quality: "PASTE THE PAPER",
    features: ["Non-Woven Fabric", "Natural Fiber", "PVC-Free", "Commercial & Residential"],
  },
  {
    name: "Metallic Pearl",
    price: 299,
    gsm: "240g",
    finish: "Pearl Luster",
    quality: "PASTE THE PAPER",
    features: ["Metallic Luster", "Non-Woven", "Vibrant Colors", "PVC-Free"],
  },
  {
    name: "Peel and Stick",
    price: 209,
    gsm: "280g",
    finish: "Grain Texture",
    quality: "PEEL & STICK",
    features: ["Self-Adhesive", "Fully Removable", "Renter-Friendly", "Repositionable"],
  },
  {
    name: "Peel & Stick Fabric",
    price: 209,
    gsm: "300g",
    finish: "Soft Fabric",
    quality: "PEEL & STICK",
    features: ["Fabric-Based", "Self-Adhesive", "Fully Removable", "PVC-Free"],
  },
];

export default function WallpaperProduct() {
  const { categorySlug, productSlug } = useParams();

  const category = wallpaperCategories[categorySlug];

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const product = category.products.find(
    (item) => item.slug === productSlug
  );

  if (!product) {
    return <Navigate to={`/shop/${categorySlug}`} replace />;
  }

  // =========================
  // CALCULATOR STATE
  // =========================

  const [unit, setUnit] = useState("inches");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);
  const [preview, setPreview] = useState(false);

  // =========================
  // AREA CALCULATION
  // =========================

  const widthNumber = Number(width);
  const heightNumber = Number(height);

  let squareFeet = 0;

  if (widthNumber > 0 && heightNumber > 0) {
    if (unit === "inches") {
      squareFeet = (widthNumber * heightNumber) / 144;
    }

    if (unit === "cm") {
      squareFeet = (widthNumber * heightNumber) / 929.0304;
    }

    if (unit === "feet") {
      squareFeet = widthNumber * heightNumber;
    }
  }

  const totalPrice = squareFeet * selectedMaterial.price;

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })}`;
  };

  return (
    <main className="wallpaper-product">

      {/* =========================
          PRODUCT MAIN AREA
      ========================= */}

      <section className="wallpaper-product__top">

        <div className="container">

          <div className="wallpaper-product__layout">

            {/* =========================
                LEFT — PRODUCT IMAGE
            ========================= */}

            <div className="wallpaper-product__gallery">

              <div className="wallpaper-product__main-image">

                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                  />
                ) : (
                  <div className="wallpaper-product__placeholder">
                    <span>SHILPKAR FACTORY</span>
                    <small>Product Image Coming Soon</small>
                  </div>
                )}

              </div>

              <div className="wallpaper-product__thumbnails">

                <div className="wallpaper-product__thumb">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  )}
                </div>

                <div className="wallpaper-product__thumb" />
                <div className="wallpaper-product__thumb" />
                <div className="wallpaper-product__thumb" />

              </div>

            </div>


            {/* =========================
                RIGHT — CALCULATOR
            ========================= */}

            <div className="wallpaper-product__calculator-box">

              <div className="wallpaper-product__calculator-header">

                <h2>
                  Enter Dimensions (W × H)
                </h2>

                <button
                  type="button"
                  className="wallpaper-product__wishlist"
                >
                  ♡ <span>Add to Wishlist</span>
                </button>

              </div>


              {/* UNIT SELECTOR */}

              <div className="wallpaper-product__units">

                <button
                  type="button"
                  className={unit === "inches" ? "active" : ""}
                  onClick={() => setUnit("inches")}
                >
                  Inches
                </button>

                <button
                  type="button"
                  className={unit === "cm" ? "active" : ""}
                  onClick={() => setUnit("cm")}
                >
                  Cm
                </button>

                <button
                  type="button"
                  className={unit === "feet" ? "active" : ""}
                  onClick={() => setUnit("feet")}
                >
                  Feet
                </button>

              </div>


              {/* DIMENSIONS */}

              <div className="wallpaper-product__dimensions">

                <div className="dimension-field">

                  <label>Width</label>

                  <div className="dimension-input">

                    <input
                      type="number"
                      min="0"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Enter width"
                    />

                    <span>
                      {unit === "inches"
                        ? "in"
                        : unit === "cm"
                        ? "cm"
                        : "ft"}
                    </span>

                  </div>

                </div>


                <div className="dimension-field">

                  <label>Height</label>

                  <div className="dimension-input">

                    <input
                      type="number"
                      min="0"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Enter height"
                    />

                    <span>
                      {unit === "inches"
                        ? "in"
                        : unit === "cm"
                        ? "cm"
                        : "ft"}
                    </span>

                  </div>

                </div>

              </div>


              {/* CALCULATED RESULT */}

              {squareFeet > 0 && (
                <div className="wallpaper-product__calculation">

                  <span>
                    {squareFeet.toFixed(2)} sq. ft
                  </span>

                  <strong>
                    {formatPrice(totalPrice)}
                  </strong>

                </div>
              )}


              {/* PREVIEW */}

              <div className="wallpaper-product__preview-row">

                <span>
                  Preview Wallpaper
                </span>

                <button
                  type="button"
                  className={`preview-toggle ${
                    preview ? "active" : ""
                  }`}
                  onClick={() => setPreview(!preview)}
                >
                  <span />
                </button>

              </div>


              {/* MATERIAL */}

              <div className="wallpaper-product__material-heading">

                <span>Paper Type</span>

                <button type="button">
                  Material details
                </button>

              </div>


              <div className="wallpaper-product__materials">

                {materials.map((material) => (

                  <button
                    type="button"
                    key={material.name}
                    className={
                      selectedMaterial.name === material.name
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setSelectedMaterial(material)
                    }
                  >

                    <strong>
                      {material.name}
                    </strong>

                    <span>
                      ₹{material.price}/ft²
                    </span>

                  </button>

                ))}

              </div>


              {/* SELECTED MATERIAL */}

              <div className="wallpaper-product__selected-material">

                <div>

                  <h3>
                    {selectedMaterial.name}
                  </h3>

                  <p>
                    {selectedMaterial.gsm} ·{" "}
                    {selectedMaterial.finish}
                  </p>

                </div>

                <div className="selected-material__price">

                  <strong>
                    ₹{selectedMaterial.price}/ft²
                  </strong>

                  <span>
                    {selectedMaterial.quality}
                  </span>

                </div>

              </div>


              {/* FEATURES */}

              <div className="wallpaper-product__features">

                {selectedMaterial.features.map((feature) => (

                  <span key={feature}>
                    {feature}
                  </span>

                ))}

              </div>


              {/* BUTTONS */}

              <div className="wallpaper-product__actions">

                <button
                  type="button"
                  className="wallpaper-product__add"
                >
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="wallpaper-product__sample"
                >
                  Buy Sample
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PRODUCT INFORMATION
      ========================= */}

      <ProductInformation product={product} />

    </main>
  );
}