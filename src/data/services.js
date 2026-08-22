import images from "./images.js";

const services = [
  {
    title: "SHILPKAR™ Stretch Ceiling Systems",

    desc:
      "Premium stretch ceiling solutions created for modern residential, commercial and hospitality interiors with seamless finishes and integrated lighting options.",

    image: images.service1,

    types: [
      {
        title: "SHILPKAR™ TRANSLUCENT",
        subtitle: "Illuminated Translucent Ceiling System",
        link: "/services/stretch-ceiling/translucent",
      },
      {
        title: "SHILPKAR™ PRINT",
        subtitle: "Custom Printed Stretch Ceiling",
        link: "/services/stretch-ceiling/printed",
      },
      {
        title: "SHILPKAR™ GLOSS",
        subtitle: "High-Gloss Reflective Ceiling",
        link: "/services/stretch-ceiling/gloss",
      },
      {
        title: "SHILPKAR™ PANEL",
        subtitle: "Decorative Ceiling Panel System",
        link: "/services/stretch-ceiling/panel",
      },
    ],

    pdf: "/pdf/stretch-ceiling.pdf",

    view: "/services/stretch-ceiling/translucent",
  },

  {
    title: "SHILPWAVE™ Textile Ceiling Systems",

    desc:
      "Contemporary textile ceiling concepts that bring softness, movement, depth and distinctive architectural character to premium interior spaces.",

    image: images.service2,

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

  {
    title: "FIBERSKY™ Fiber Optic Star Ceiling",

    desc:
      "Advanced fiber optic ceiling systems designed to create realistic star fields, animated twinkling effects, vibrant RGB lighting and immersive galaxy-inspired environments.",

    image: images.service3,

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

 {
  title: "SHILPVIRTUAL™ Virtual Ceiling & Window",

  desc:
    "Premium illuminated virtual ceiling and window systems designed to introduce open skies, natural ambience, scenic views and immersive architectural experiences.",

  image: images.service4,

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