import { Link, Navigate, useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

export default function ProductDetail() {
 const { category, product, item } = useParams();

const section = products[category];

if (!section)
  return <Navigate to="/solutions" replace />;

let productData;
let selected;

/*
----------------------------------------
CEILINGS
----------------------------------------
URL:
solutions/ceilings/stretch-ceiling/3d-printed-stretch-ceiling
*/

if (category === "ceilings") {
  productData = section.categories?.[product];

  if (!productData)
    return <Navigate to={`/solutions/${category}`} replace />;

  selected = productData.products.find(
    (p) => p.slug === item
  );

  if (!selected)
    return <Navigate to={`/solutions/${category}/${product}`} replace />;
}

/*
----------------------------------------
WALLS & FLOORS
----------------------------------------
URL:
solutions/walls/stretch-wall/stretch-wall
*/

else {

  productData = section.categories?.[product];

  if (!productData)
    return <Navigate to={`/solutions/${category}`} replace />;

  selected = productData.products.find(
    (p) => p.slug === item
  );

  if (!selected)
    return <Navigate to={`/solutions/${category}`} replace />;
}


  return (
    <div className="product-detail">

      {/* HERO */}

      <section className="product-detail__hero">

        <div className="container">

          <div className="breadcrumb">

            <Link to="/">Home</Link>

            <span>/</span>

            <Link to="/solutions">Solutions</Link>

            <span>/</span>

            <Link to={`/solutions/${category}`}>
  {section.title}
</Link>

            <span>/</span>

            <Link to={`/solutions/${category}/${product}`}>
              {productData.title}
            </Link>

          </div>

          <h1>{selected.title}</h1>

          <p>
  {selected.shortDescription ||
    "Premium interior solution engineered for luxury residential and commercial interiors."}
</p>

        </div>

      </section>

      {/* IMAGE */}

      <section className="product-detail__image-section">

        <div className="container">

          <div className="product-image">

            <div className="placeholder">

              <h2>SHILPKAR FACTORY</h2>

              <p>Product Image Coming Soon</p>

            </div>

          </div>

        </div>

      </section>

      {/* DESCRIPTION */}

      <section className="product-detail__content">

        <div className="container content-grid">

          <div>

            <h2>Description</h2>

            <p>
  {selected.description ||
    "Detailed product description will be added soon."}
</p>

          </div>

          <div>

            <h2>Applications</h2>

            <ul>

{selected.applications.length ? (

selected.applications.map((app)=>(

<li key={app}>{app}</li>

))

):(

<li>Applications will be updated soon.</li>

)}

</ul>

          </div>

        </div>

      </section>

      {/* MORE OPTIONS */}

      <section className="more-options">

        <div className="container">

          <h2>Didn't find your preferred design?</h2>

          <p>
            Browse thousands of premium designs from
            our trusted partners.
          </p>

          <div className="option-buttons">

            <a
              href="https://lifencolors.in/collections/indian-traditional-wallpapers?srsltid=AfmBOopfdvSMx4p6uPZVs84TAiJW6sPyHizKwZ-Vzv_uRDltssVo3ehQ"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Browse Life N Colors
            </a>

            <a
              href="https://www.shutterstock.com/search/wall-mural?image_type=photo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Browse Shutterstock
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}