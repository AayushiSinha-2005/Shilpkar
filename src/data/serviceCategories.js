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
};

export default serviceCategories;