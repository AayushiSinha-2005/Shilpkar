const defaultMoreOptions = [
  {
    title: "Life N Colors",
    url: "https://lifencolors.in/collections/indian-traditional-wallpapers?srsltid=AfmBOopfdvSMx4p6uPZVs84TAiJW6sPyHizKwZ-Vzv_uRDltssVo3ehQ",
  },
  {
    title: "Shutterstock",
    url: "https://www.shutterstock.com/search/wall-mural?image_type=photo",
  },
];

const defaultProduct = {
  heroImage: "",
  gallery: [],
  shortDescription: "",
  description: "",
  features: [],
  applications: [],
  specifications: [],
  downloads: [],
  relatedProducts: [],
  moreOptions: defaultMoreOptions,
};

const products = {
  ceilings: {
    title: "Ceilings",

    categories: {
      "stretch-ceiling": {
        title: "Stretch Ceiling",

        shortDescription:
          "Premium stretch ceiling systems for luxury residential and commercial interiors.",

        description:
          "Premium stretch ceiling systems designed for luxury residential and commercial interiors.",

        heroImage: "",

        products: [
          {
            ...defaultProduct,
            title: "3D Printed Stretch Ceiling",
            slug: "3d-printed-stretch-ceiling",

            shortDescription:
              "Luxury illuminated printed stretch ceiling.",

            description:
              "3D Printed Stretch Ceiling combines premium translucent membrane with high-resolution UV printing to create stunning luxury interiors.",

            features: [
              "Custom Printed",
              "LED Compatible",
              "Fire Retardant",
              "Moisture Resistant",
              "Easy Maintenance",
            ],

            applications: [
              "Luxury Homes",
              "Hotels",
              "Restaurants",
              "Hospitals",
              "Corporate Offices",
            ],

            specifications: [
              {
                name: "Material",
                value: "PVC Stretch Membrane",
              },
              {
                name: "Finish",
                value: "Printed",
              },
              {
                name: "Lighting",
                value: "Backlit LED",
              },
              {
                name: "Warranty",
                value: "Up to 10 Years",
              },
            ],
          },

          {
            ...defaultProduct,
            title: "3D All Shape Stretch Ceiling",
            slug: "3d-all-shape-stretch-ceiling",
          },

          {
            ...defaultProduct,
            title: "Translucent Stretch Ceiling",
            slug: "translucent-stretch-ceiling",
          },

          {
            ...defaultProduct,
            title: "RGBWW Pixel Stretch Ceiling",
            slug: "rgbww-pixel-stretch-ceiling",
          },

          {
            ...defaultProduct,
            title: "Gloss Stretch Ceiling",
            slug: "gloss-stretch-ceiling",
          },

          {
            ...defaultProduct,
            title: "Tunable & Dimmable Stretch Ceiling",
            slug: "tunable-dimmable-stretch-ceiling",
          },

          {
            ...defaultProduct,
            title: "DALI Compatible Stretch Ceiling",
            slug: "dali-compatible-stretch-ceiling",
          },
        ],
      },

     "skylume-ceiling": {
  title: "SkyLume Ceiling",

  shortDescription:
    "Artificial daylight ceiling systems that recreate the feeling of natural open skies indoors.",

  description:
    "SkyLume Ceiling combines advanced lighting technology with premium stretch ceiling systems to simulate natural daylight, blue skies and architectural skylights for luxury interiors.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "SkyLume Pure",
      slug: "skylume-pure",

      shortDescription:
        "Natural white daylight ceiling system.",

      description:
        "SkyLume Pure creates a realistic daylight experience using high-quality diffused LED lighting for homes, offices and commercial spaces.",
    },

    {
      ...defaultProduct,
      title: "SkyLume Vista",
      slug: "skylume-vista",

      shortDescription:
        "Printed sky and nature ceiling system.",

      description:
        "SkyLume Vista combines premium printed graphics with illuminated ceiling technology to recreate open skies, clouds and nature indoors.",
    },

    {
      ...defaultProduct,
      title: "SkyLume Dynamic",
      slug: "skylume-dynamic",

      shortDescription:
        "Dynamic daylight simulation ceiling.",

      description:
        "SkyLume Dynamic changes brightness and colour temperature throughout the day to simulate a natural daylight cycle.",
    },

    {
      ...defaultProduct,
      title: "SkyLume RGB",
      slug: "skylume-rgb",

      shortDescription:
        "Decorative RGB ambient lighting ceiling.",

      description:
        "SkyLume RGB offers millions of colour combinations with smart lighting control for luxury interiors, hospitality and entertainment spaces.",
    },
  ],
},

      "mural-ceiling": {
        title: "Mural Ceiling",

        shortDescription:
          "Custom printed mural ceiling systems.",

        description:
          "Printed mural ceilings with customized artwork and premium finishes.",

        heroImage: "",

       products: [
  {
    ...defaultProduct,
    title: "Vinyl Ceiling Mural",
    slug: "vinyl-ceiling-mural",
  },

  {
    ...defaultProduct,
    title: "3D Ceiling Mural",
    slug: "3d-ceiling-mural",
  },

  {
    ...defaultProduct,
    title: "Fabric Ceiling Mural",
    slug: "fabric-ceiling-mural",
  },

  {
    ...defaultProduct,
    title: "Custom Printed Ceiling Wallpaper",
    slug: "custom-printed-ceiling-wallpaper",
  },
],
      },

      "virtual-sunroof": {
        title: "French Virtual Sunroof Ceiling",

        shortDescription:
          "Artificial skylight ceiling solutions.",

        description:
          "Artificial skylight and virtual ceiling systems with daylight simulation.",

        heroImage: "",

       products: [
  {
    ...defaultProduct,
    title: "Classic Virtual Ceiling",
    slug: "classic-virtual-ceiling",
  },

  {
    ...defaultProduct,
    title: "Minimalist Virtual Ceiling",
    slug: "minimalist-virtual-ceiling",
  },

  {
    ...defaultProduct,
    title: "Modern Virtual Ceiling",
    slug: "modern-virtual-ceiling",
  },

  {
    ...defaultProduct,
    title: "LED Sky Panel Virtual Ceiling",
    slug: "led-sky-panel-virtual-ceiling",
  },

  {
    ...defaultProduct,
    title: "Dynamic Digital Virtual Sunroof",
    slug: "dynamic-digital-virtual-sunroof",
  },

  {
    ...defaultProduct,
    title: "Fiber Optic Star Sky Ceiling",
    slug: "fiber-optic-star-sky-ceiling",
  },
],
      },
    },
  },

 walls: {
  title: "Walls",

  categories: {

    "stretch-wall": {
      title: "Translucent Stretch Wall",

      shortDescription:
        "Premium translucent stretch wall systems with integrated LED illumination.",

      description:
        "Translucent Stretch Wall combines premium stretch membrane with backlit lighting to create elegant illuminated walls for luxury interiors.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "Translucent Stretch Wall",
          slug: "stretch-wall",

          shortDescription:
            "Premium illuminated stretch wall solution.",

          description:
            "Luxury translucent stretch wall system designed for residential, commercial and hospitality interiors.",
        },
      ],
    },

    "printed-wall": {
      title: "3D Printed Stretch Wall",

      shortDescription:
        "Custom printed stretch wall systems.",

      description:
        "High-resolution UV printed stretch wall solutions with premium finishes.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "3D Printed Stretch Wall",
          slug: "printed-wall",

          shortDescription:
            "Luxury custom printed stretch wall.",

          description:
            "Premium UV printed stretch wall designed for luxury interior spaces.",
        },
      ],
    },

    "rgbww-wall": {
      title: "RGBWW Pixel Stretch Wall",

      shortDescription:
        "RGBWW illuminated stretch wall systems.",

      description:
        "Smart RGBWW stretch wall systems with dynamic lighting effects.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "RGBWW Pixel Stretch Wall",
          slug: "rgbww-wall",

          shortDescription:
            "Smart RGBWW decorative wall.",

          description:
            "Premium RGBWW lighting wall system for luxury interiors.",
        },
      ],
    },

    "vinyl-wall": {
      title: "Vinyl Wall Mural",

      shortDescription:
        "Premium vinyl wall mural solution.",

      description:
        "Custom vinyl wall murals with premium printing quality.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "Vinyl Wall Mural",
          slug: "vinyl-wall",
        },
      ],
    },

    "3d-wall": {

      title: "3D Wall Mural",

      shortDescription:
        "Luxury 3D wall mural systems.",

      description:
        "Premium 3D wall mural solution for luxury interiors.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "3D Wall Mural",
          slug: "3d-wall",
        },
      ],
    },
    "fabric-wall": {
  title: "Fabric Wall Mural",

  shortDescription:
    "Premium fabric wall mural solution.",

  description:
    "Luxury printed fabric wall murals for residential and commercial interiors.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "Fabric Wall Mural",
      slug: "fabric-wall",
    },
  ],
},

