import images from "./images.js";
import serviceDetails from "./serviceDetails.js";

const translucent =
  serviceDetails?.["stretch-ceiling"]?.["translucent"];

const printed =
  serviceDetails?.["stretch-ceiling"]?.["printed"];

const gloss =
  serviceDetails?.["stretch-ceiling"]?.["gloss"];

const panel =
  serviceDetails?.["stretch-ceiling"]?.["panel"];


const services = [

  /* =========================================================
     01 — SHILPKAR™ TRANSLUCENT
     ========================================================= */

  {
    title: "SHILPKAR™ TRANSLUCENT",

    desc:
      translucent?.hero?.description ||
      "Premium Translucent & Illuminated Stretch Ceiling System",

    image:
      translucent?.hero?.image ||
      images.translucent.main,

    types: [
      {
        title: "STATIC WHITE",
        subtitle: "Uniform Architectural White Illumination",
        link: "/services/stretch-ceiling/translucent/static-white",
      },
      {
        title: "CCT WHITE",
        subtitle: "Adjustable Warm to Cool White Lighting",
        link: "/services/stretch-ceiling/translucent/cct-white",
      },
      {
        title: "RGBW WHITE",
        subtitle: "Custom Colour & White Lighting Experience",
        link: "/services/stretch-ceiling/translucent/rgbw-white",
      },
      {
        title: "RGBW PIXEL + DMX WHITE",
        subtitle: "Programmable Animated Lighting Effects",
        link: "/services/stretch-ceiling/translucent/rgbw-pixel-dmx",
      },
    ],

    pdf: translucent?.pdf,

    view: "/services/stretch-ceiling/translucent",
  },


  /* =========================================================
     02 — SHILPKAR™ PRINT
     ========================================================= */

  {
    title: "SHILPKAR™ PRINT",

    desc:
      printed?.hero?.description ||
      "Premium Printed & Illuminated Stretch Ceiling System",

    image:
      printed?.hero?.image ||
      images.printed.main,

    types: [
      {
        title: "STATIC PRINT",
        subtitle: "Fixed Colour Temperature Illuminated Print Ceiling",
        link: "/services/stretch-ceiling/printed/static-print",
      },
      {
        title: "CCT PRINT",
        subtitle: "Adjustable Warm to Cool White Printed Ceiling",
        link: "/services/stretch-ceiling/printed/cct-print",
      },
      {
        title: "RGBW PRINT",
        subtitle: "Custom Colour & White Illuminated Print Ceiling",
        link: "/services/stretch-ceiling/printed/rgbw-print",
      },
      {
        title: "RGBW PIXEL + DMX PRINT",
        subtitle:
          "Programmable Animated Lighting for Immersive Ceiling Effects",
        link: "/services/stretch-ceiling/printed/rgbw-pixel-dmx-print",
      },
    ],

    pdf: printed?.pdf,

    view: "/services/stretch-ceiling/printed",
  },


  /* =========================================================
     03 — SHILPKAR™ GLOSS
     ========================================================= */

  {
    title: "SHILPKAR™ GLOSS",

    desc:
      gloss?.hero?.description ||
      "Premium High-Gloss Reflective Stretch Ceiling",

    image:
      gloss?.hero?.image ||
      images.gloss.main,

    types: [
      {
        title: "HIGH GLOSS",
        subtitle: "Mirror-Like Reflective Ceiling Finish",
        link: "/services/stretch-ceiling/gloss/high-gloss",
      },
    ],

    pdf: gloss?.pdf,

    view: "/services/stretch-ceiling/gloss",
  },


  /* =========================================================
     04 — SHILPKAR™ PANEL
     ========================================================= */

  {
    title: "SHILPKAR™ PANEL",

    desc:
      panel?.hero?.description ||
      "Premium Backlit Stretch Panel Lighting Systems",

    image:
      panel?.hero?.image ||
      images.panel.grid,

    types: [
      {
        title: "PANEL WHITE",
        subtitle: "Uniform Backlit White Panel Lighting",
        link: "/services/stretch-ceiling/panel/panel-white",
      },
      {
        title: "PANEL TUNABLE",
        subtitle: "Adjustable Warm-to-Cool White Lighting",
        link: "/services/stretch-ceiling/panel/panel-tunable",
      },
      {
        title: "PANEL PRINT",
        subtitle: "Custom Backlit Printed Panel Ceiling",
        link: "/services/stretch-ceiling/panel/panel-print",
      },
      {
        title: "PANEL RGBW",
        subtitle: "Dynamic Colour-Changing Panel Lighting",
        link: "/services/stretch-ceiling/panel/panel-rgbw",
      },
    ],

    pdf: panel?.pdf,

    view: "/services/stretch-ceiling/panel",
  },


  /* =========================================================
     05 — SHILPKAR™ STRETCH CEILING SYSTEMS
     ========================================================= */

  {
    title: "SHILPKAR™ Stretch Ceiling Systems",

    desc:
      "Premium stretch ceiling solutions created for modern residential, commercial and hospitality interiors with seamless finishes and integrated lighting options.",

    image: images.service1,

    types: [
      {
        title: "TRANSLUCENT",
        subtitle: "Premium Illuminated Stretch Ceiling",
        link: "/services/stretch-ceiling/translucent",
      },
      {
        title: "PRINT",
        subtitle: "Custom Printed Stretch Ceiling",
        link: "/services/stretch-ceiling/printed",
      },
      {
        title: "GLOSS",
        subtitle: "High-Gloss Reflective Stretch Ceiling",
        link: "/services/stretch-ceiling/gloss",
      },
      {
        title: "PANEL",
        subtitle: "Decorative Ceiling Panel System",
        link: "/services/stretch-ceiling/panel",
      },
    ],

    pdf: "/pdf/stretch-ceiling.pdf",

    view: "/services/stretch-ceiling/translucent",
  },


  /* =========================================================
     SHILPWAVE™ TEXTILE CEILING SYSTEMS
     ========================================================= */

  {
    title: "SHILPWAVE™ Textile Ceiling Systems",

    desc:
      "Contemporary textile ceiling concepts that bring softness, movement, depth and distinctive architectural character to premium interior spaces.",

    image: images.textile.main,

    types: [
      {
        title: "SHILPWAVE™ WAVE",
        subtitle: "Elegant Flowing Textile Ceiling",
        link: "/services/textile-ceiling/wave",
      },
      {
        title: "SHILPWAVE™ FRILL",
        subtitle: "Decorative Fabric Ceiling Design",
        link: "/services/textile-ceiling/frill",
      },
      {
        title: "SHILPWAVE™ SNAKE",
        subtitle: "Dynamic Curved Textile Ceiling",
        link: "/services/textile-ceiling/snake",
      },
      {
        title: "SHILPWAVE™ CUSTOM",
        subtitle: "Bespoke Textile Ceiling Solution",
        link: "/services/textile-ceiling/custom",
      },
    ],

    pdf: "/pdf/textile-ceiling.pdf",

    view: "/services/textile-ceiling/wave",
  },


  /* =========================================================
     FIBERSKY™ FIBER OPTIC STAR CEILING
     ========================================================= */

  {
    title: "FIBERSKY™ Fiber Optic Star Ceiling",

    desc:
      "Advanced fiber optic ceiling systems designed to create realistic star fields, animated twinkling effects, vibrant RGB lighting and immersive galaxy-inspired environments.",

    image: images.fiberOptic.main,

    types: [
      {
        title: "FIBERSKY™ STATIC",
        subtitle: "Realistic Starry Night Ceiling",
        link: "/services/fiber-optic/static",
      },
      {
        title: "FIBERSKY™ TWINKLE",
        subtitle: "Dynamic Twinkling Star Ceiling",
        link: "/services/fiber-optic/twinkle",
      },
      {
        title: "FIBERSKY™ RGB",
        subtitle: "Color-Changing RGB Star Ceiling",
        link: "/services/fiber-optic/rgb",
      },
      {
        title: "FIBERSKY™ GALAXY PRO",
        subtitle: "Immersive Milky Way & Galaxy Ceiling",
        link: "/services/fiber-optic/galaxy-pro",
      },
    ],

    pdf: "/pdf/fiber-optic.pdf",

    view: "/services/fiber-optic/static",
  },


  /* =========================================================
     SHILPVIRTUAL™
     ========================================================= */

  {
    title: "SHILPVIRTUAL™ Virtual Ceiling & Window",

    desc:
      "Premium illuminated virtual ceiling and window systems designed to introduce open skies, natural ambience, scenic views and immersive architectural experiences.",

    image: images.virtualCeiling.main,

    types: [
      {
        title: "SHILPVIRTUAL™ SKY",
        subtitle: "Illuminated Virtual Sky Ceiling",
        link: "/services/virtual-ceiling/virtual-sky",
      },
      {
        title: "SHILPVIRTUAL™ WINDOW",
        subtitle: "Realistic Illuminated Window System",
        link: "/services/virtual-ceiling/virtual-window",
      },
      {
        title: "SHILPVIRTUAL™ SUNLIGHT",
        subtitle: "Natural Sunlight Simulation",
        link: "/services/virtual-ceiling/virtual-sunlight",
      },
      {
        title: "SHILPVIRTUAL™ CUSTOM",
        subtitle: "Custom Virtual Ceiling & Window",
        link: "/services/virtual-ceiling/virtual-custom",
      },
    ],

    pdf: "/pdf/virtual-ceiling.pdf",

    view: "/services/virtual-ceiling/virtual-sky",
  },
];

export default services;