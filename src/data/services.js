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
    anchor: "translucent",

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
    anchor: "print",

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
    anchor: "gloss",

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
    anchor: "panel",

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
    anchor: "stretch-ceiling",

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
    anchor: "textile-ceiling",

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
    anchor: "fiber-optic",

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
    anchor: "virtual-ceiling",
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

  {
  title: "SHILPKAR™ ARCHITECTURAL WALL ART™",
  anchor: "architectural-wall-art",
  subheading: "Customized Wallpaper & Premium Architectural Wall Décor",

  description:
    "ARCHITECTURAL WALL ART™ transforms ordinary walls into distinctive interior experiences through customized murals, seamless repeat patterns, exclusive embroidered wall coverings, and architectural decorative panels. Each solution can be developed according to wall dimensions, interior style, colour palette, customer preference, and project requirements.",

  categories: [
    {
      title: "BESPOKEWALL™",
      subtitle: "Customized Wallpaper & Personalized Murals",
      link: "/services/architectural-wall-art/bespokewall",
    },
    {
      title: "PATTERNLINE™",
      subtitle: "Seamless Repeat Pattern Wallpaper",
      link: "/services/architectural-wall-art/patternline",
    },
    {
      title: "EMBROWALL™",
      subtitle: "Exclusive Embroidery Wallpaper",
      link: "/services/architectural-wall-art/embrowall",
    },
    {
      title: "WALLSCULPT™",
      subtitle: "Architectural Wall Murals & Decorative Panels",
      link: "/services/architectural-wall-art/wallsculpt",
    },
  ],

image: images.architecturalWallArt.main,},

{
  title: "SHILPKAR™ MIRRORA™",
  anchor: "mirrora",
  subheading: "Illuminated Architectural Surface System",
  description:
    "MIRRORA™ is a flexible illuminated architectural surface system that transforms light, form and graphics into immersive architectural experiences. Designed for ceilings, suspended features, walls, partitions and decorative installations, MIRRORA™ combines translucent surfaces with integrated LED illumination, customized forms, printing and programmable lighting.",

  categories: [
    {
      title: "MIRRORA™ WAVE",
      subtitle: "Flowing Illuminated Architectural Forms",
      link: "/services/mirrora/wave",
    },
    {
      title: "MIRRORA™ RIBBON",
      subtitle: "Continuous Suspended Illuminated Forms",
      link: "/services/mirrora/ribbon",
    },
    {
      title: "MIRRORA™ LOOP",
      subtitle: "Circular & Elliptical Architectural Forms",
      link: "/services/mirrora/loop",
    },
    {
      title: "MIRRORA™ SPIRAL",
      subtitle: "Sculptural Hanging Illuminated Forms",
      link: "/services/mirrora/spiral",
    },
    {
      title: "MIRRORA™ WALL",
      subtitle: "Illuminated Vertical Architectural Features",
      link: "/services/mirrora/wall",
    },
    {
      title: "MIRRORA™ PRINT",
      subtitle: "Customized Printed Illuminated Surfaces",
      link: "/services/mirrora/print",
    },
    {
      title: "MIRRORA™ RGB",
      subtitle: "RGB & RGBW Colour-Changing Illumination",
      link: "/services/mirrora/rgb",
    },
    {
      title: "MIRRORA™ DYNAMIC",
      subtitle: "Programmable & Chasing Light Effects",
      link: "/services/mirrora/dynamic",
    },
  ],

  image: images.mirrora.main,
},

