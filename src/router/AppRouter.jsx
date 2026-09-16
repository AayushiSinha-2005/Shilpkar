import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import ServiceDetail from "../pages/ServiceDetail.jsx";
import ServiceType from "../pages/ServiceType.jsx";

import Dealership from "../pages/franchise/Dealership.jsx";
import DealershipApplication from "../pages/franchise/DealershipApplication.jsx";
import Dealers from "../pages/franchise/Dealers.jsx";
import DealerDetail from "../pages/franchise/DealerDetail.jsx";
import Associate from "../pages/franchise/Associate.jsx";
import AssociateApplication from "../pages/franchise/AssociateApplication.jsx";
import InstallationTraining from "../pages/franchise/InstallationTraining.jsx";
import TrainingApplication from "../pages/franchise/TrainingApplication.jsx";
import TrainingDetail from "../pages/franchise/TrainingDetail.jsx";
import Gallery from "../pages/Gallery.jsx";import CircularGalleryPage from "../pages/CircularGalleryPage.jsx";
import Certifications from "../pages/company/Certifications";
import Contact from "../pages/Contact.jsx";
import WallpaperCategory from "../pages/shop/WallpaperCategory.jsx";
import WallpaperProduct from "../pages/shop/WallpaperProduct.jsx";
import ShopByCategory from "../pages/shop/ShopByCategory.jsx";
import Solutions from "../pages/Solutions.jsx";
import SolutionCategory from "../pages/SolutionCategory.jsx";
import ProductCategory from "../pages/ProductCategory.jsx";
import VariantCategory from "../pages/VariantCategory.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";
import NotFound from "../pages/NotFound.jsx";


function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.substring(1);

      let attempts = 0;

      const timer = setInterval(() => {
        const element = document.getElementById(id);

        if (element) {
          clearInterval(timer);

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        attempts++;

        if (attempts > 40) {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" in window ? "instant" : "auto",
    });
  }, [pathname, hash]);

  return null;
}
const variants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function Page({ children }) {
  return (
    <motion.div
      className="page"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default function AppRouter() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
<Routes location={location} key={location.pathname + location.hash}>          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/shop" element={<Page><ShopByCategory /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />

<Route
  path="/services/:serviceSlug/:categorySlug/:typeSlug"
  element={
    <Page>
      <ServiceDetail />
    </Page>
  }
/>  

<Route
  path="/services/:serviceSlug/:categorySlug"
  element={
    <Page>
      <ServiceDetail />
    </Page>
  }
/>
          <Route path="/gallery" element={<Page><Gallery /></Page>} />
          <Route path="/gallery/circular" element={<Page><CircularGalleryPage /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
          <Route
  path="/solutions"
  element={
    <Page>
      <Solutions />
    </Page>
  }
/>



<Route
  path="/solutions/:category"
  element={
    <Page>
      <SolutionCategory />
    </Page>
  }
/>

<Route
  path="/solutions/:category/:product"
  element={
    <Page>
      <ProductCategory />
    </Page>
  }
/>

<Route
  path="/shop/:categorySlug/:productSlug"
  element={
    <Page>
      <WallpaperProduct />
    </Page>
  }
/>

<Route
  path="/solutions/:category/:product/:item"
  element={
    <Page>
      <VariantCategory />
    </Page>
  }
/>

<Route
  path="/solutions/:category/:product/:item/:variant"
  element={
    <Page>
      <ProductDetail />
    </Page>
  }
/>

<Route
  path="/solutions/:category/:product/:item"
  element={
    <Page>
      <ProductDetail />
    </Page>
  }
/>
<Route
  path="/shop/:categorySlug"
  element={
    <Page>
      <WallpaperCategory />
    </Page>
  }
/>
<Route
  path="/franchise/dealership"
  element={
    <Page>
      <Dealership />
    </Page>
  }
/>

<Route
  path="/franchise/dealers"
  element={
    <Page>
      <Dealers />
    </Page>
  }
/>

<Route
  path="/franchise/dealers/:dealerId"
  element={
    <Page>
      <DealerDetail />
    </Page>
  }
/>

<Route
  path="/franchise/dealership-application"
  element={
    <Page>
      <DealershipApplication />
    </Page>
  }
/>

<Route
  path="/franchise/associate"
  element={
    <Page>
      <Associate />
    </Page>
  }
/>

<Route
  path="/franchise/associate-application"
  element={
    <Page>
      <AssociateApplication />
    </Page>
  }
/>

<Route
  path="/franchise/installation-training"
  element={
    <Page>
      <InstallationTraining />
    </Page>
  }
/>
<Route
  path="/franchise/installation-training/:trainingId"
  element={
    <Page>
      <TrainingDetail />
    </Page>
  }
/>

<Route
  path="/franchise/training-application"
  element={
    <Page>
      <TrainingApplication />
    </Page>
  }
/>

<Route
  path="/certifications"
  element={
    <Page>
      <Certifications />
    </Page>
  }
/>
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
