import images from "./images";

const serviceCategories = {
  "stretch-ceiling": {
    title: "Stretch Ceiling Systems",

    hero: {
      title: "SHILPKAR™ Stretch Ceiling Systems",
      subtitle: "Premium Architectural Stretch Ceiling Systems",

      description:
        "SHILPKAR™ Stretch Ceiling Systems combine premium materials, seamless installation and advanced lighting technologies to transform ordinary ceilings into luxury architectural features.",
    },

    categories: [
      {
        slug: "translucent",
        title: "SHILPKAR™ TRANSLUCENT",
        subtitle: "Translucent & Illuminated Ceiling",
      },

      {
        slug: "printed",
        title: "SHILPKAR™ PRINT",
        subtitle: "Customized Printed Stretch Ceiling",
      },

      {
        slug: "gloss",
        title: "SHILPKAR™ GLOSS",
        subtitle: "Premium High-Gloss Reflective Ceiling",
      },

      {
        slug: "panel",
        title: "SHILPKAR™ PANEL",
        subtitle: "Premium Decorative Ceiling Panel",
      },
    ],

    image: images.service1,
  },

    "textile-ceiling": {
    title: "SHILPWAVE™ Textile Ceilings",

    hero: {
      title: "SHILPWAVE™ Textile Ceilings",
      subtitle: "Premium Architectural Textile Ceiling Systems",

      description:
        "Premium textile ceiling solutions designed to bring movement, depth and architectural elegance to luxury interior spaces.",
    },

   categories: [
  {
    slug: "wave",
    title: "SHILPWAVE™ WAVE",
    subtitle: "Elegant Flowing Textile Ceiling",
    image: "/images/shilpwave-wave.jpg",
  },
  {
    slug: "frill",
    title: "SHILPWAVE™ FRILL",
    subtitle: "Sculptural Decorative Textile Ceiling",
    image: "/images/shilpwave-frill.jpg",
  },
  {
    slug: "snake",
    title: "SHILPWAVE™ SNAKE",
    subtitle: "Dynamic Curved Textile Ceiling",
    image: "/images/shilpwave-snake.jpg",
  },
  {
    slug: "custom",
    title: "SHILPWAVE™ CUSTOM",
    subtitle: "Fully Bespoke Textile Ceiling Solution",
    image: "/images/shilpwave-custom.jpg",
  },
],

    image: images.service2,
  },

  "fiber-optic": {
    title: "Fiber Optic Star Ceiling",

    hero: {
      title: "SHILPKAR™ Fiber Optic Star Ceiling",
      subtitle: "Premium Fiber Optic Star Ceiling Systems",

      description:
        "Premium fiber optic star ceiling systems designed to create immersive starry skies, dynamic twinkling effects, RGB lighting and spectacular galaxy-inspired ceiling experiences.",
    },

    categories: [
      {
        slug: "static",
        title: "FIBERSKY™ STATIC",
        subtitle: "Realistic Starry Night Ceiling",
      },
      {
        slug: "twinkle",
        title: "FIBERSKY™ TWINKLE",
        subtitle: "Dynamic Twinkling Star Ceiling",
      },
      {
        slug: "rgb",
        title: "FIBERSKY™ RGB",
        subtitle: "Color-Changing RGB Star Ceiling",
      },
      {
        slug: "galaxy-pro",
        title: "FIBERSKY™ GALAXY PRO",
        subtitle: "Milky Way & Galaxy Ceiling",
      },
    ],

  image: images.service3,
},
  "virtual-ceiling": {
    title: "SHILPVIRTUAL™ Virtual Ceiling & Window",

    hero: {
      title: "SHILPVIRTUAL™ Virtual Ceiling & Window",
      subtitle: "Premium Illuminated Virtual Sky Systems",

      description:
        "Premium virtual ceiling and window solutions designed to bring natural light, open skies and immersive architectural views into luxury interior spaces.",
    },

    categories: [
      {
        slug: "virtual-sky",
        title: "SHILPVIRTUAL™ SKY",
        subtitle: "Illuminated Virtual Sky Ceiling",
      },
      {
        slug: "virtual-window",
        title: "SHILPVIRTUAL™ WINDOW",
        subtitle: "Realistic Illuminated Window System",
      },
      {
        slug: "virtual-sunlight",
        title: "SHILPVIRTUAL™ SUNLIGHT",
        subtitle: "Natural Sunlight Simulation",
      },
      {
        slug: "virtual-custom",
        title: "SHILPVIRTUAL™ CUSTOM",
        subtitle: "Custom Virtual Ceiling & Window",
      },
    ],

    image: images.service4,
  },

};

export default serviceCategories;