"wallpaper": {
  title: "Custom Printed Wallpaper",

  shortDescription:
    "Customized wallpaper solutions.",

  description:
    "Premium custom printed wallpaper with unlimited design possibilities.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "Custom Printed Wallpaper",
      slug: "wallpaper",
    },
  ],
},

"painting": {

  title: "Painting & Framing",

  shortDescription:
    "Luxury paintings with premium framing.",

  description:
    "Decorative paintings and customized framing solutions.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "Painting & Framing",
      slug: "painting",
    },
  ],
},

"block-out-wall": {
  title: "BLOCK-OUT Decorative Wall",

  shortDescription:
    "Premium decorative illuminated wall panels.",

  description:
    "BLOCK-OUT decorative wall solutions for luxury interiors.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "BLOCK-OUT Decorative Wall",
      slug: "block-out-wall",
    },
  ],
},

"acrylic-wall": {
  title: "Backlit Acrylic Wall Art",

  shortDescription:
    "Premium backlit acrylic wall art.",

  description:
    "Luxury illuminated acrylic wall art with LED lighting.",

  heroImage: "",

  products: [
    {
      ...defaultProduct,
      title: "Backlit Acrylic Wall Art",
      slug: "acrylic-wall",
    },
  ],
},

  },
},

  floors: {
  title: "Floors",

  categories: {

    "metallic-floor": {
      title: "Metallic Epoxy Flooring",

      shortDescription:
        "Luxury metallic epoxy flooring with seamless decorative finishes.",

      description:
        "Premium metallic epoxy flooring designed for luxury residential, commercial and hospitality interiors.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "Metallic Epoxy Flooring",
          slug: "metallic-floor",

          shortDescription:
            "Luxury metallic epoxy flooring.",

          description:
            "Premium metallic epoxy flooring with a seamless high-gloss finish.",
        },
      ],
    },

    "3d-floor": {
      title: "3D Epoxy Flooring",

      shortDescription:
        "Decorative 3D epoxy flooring systems.",

      description:
        "High-definition 3D epoxy flooring for modern luxury interiors.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "3D Epoxy Flooring",
          slug: "3d-floor",

          shortDescription:
            "Premium 3D epoxy flooring.",

          description:
            "Luxury 3D epoxy flooring with customized printed graphics.",
        },
      ],
    },

    "wooden-floor": {
      title: "Wooden Flooring",

      shortDescription:
        "Premium wooden flooring solutions.",

      description:
        "Natural wooden flooring with elegant finishes for residential and commercial interiors.",

      heroImage: "",

      products: [
        {
          ...defaultProduct,
          title: "Wooden Flooring",
          slug: "wooden-floor",

          shortDescription:
            "Luxury wooden flooring.",

          description:
            "Premium engineered wooden flooring with elegant natural finishes.",
        },
      ],
    },

  },
},
};

export default products;