{
  title: "CLOUDWAVE™ TEXTILE CEILING",
  anchor: "cloudwave",

  subheading: "Premium Gloss Textile Ceiling Systems",

  description:
    "CLOUDWAVE™ is a premium decorative ceiling solution designed with sophisticated textile-inspired finishes and seamless architectural detailing. From high-gloss reflective surfaces to satin, textured, and custom-printed designs, CLOUDWAVE™ transforms ordinary ceilings into elegant visual features for luxury residential, hospitality, and commercial interiors.",

  categories: [
    {
      title: "CLOUDWAVE™ GLOSS",
      subtitle: "Premium High-Gloss Textile Ceiling",
      link: "/services/cloudwave/gloss",
    },
    {
      title: "CLOUDWAVE™ SATIN",
      subtitle: "Soft Silk-Like Textile Ceiling Finish",
      link: "/services/cloudwave/satin",
    },
    {
      title: "CLOUDWAVE™ TEXTURE",
      subtitle: "Decorative Textured Ceiling Finishes",
      link: "/services/cloudwave/texture",
    },
    {
      title: "CLOUDWAVE™ PRINT",
      subtitle: "Custom Printed Architectural Ceiling",
      link: "/services/cloudwave/print",
    },
  ],

  image: images.cloudwave.main,
},

   /* =========================================================
     10 — SHILPKAR™ PRISM
     ========================================================= */

  {
    title: "SHILPKAR™ PRISM",
    anchor: "prism",

    desc:
      "Architectural lighting and illuminated ceiling solutions designed to create refined, modern and immersive interior environments.",

    image: images.prism.main,

    types: [
      {
        title: "PRISM",
        subtitle: "Architectural Lighting & Ceiling System",
        link: "/services/prism/main",
      },
    ],

    pdf: "#",

    view: "/services/prism/main",
  },


  /* =========================================================
     11 — SHILPKAR™ 3D EPOXY FLOORINGS
     ========================================================= */

  {
    title: "SHILPKAR™ 3D EPOXY FLOORINGS",
    anchor: "epoxy-decors",

    desc:
      "Premium 3D epoxy flooring solutions designed to transform floors into seamless decorative architectural surfaces.",

    image: images.epoxyDecors.main,

    types: [
      {
        title: "3D EPOXY FLOORING",
        subtitle: "Custom Decorative Epoxy Flooring",
        link: "/services/epoxy-decors/main",
      },
    ],

    pdf: "#",

    view: "/services/epoxy-decors/main",
  },


  /* =========================================================
     12 — SHILPKAR™ MIRRORS
     ========================================================= */

  {
    title: "SHILPKAR™ MIRRORS",
    anchor: "mirrors",

    desc:
      "Premium decorative mirror solutions created to enhance interiors with reflection, depth, elegance and architectural character.",

    image: images.mirrors.main,

    types: [
      {
        title: "DECORATIVE MIRRORS",
        subtitle: "Custom Architectural Mirror Solutions",
        link: "/services/mirrors/main",
      },
    ],

    pdf: "#",

    view: "/services/mirrors/main",
  },


  /* =========================================================
     13 — SHILPKAR™ PILLARS
     ========================================================= */

  {
    title: "SHILPKAR™ PILLARS",
    anchor: "pillars",

    desc:
      "Decorative architectural pillar solutions designed to transform structural elements into distinctive interior features.",

    image: images.pillars.main,

    types: [
      {
        title: "DECORATIVE PILLARS",
        subtitle: "Architectural Pillar Finishing Solutions",
        link: "/services/pillars/main",
      },
    ],

    pdf: "#",

    view: "/services/pillars/main",
  },

/* =========================================================
   14 — SHILPKAR™ KITCHEN STRETCH CEILINGS
   ========================================================= */

{
  title: "SHILPKAR™ KITCHEN STRETCH CEILINGS",
  anchor: "kitchen-stretch-ceilings",

  desc:
    "Specialized stretch ceiling solutions for modern kitchens, combining seamless finishes, integrated lighting and easy-clean surfaces.",

  image: images.kitchenStretchCeilings.main,

  types: [
    {
      title: "KITCHEN STRETCH CEILING",
      subtitle: "Seamless Stretch Ceiling for Kitchens",
      link: "/services/kitchen-stretch-ceilings/main",
    },
  ],

  pdf: "#",

  view: "/services/kitchen-stretch-ceilings/main",
},

  /* =========================================================
     15 — SHILPKAR™ DOME STRETCH CEILINGS
     ========================================================= */
{
  title: "SHILPKAR™ DOME STRETCH CEILINGS",
  anchor: "dome-stretch-ceilings",

  desc:
    "Custom stretch ceiling systems designed for curved and dome-shaped architectural spaces with seamless visual continuity.",

  image: images.domeStretchCeilings.main,

  types: [
    {
      title: "DOME STRETCH CEILING",
      subtitle: "Custom Curved & Dome Ceiling System",
      link: "/services/dome-stretch-ceilings/main",
    },
  ],

  pdf: "#",

  view: "/services/dome-stretch-ceilings/main",
},

  /* =========================================================
   16 — SHILPKAR™ RESTAURANT DECORS
   ========================================================= */

{
  title: "SHILPKAR™ RESTAURANT DECORS",
  anchor: "restaurant-decors",

  desc:
    "Complete decorative ceiling, wall and lighting solutions designed to create distinctive restaurant environments and memorable dining experiences.",

  image: images.restaurantDecors.main,

  types: [
    {
      title: "RESTAURANT DECOR",
      subtitle: "Premium Restaurant Interior Solutions",
      link: "/services/restaurant-decors/main",
    },
  ],

  pdf: "#",

  view: "/services/restaurant-decors/main",
},

/* =========================================================
   17 — SHILPKAR™ WALLSCULPT
   ========================================================= */

{
  title: "SHILPKAR™ WALLSCULPT",
  anchor: "wallsculpt",

  desc:
    "Architectural wall sculpture solutions that bring texture, depth, artistic expression and dimensional character to interior spaces.",

  image: images.wallsculpt.main,

  types: [
    {
      title: "WALLSCULPT",
      subtitle: "Architectural Wall Sculptures & Panels",
      link: "/services/wallsculpt/main",
    },
  ],

  pdf: "#",

  view: "/services/wallsculpt/main",
},

];

export default services;