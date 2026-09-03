import images from "./images.js";
const serviceDetails = {
  "stretch-ceiling": {
    translucent: {
      hero: {
        title: "Shilpkar™ TRANSLUCENT",
        subtitle: "Translucent & Illuminated Ceiling",
        description:
          "Premium translucent stretch ceiling systems engineered to create seamless illuminated architectural interiors with elegant lighting and luxury finishes.",

          image: images.translucent.heroBanner,
      },

      sections: [
        {
          tag: "TYPE 1",
          title: "Shilpkar™ Static White",
          subtitle: "Fixed White LED Stretch Ceiling System",

image: images.translucent.staticWhite,

          description:
            "This configuration uses a single fixed color-temperature LED such as 3000K, 4000K, 6000K or 10000K depending on the desired visual effect. The ceiling remains consistently illuminated at the selected white-light temperature.",

          bestFor:
            "Ceilings, Offices, Retail Spaces, Corridors and projects requiring simple, clean and consistent illumination.",

          specs: [
            {
              label: "CONTROL",
              value: "ON / OFF",
            },
            {
              label: "CCT",
              value: "Fixed",
            },
            {
              label: "COLOR CHANGING",
              value: "No",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "No",
            },
          ],
        },

        {
          tag: "TYPE 2",
          title: " Shilpkar™ CCT White",
          subtitle: "Dimmable + Tunable CCT LED System",

          image: images.translucent.cctWhite,

          description:
            "Type 2 provides complete control over both brightness and white-light temperature. The ambience can be adjusted from warmer to cooler white according to the application, time of day and desired mood.",
        bestFor:
            "Luxury Homes, Villas, Hotels, Restaurants and Premium Commercial Interiors.",

          specs: [
            {
              label: "CONTROL",
              value: "Dimming + CCT",
            },
            {
              label: "BRIGHTNESS",
              value: "Adjustable",
            },
            {
              label: "COLOR CHANGING",
              value: "No",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "No",
            },
          ],
        },

        {
          tag: "TYPE 3",
          title: "Shilpkar™ RGBW White",
          subtitle: "RGBW Color Changing LED System",

          image: images.translucent.rgbw,

          description:
            "Type 3 integrates RGBW LED technology, providing premium white illumination together with a wide range of coloured lighting effects. Users can control brightness, white-light settings and RGB colours from a single system.A printed sky ceiling can appear as natural daylight, then transition into sunset, blue sky or decorative colour scenes to create completely different moods.",
          
            bestFor:
            "Restaurants, Hotels, Lounges, Gaming Zones and Luxury Entertainment Spaces.",

          specs: [
            {
              label: "CONTROL",
              value: "Remote / App",
            },
            {
              label: "CCT",
              value: "RGBW",
            },
            {
              label: "COLOR CHANGING",
              value: "Yes",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "Standard Effects",
            },
          ],
        },

        {
          tag: "TYPE 4",
          title: "Shilpkar™ RGBW Pixel + DMX White.",
          subtitle: "Programmable Dynamic Lighting System",

         image: images.translucent.rgbwProgramming,

          description:
            "Professional programmable pixel lighting system compatible with DMX and MADRIX controllers, enabling dynamic lighting scenes, animations and immersive architectural experiences.",

          bestFor:
            "Luxury Hotels, Clubs, Auditoriums, Exhibition Spaces and Signature Architectural Projects.",

          specs: [
            {
              label: "CONTROL",
              value: "DMX / Pixel",
            },
            {
              label: "CCT",
              value: "RGBW",
            },
            {
              label: "COLOR CHANGING",
              value: "Yes",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "Unlimited",
            },
          ],
        },
      ],
    },

    printed: {
      hero: {
        title: "Shilpkar™ PRINT",
        subtitle: "Customized Printed Stretch Ceiling",
        description:
          "Premium customized printed stretch ceiling systems combining high-resolution graphics with advanced lighting technologies.",

          image: images.printed.heroBanner,
      },

      sections: [
        {
          tag: "TYPE 1",
          title: "Shilpkar™ Static Print",
          subtitle: "Printed Stretch Ceiling",

          image: images.printed.staticPrint,

          description:
            "High-resolution printed stretch ceiling with fixed white illumination, delivering vivid graphics and elegant architectural lighting.",

          bestFor:
            "Homes, Retail Stores, Offices, Reception Areas and Commercial Interiors.",

          specs: [
            {
              label: "CONTROL",
              value: "ON / OFF",
            },
            {
              label: "CCT",
              value: "Fixed",
            },
            {
              label: "COLOR CHANGING",
              value: "No",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "No",
            },
          ],
        },

        {
          tag: "TYPE 2",
          title: "Shilpkar™ CCT Print",
          subtitle: "Printed Tunable White Ceiling",

          image: images.printed.cctPrint,

          description:
            "Premium printed ceiling with adjustable brightness and colour temperature for creating the perfect ambience.",

          bestFor:
            "Luxury Homes, Hotels, Cafés and Premium Commercial Projects.",

          specs: [
            {
              label: "CONTROL",
              value: "Dimming + CCT",
            },
            {
              label: "CCT",
              value: "2700K - 6500K",
            },
            {
              label: "COLOR CHANGING",
              value: "No",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "No",
            },
          ],
        },

        {
          tag: "TYPE 3",
          title: "Shilpkar™ RGBW Print",
          subtitle: "RGBW Printed Ceiling",

          image: images.printed.rgbw,

          description:
            "Create immersive printed ceiling experiences with vibrant RGBW lighting and premium quality printed graphics.",

          bestFor:
            "Restaurants, Gaming Zones, Entertainment Spaces and Luxury Interiors.",

          specs: [
            {
              label: "CONTROL",
              value: "Remote / App",
            },
            {
              label: "CCT",
              value: "RGBW",
            },
            {
              label: "COLOR CHANGING",
              value: "Yes",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "Standard Effects",
            },
          ],
        },

        {
          tag: "TYPE 4",
          title: "Shilpkar™ RGBW + DMX Print",
          subtitle: "Programmable Printed Ceiling",

          image: images.printed.rgbwProgramming,

          description:
            "Fully programmable printed stretch ceiling system with DMX and MADRIX compatibility for premium dynamic lighting experiences.",

          bestFor:
            "Luxury Hotels, Clubs, Auditoriums, Exhibition Spaces and High-End Commercial Projects.",

          specs: [
            {
              label: "CONTROL",
              value: "DMX / MADRIX",
            },
            {
              label: "CCT",
              value: "RGBW",
            },
            {
              label: "COLOR CHANGING",
              value: "Yes",
            },
            {
              label: "DYNAMIC EFFECTS",
              value: "Unlimited",
            },
          ],
        },
      ],
    },
gloss: {
  hero: {
    title: "Shilpkar™ GLOSS",
    subtitle: "Premium High-Gloss Reflective Ceiling",
    description:
      "Shilpkar™ GLOSS is a premium reflective stretch ceiling system designed to create seamless mirror-like surfaces that enhance lighting, add visual depth and transform interiors into elegant luxury spaces.",
      image: images.gloss.heroBanner,
  },

  sections: [
    {
      tag: "FEATURE 01",
      title: "Premium High-Gloss Reflective Ceiling",
      subtitle: "Mirror Finish Luxury Ceiling",

      image: images.gloss.main,

      description:
        "Shilpkar™ GLOSS is engineered to deliver a perfectly smooth, seamless and highly reflective ceiling surface. The premium stretch membrane is tensioned over a precision aluminium profile to eliminate joints, cracks and uneven finishes while creating a luxurious mirror-like appearance.\n\nThe reflective surface enhances both natural and artificial lighting, making interiors feel brighter, larger and significantly more elegant.",

      bestFor:
        "Luxury Residences, Villas, Hotels, Restaurants, Showrooms, Corporate Offices and Premium Commercial Interiors.",

      specs: [
        { label: "FINISH", value: "Mirror High Gloss" },
        { label: "SURFACE", value: "Joint-Free" },
        { label: "REFLECTION", value: "High Reflective" },
        { label: "MAINTENANCE", value: "Easy Cleaning" },
      ],
    },

    {
      tag: "FEATURE 02",
      title: "The Beauty of Reflection",
      subtitle: "Elegant Visual Depth",

      image: images.gloss.reflection,

      description:
        "The defining characteristic of Shilpkar™ GLOSS is its exceptional reflective finish. Chandeliers, pendant lights, decorative fixtures and architectural elements are beautifully reflected across the ceiling, creating an additional dimension throughout the space.\n\nThe result is a brighter, more spacious environment with a sophisticated luxury appearance that immediately enhances the overall interior experience.",

      bestFor:
        "Hotel Lobbies, Luxury Living Rooms, Reception Areas, Retail Stores, Salons, Spas and Entertainment Spaces.",

      specs: [
        { label: "VISUAL DEPTH", value: "Enhanced" },
        { label: "LIGHT REFLECTION", value: "Maximum" },
        { label: "ROOM EFFECT", value: "Spacious Feel" },
        { label: "DESIGN IMPACT", value: "Luxury Finish" },
      ],
    },
  ],
},
panel: {
  hero: {
    title: "Shilpkar™ BACKLIT PANEL",
    subtitle: "Modular Printed & Illuminated Panel Systems",
    description:
      "Premium modular backlit panel systems designed for Grid and T-Grid ceilings, combining uniform LED illumination with high-resolution custom printing for commercial and architectural interiors.",
      image: images.panel.heroBanner,
  },

  sections: [
    {
      tag: "SYSTEM",

      title: "Designed for Grid Ceiling Systems",

      subtitle: "Premium Modular LED Panels",

image: images.panel.grid,

      description:
        "Shilpkar™ Backlit Panels are specially engineered for Grid and T-Grid ceiling systems. Individual ceiling tiles can be replaced with illuminated printed panels, transforming ordinary modular ceilings into decorative architectural features with minimal installation time.\n\nThe system is ideal for both new construction projects and renovation of existing modular ceilings.",

      bestFor:
        "Corporate Offices, Hospitals, Schools, Retail Stores, Hotels and Commercial Buildings.",

      specs: [
        { label: "SYSTEM", value: "Grid / T-Grid" },
        { label: "LIGHTING", value: "LED Backlit" },
        { label: "INSTALLATION", value: "Modular" },
        { label: "APPLICATION", value: "Indoor" },
      ],
    },

    {
      tag: "DESIGN",

      title: "Unlimited Design Possibilities",

      subtitle: "Custom Printed Backlit Panels",

      image: images.panel.design,

      description:
        "Every Shilpkar™ Backlit Panel can be customised with premium artwork including blue skies, clouds, nature scenes, abstract graphics, architectural designs, corporate branding and themed visuals. Multiple panels can be combined to create one continuous illuminated ceiling experience.",

      bestFor:
        "Reception Areas, Shopping Malls, Airports, Hotels, Luxury Homes, Restaurants and Commercial Interiors.",

      specs: [
        { label: "PRINT", value: "Custom HD Graphics" },
        { label: "PANEL SIZE", value: "Custom Options" },
        { label: "FRAME", value: "Aluminium" },
        { label: "DESIGN", value: "Unlimited" },
      ],
    },
  ],
},

},

 "textile-ceiling": {
  
  wave: {
    hero: {
  subtitle: "SHILPWAVE™ Collection",
  title: "SHILPWAVE™ WAVE",
  description:
    "SHILPWAVE™ WAVE is a premium textile ceiling system designed to introduce elegant movement, flowing forms and architectural depth into luxury interior spaces.",

  image: images.textile.waveHeroBanner,
},

    sections: [
      {
        title: "SHILPWAVE™ WAVE",
        subtitle: "Elegant Flowing Ceiling Design",
        description:
          "Inspired by the natural rhythm of flowing forms, SHILPWAVE™ WAVE transforms ceilings into a striking architectural feature. Its graceful textile curves create depth, softness and visual movement while maintaining a refined premium finish.",

        image: images.textile.wave,

        specs: [
          {
            label: "FINISH",
            value: "Premium Textile",
          },
          {
            label: "DESIGN",
            value: "Flowing Wave",
          },
          {
            label: "STYLE",
            value: "Architectural",
          },
          {
            label: "CUSTOMISATION",
            value: "Made to Measure",
          },
        ],
      },
    ],

    whyChoose: {
      eyebrow: "WHY CHOOSE SHILPWAVE™ WAVE",
      title: "Designed to Create Movement",

      items: [
        {
          title: "Elegant Flowing Forms",
          description:
            "Graceful curves create a sense of movement and add architectural character to the ceiling.",
        },
        {
          title: "Premium Textile Finish",
          description:
            "Carefully selected materials deliver a refined appearance suitable for luxury interiors.",
        },
        {
          title: "Custom Ceiling Design",
          description:
            "Wave patterns can be adapted to suit the dimensions and design language of your space.",
        },
        {
          title: "Lightweight Construction",
          description:
            "The system provides dramatic visual impact without adding unnecessary structural weight.",
        },
        {
          title: "Lighting Integration",
          description:
            "Lighting can be thoughtfully incorporated to enhance depth, shadows and the flowing form.",
        },
        {
          title: "Made for Modern Interiors",
          description:
            "A versatile architectural solution for contemporary residential, hospitality and commercial spaces.",
        },
      ],
    },

    applications: {
      eyebrow: "IDEAL APPLICATIONS",
      title: "Designed for Inspiring Spaces",

      items: [
        "Luxury Homes",
        "Living Rooms",
        "Hotel Lobbies",
        "Restaurants",
        "Luxury Villas",
        "Corporate Offices",
        "Reception Areas",
        "Retail Spaces",
        "Spa & Wellness Centres",
        "Premium Showrooms",
        "Event Spaces",
        "Hospitality Interiors",
      ],
    },



    cta: {
      eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
      title: "Bring Architectural Movement to Your Ceiling",

      description:
        "From sophisticated homes to striking commercial interiors, SHILPWAVE™ WAVE creates a distinctive ceiling experience with flowing textile forms and bespoke architectural design.",

      primaryText: "Request Free Consultation",
      primaryLink: "/contact",

      catalogueText: "Download Catalogue",
      catalogue: "/pdf/textile-ceiling.pdf",
    },
  },
 


frill: {
 hero: {
  subtitle: "SHILPWAVE™ Collection",
  title: "SHILPWAVE™ FRILL",
  description:
    "SHILPWAVE™ FRILL is a premium textile ceiling system created to add sculptural texture, softness and decorative character to sophisticated interior spaces.",

  image: images.textile.frillHeroBanner,
},

  sections: [
    {
      title: "SHILPWAVE™ FRILL",
      subtitle: "Sculptural Textile Ceiling Design",
      description:
        "SHILPWAVE™ FRILL transforms the ceiling into a decorative architectural surface through carefully arranged textile layers and flowing contours. The result is a rich visual composition that adds depth, texture and a distinctive sense of luxury to the space.",

      image: images.textile.frill,

      specs: [
        {
          label: "FINISH",
          value: "Premium Textile",
        },
        {
          label: "DESIGN",
          value: "Sculptural Frill",
        },
        {
          label: "STYLE",
          value: "Decorative",
        },
        {
          label: "CUSTOMISATION",
          value: "Bespoke Design",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE SHILPWAVE™ FRILL",
    title: "Designed for Artistic Interiors",

    items: [
      {
        title: "Sculptural Visual Effect",
        description:
          "Layered textile forms create depth and a striking three-dimensional architectural appearance.",
      },
      {
        title: "Premium Material Finish",
        description:
          "High-quality textile materials create a refined and elegant ceiling experience.",
      },
      {
        title: "Customised Composition",
        description:
          "The pattern, scale and arrangement can be adapted to complement each individual interior.",
      },
      {
        title: "Architectural Depth",
        description:
          "Textured forms introduce visual layers that make the ceiling an important part of the overall design.",
      },
      {
        title: "Lighting Enhancement",
        description:
          "Integrated lighting can enhance shadows, highlights and the dimensional character of the design.",
      },
      {
        title: "Bespoke Luxury Design",
        description:
          "Every installation can be planned as a unique statement piece for premium spaces.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",
    title: "Created for Statement Spaces",

    items: [
      "Luxury Residences",
      "Living Rooms",
      "Hotel Lobbies",
      "Fine Dining Restaurants",
      "Luxury Villas",
      "Reception Areas",
      "Boutique Interiors",
      "Premium Retail Spaces",
      "Spa & Wellness Centres",
      "Event Spaces",
      "Designer Showrooms",
      "Hospitality Interiors",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
    title: "Turn Your Ceiling into a Design Statement",

    description:
      "SHILPWAVE™ FRILL brings texture, movement and artistic expression together to create a ceiling feature designed specifically for extraordinary interiors.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

    catalogueText: "Download Catalogue",
    catalogue: "/pdf/textile-ceiling.pdf",
  },
},

snake: {
 hero: {
  subtitle: "SHILPWAVE™ Collection",
  title: "SHILPWAVE™ SNAKE",
  description:
    "SHILPWAVE™ SNAKE is a bold architectural textile ceiling system designed with dynamic curves and continuous flowing forms to create a dramatic visual identity.",

  image: images.textile.snakeHeroBanner,
},

  sections: [
    {
      title: "SHILPWAVE™ SNAKE",
      subtitle: "Dynamic Curved Ceiling Design",
      description:
        "SHILPWAVE™ SNAKE transforms the ceiling into a continuous architectural composition inspired by fluid movement. Its sweeping curves and sculptural textile forms create a powerful sense of depth, direction and visual energy, making it an ideal feature for contemporary luxury interiors.",

      image: images.textile.snake,

      specs: [
        {
          label: "FINISH",
          value: "Premium Textile",
        },
        {
          label: "DESIGN",
          value: "Dynamic Curves",
        },
        {
          label: "STYLE",
          value: "Contemporary",
        },
        {
          label: "CUSTOMISATION",
          value: "Bespoke Layout",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE SHILPWAVE™ SNAKE",
    title: "Designed for Dynamic Interiors",

    items: [
      {
        title: "Flowing Architectural Forms",
        description:
          "Continuous curves create a strong visual flow that transforms the ceiling into an architectural feature.",
      },
      {
        title: "Bold Sculptural Design",
        description:
          "The distinctive form adds depth, movement and a dramatic three-dimensional character.",
      },
      {
        title: "Custom Ceiling Layouts",
        description:
          "Each design can be planned around the proportions, layout and visual requirements of the space.",
      },
      {
        title: "Premium Textile Finish",
        description:
          "High-quality textile materials provide a refined finish suitable for sophisticated interiors.",
      },
      {
        title: "Enhanced with Lighting",
        description:
          "Thoughtfully integrated lighting can highlight the curves and enhance the depth of the composition.",
      },
      {
        title: "Bespoke Architectural Solution",
        description:
          "Every installation can be customised to create a unique and memorable ceiling experience.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",
    title: "Created for Contemporary Spaces",

    items: [
      "Luxury Homes",
      "Modern Living Rooms",
      "Hotel Lobbies",
      "Restaurants",
      "Luxury Villas",
      "Corporate Offices",
      "Reception Areas",
      "Retail Interiors",
      "Spa & Wellness Centres",
      "Entertainment Spaces",
      "Premium Showrooms",
      "Hospitality Projects",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
    title: "Create a Ceiling That Moves With Your Space",

    description:
      "SHILPWAVE™ SNAKE combines fluid architectural forms with premium textile craftsmanship to create a dramatic ceiling feature tailored for exceptional interiors.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

    catalogueText: "Download Catalogue",
    catalogue: "/pdf/textile-ceiling.pdf",
  },
},

custom: {
  hero: {
  subtitle: "SHILPWAVE™ Collection",
  title: "SHILPWAVE™ CUSTOM",
  description:
    "SHILPWAVE™ CUSTOM is a fully bespoke textile ceiling solution created for interiors that demand a unique architectural identity, tailored dimensions and complete design flexibility.",

  image: images.textile.customHeroBanner,
},

  sections: [
    {
      title: "SHILPWAVE™ CUSTOM",
      subtitle: "Bespoke Textile Ceiling Solution",

      description:
        "Every SHILPWAVE™ CUSTOM installation is designed around the architecture of your space. From the shape and scale of the textile forms to the layout, depth and lighting integration, each element can be carefully developed to create a one-of-a-kind ceiling experience.",

      image: images.textile.custom,

      specs: [
        {
          label: "FINISH",
          value: "Premium Textile",
        },
        {
          label: "DESIGN",
          value: "Fully Bespoke",
        },
        {
          label: "LAYOUT",
          value: "Custom Engineered",
        },
        {
          label: "FLEXIBILITY",
          value: "Made to Measure",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE SHILPWAVE™ CUSTOM",
    title: "Designed Around Your Vision",

    items: [
      {
        title: "Complete Design Freedom",
        description:
          "Create a ceiling concept tailored specifically to your interior, architectural style and creative vision.",
      },
      {
        title: "Made to Measure",
        description:
          "Every element is planned according to the exact dimensions and proportions of your space.",
      },
      {
        title: "Bespoke Architectural Forms",
        description:
          "Shapes, curves, layers and compositions can be developed to create a truly distinctive ceiling feature.",
      },
      {
        title: "Premium Textile Materials",
        description:
          "Carefully selected materials provide a refined finish suitable for premium residential and commercial interiors.",
      },
      {
        title: "Integrated Lighting Options",
        description:
          "Lighting can be incorporated into the design to enhance depth, texture and the overall visual experience.",
      },
      {
        title: "One-of-a-Kind Installation",
        description:
          "Each SHILPWAVE™ CUSTOM project is developed as a unique architectural composition rather than a standard product.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",
    title: "Created for Unique Spaces",

    items: [
      "Luxury Residences",
      "Designer Villas",
      "Hotel Lobbies",
      "Luxury Suites",
      "Fine Dining Restaurants",
      "Corporate Headquarters",
      "Reception Areas",
      "Premium Retail",
      "Spa & Wellness Centres",
      "Entertainment Spaces",
      "Experience Centres",
      "Signature Commercial Projects",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",

    title: "Let's Design Something Unique",

    description:
      "Share your vision with our design team and create a bespoke SHILPWAVE™ textile ceiling solution tailored exclusively for your space.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

    catalogueText: "Download Catalogue",
    catalogue: "/pdf/textile-ceiling.pdf",
  },
},
},

  "fiber-optic": {
    static: {
  hero: {
    subtitle: "SHILPKAR™ Collection",
    title: "FIBERSKY™ STATIC",
    description:
      "FIBERSKY™ STATIC is a premium fiber optic star ceiling solution designed to recreate the mesmerizing beauty of a clear, star-filled night sky within luxury interiors.",
      image: images.fiberOptic.staticHeroBanner,

    },

  sections: [
    {
      title: "FIBERSKY™ STATIC",

      subtitle: "The Classic Star Sky",

      description:
        "The Classic Star Sky is the purest expression of luxury fiber optic ceiling design, inspired by the timeless beauty of a naturally illuminated night sky.",

      image: images.fiberOptic.static,

      specs: [
        {
          label: "FINISH",
          value: "Luxury Finish",
        },
        {
          label: "DESIGN",
          value: "Custom Design",
        },
        {
          label: "TECHNOLOGY",
          value: "Fiber Optic",
        },
        {
          label: "QUALITY",
          value: "Premium Quality",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE FIBERSKY™ STATIC",

    title: "Designed for Luxury Interiors",

    items: [
      {
        title: "Realistic Star Effect",
        description:
          "Thousands of precision fiber optic points recreate the appearance of a natural night sky.",
      },
      {
        title: "Twinkling Animation",
        description:
          "Dynamic lighting creates subtle shimmering stars for a calming and immersive experience.",
      },
      {
        title: "Premium Ceiling Finish",
        description:
          "A seamless ceiling surface provides a flawless finish with concealed lighting components.",
      },
      {
        title: "Energy Efficient",
        description:
          "Fiber optic technology consumes minimal energy while delivering exceptional visual performance.",
      },
      {
        title: "Custom Star Layouts",
        description:
          "Every ceiling can be uniquely designed with different star densities and artistic compositions.",
      },
      {
        title: "Minimal Maintenance",
        description:
          "Long-lasting lighting components require very little maintenance and provide years of reliable performance.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",

    title: "Designed for Premium Spaces",

    items: [
      "Luxury Homes",
      "Master Bedrooms",
      "Home Theatre",
      "Luxury Villas",
      "Hotel Suites",
      "Restaurants",
      "Spa & Wellness",
      "Meditation Rooms",
      "Luxury Lounges",
      "Corporate Experience Centres",
      "Private Cinema",
      "Premium Showrooms",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",

    title: "Bring the Beauty of the Night Sky Indoors",

    description:
      "From elegant residential interiors to luxury hospitality projects, SHILPKAR™ FIBERSKY transforms ceilings into breathtaking architectural experiences. Our design specialists will help you create a completely customized fiber optic ceiling that perfectly complements your space.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

    catalogueText: "",
catalogue: "",
  },
},

twinkle: {
  hero: {
  subtitle: "SHILPKAR™ Collection",
  title: "FIBERSKY™ TWINKLE",
  description:
    "FIBERSKY™ TWINKLE is a premium dynamic fiber optic ceiling designed to bring the captivating movement of a naturally star-filled night sky into luxury interiors.",

  image: images.fiberOptic.twinkleHeroBanner,
},

  sections: [
    {
      title: "FIBERSKY™ TWINKLE",

      subtitle: "The Dynamic Star Sky",

      description:
        "FIBERSKY™ TWINKLE transforms ordinary ceilings into a living night sky. Advanced fiber optic technology creates thousands of luminous star points that gently shimmer and twinkle, bringing depth, movement and a sense of calm to luxury interiors.",

      image: images.fiberOptic.twinkle,

      specs: [
        {
          label: "FINISH",
          value: "Luxury Finish",
        },
        {
          label: "DESIGN",
          value: "Custom Star Layout",
        },
        {
          label: "TECHNOLOGY",
          value: "Dynamic Twinkle Effect",
        },
        {
          label: "QUALITY",
          value: "Premium Fiber Optic",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE FIBERSKY™ TWINKLE",

    title: "Designed for Dynamic Luxury Interiors",

    items: [
      {
        title: "Realistic Star Effect",
        description:
          "Thousands of precision fiber optic points recreate the depth and beauty of a naturally illuminated night sky.",
      },
      {
        title: "Dynamic Twinkling Effect",
        description:
          "Intelligent fiber optic illumination creates gentle variations in brightness, producing a realistic and immersive twinkling effect.",
      },
      {
        title: "Premium Ceiling Finish",
        description:
          "A seamless ceiling surface creates a refined architectural finish while concealing the complete fiber optic system.",
      },
      {
        title: "Custom Star Layouts",
        description:
          "Every installation can be individually designed with customised star density, positioning and composition to suit the space.",
      },
      {
        title: "Energy Efficient",
        description:
          "Advanced fiber optic technology delivers an impressive visual experience while maintaining efficient energy consumption.",
      },
      {
        title: "Minimal Maintenance",
        description:
          "The system is designed for long-lasting performance with minimal maintenance requirements for years of reliable operation.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",

    title: "Designed for Premium Spaces",

    items: [
      "Luxury Homes",
      "Master Bedrooms",
      "Home Theatre",
      "Luxury Villas",
      "Hotel Suites",
      "Restaurants",
      "Spa & Wellness",
      "Meditation Rooms",
      "Luxury Lounges",
      "Corporate Experience Centres",
      "Private Cinema",
      "Premium Showrooms",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",

    title: "Bring the Beauty of the Night Sky Indoors",

    description:
      "From sophisticated residences to immersive hospitality and entertainment spaces, SHILPKAR™ FIBERSKY TWINKLE transforms ceilings into dynamic architectural experiences. Our specialists can help you create a fully customised star ceiling designed around your space and vision.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

   catalogueText: "",
catalogue: "",
  },
},

rgb: {
 hero: {
  subtitle: "SHILPKAR™ Collection",
  title: "FIBERSKY™ RGB",
  description:
    "FIBERSKY™ RGB is an advanced colour-changing fiber optic ceiling system that combines programmable illumination with the timeless beauty of a star-filled night sky.",

  image: images.fiberOptic.rgbHeroBanner,
},

  sections: [
    {
      title: "FIBERSKY™ RGB",

      subtitle: "The Colourful Star Experience",

      description:
        "FIBERSKY™ RGB brings colour, movement and atmosphere together in one immersive ceiling experience. Advanced programmable fiber optic technology allows the star field to transform through a spectrum of colours and dynamic lighting effects, creating a striking visual feature tailored to the mood and character of your space.",

      image: images.fiberOptic.rgb,

      specs: [
        {
          label: "FINISH",
          value: "Luxury Finish",
        },
        {
          label: "DESIGN",
          value: "Custom Star Layout",
        },
        {
          label: "TECHNOLOGY",
          value: "RGB Fiber Optic",
        },
        {
          label: "CONTROL",
          value: "Dynamic Lighting Effects",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE FIBERSKY™ RGB",

    title: "Designed for Immersive Luxury Interiors",

    items: [
      {
        title: "Dynamic RGB Star Effects",
        description:
          "Programmable RGB illumination allows the star field to transform through multiple colours, creating a captivating and immersive visual experience.",
      },
      {
        title: "Customisable Atmosphere",
        description:
          "Create the right mood for every occasion with lighting effects that can be tailored to complement the atmosphere of your interior.",
      },
      {
        title: "Realistic Star Formation",
        description:
          "Precision fiber optic points create depth and visual texture, recreating the beauty of a luminous star-filled sky.",
      },
      {
        title: "Premium Ceiling Finish",
        description:
          "A refined seamless ceiling surface conceals the fiber optic system and creates a clean, luxurious architectural finish.",
      },
      {
        title: "Advanced Programmable Technology",
        description:
          "Intelligent lighting control enables dynamic colour transitions and customised visual effects for a truly personalised installation.",
      },
      {
        title: "Minimal Maintenance",
        description:
          "Engineered for dependable long-term performance, the system requires minimal maintenance while delivering a consistently impressive visual experience.",
      },
    ],
  },

  applications: {
    eyebrow: "IDEAL APPLICATIONS",
    title: "Designed for Immersive Spaces",
    items: [
      "Luxury Homes",
      "Master Bedrooms",
      "Home Theatre",
      "Luxury Villas",
      "Hotel Suites",
      "Restaurants & Lounges",
      "Nightclubs",
      "Spa & Wellness",
      "Meditation Rooms",
      "Private Cinema",
      "Entertainment Spaces",
      "Premium Showrooms",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
    title: "Transform Your Ceiling Into a Living Sky",
    description:
      "From sophisticated residences to immersive entertainment and hospitality spaces, SHILPKAR™ FIBERSKY RGB transforms ceilings into dynamic architectural experiences. Our specialists can help you design a fully customised colour-changing star ceiling created around your space and vision.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

   catalogueText: "",
catalogue: "",
  },
},

"galaxy-pro": {
    hero: {
  subtitle: "SHILPKAR™ Collection",
  title: "FIBERSKY™ GALAXY PRO",
  description:
    "FIBERSKY™ GALAXY PRO is an advanced luxury fiber optic ceiling system inspired by the breathtaking depth, movement and brilliance of the cosmos.",

  image: images.fiberOptic.galaxyProHeroBanner,
},

  sections: [
    {
      title: "FIBERSKY™ GALAXY PRO",

      subtitle: "A Complete Cosmic Experience",

      description:
        "Inspired by the breathtaking beauty of our galaxy, FIBERSKY™ GALAXY PRO transforms ceilings into spectacular cosmic landscapes. Carefully composed star clusters, varying densities and dramatic illumination create the flowing depth and visual character of a galaxy, turning the ceiling into an unforgettable architectural centrepiece.",

      image: images.fiberOptic.galaxyPro,

      specs: [
        {
          label: "FINISH",
          value: "Luxury Finish",
        },
        {
          label: "DESIGN",
          value: "Galaxy Composition",
        },
        {
          label: "TECHNOLOGY",
          value: "Advanced Fiber Optic",
        },
        {
          label: "EXPERIENCE",
          value: "Immersive Cosmic Effect",
        },
      ],
    },
  ],

  whyChoose: {
    eyebrow: "WHY CHOOSE FIBERSKY™ GALAXY PRO",

    title: "Designed for Extraordinary Interiors",

    items: [
      {
        title: "Spectacular Galaxy Effect",
        description:
          "Carefully arranged clusters of fiber optic stars create dramatic formations inspired by the depth and flowing beauty of the cosmos.",
      },
      {
        title: "Layered Star Density",
        description:
          "Different star densities and compositions add remarkable depth, texture and dimension, creating a richer and more immersive ceiling experience.",
      },
      {
        title: "Custom Cosmic Composition",
        description:
          "Each installation can be individually designed with unique star patterns, formations and visual compositions tailored to the architecture of the space.",
      },
      {
        title: "Premium Architectural Finish",
        description:
          "A seamless ceiling surface provides a refined luxury finish while concealing the complete fiber optic system within the architecture.",
      },
      {
        title: "Immersive Visual Centrepiece",
        description:
          "The dramatic combination of dense star formations and balanced illumination transforms the ceiling into a powerful architectural focal point.",
      },
      {
        title: "Built for Long-Term Performance",
        description:
          "Advanced fiber optic technology provides reliable operation with minimal maintenance requirements for years of exceptional visual performance.",
      },
    ],
    }, 

    
  applications: {
    eyebrow: "IDEAL APPLICATIONS",

    title: "Created for Exceptional Spaces",

    items: [
      "Luxury Residences",
      "Grand Master Bedrooms",
      "Private Cinemas",
      "Luxury Villas",
      "Premium Hotel Suites",
      "Fine Dining Restaurants",
      "Luxury Lounges",
      "Home Theatres",
      "Entertainment Rooms",
      "Wellness & Spa Spaces",
      "Experience Centres",
      "Premium Commercial Interiors",
    ],
  },

  cta: {
    eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",

    title: "Bring the Universe Into Your Interior",

    description:
      "FIBERSKY™ GALAXY PRO transforms ceilings into extraordinary cosmic experiences filled with depth, light and architectural drama. From exclusive residences to premium hospitality and entertainment spaces, SHILPKAR™ can help you create a completely customised galaxy-inspired ceiling unlike anything ordinary.",

    primaryText: "Request Free Consultation",
    primaryLink: "/contact",

   catalogueText: "",
catalogue: "",
  },
},
},

"virtual-ceiling": {
  "virtual-sky": {
    hero: {
  subtitle: "SHILPKAR™ Collection",
  title: "SHILPVIRTUAL™ SKY",
  description:
    "A premium illuminated virtual ceiling system designed to recreate the visual openness of blue skies and natural daylight within interior spaces.",

  image: images.virtualCeiling.skyHeroBanner,
},

    sections: [
      {
        title: "SHILPVIRTUAL™ SKY",
        subtitle: "Bring the Sky Indoors",
        description:
          "SHILPVIRTUAL™ SKY transforms enclosed interiors into brighter and more open environments with realistic sky visuals and integrated illumination.",
        image: images.virtualCeiling.sky,

        specs: [
          { label: "SYSTEM", value: "Virtual Sky Ceiling" },
          { label: "LIGHTING", value: "Integrated LED" },
          { label: "DESIGN", value: "Custom Sky Visual" },
          { label: "FINISH", value: "Premium Architectural" },
        ],
      },
    ],

    whyChoose: {
      eyebrow: "WHY CHOOSE SHILPVIRTUAL™ SKY",
      title: "Designed for Brighter Interiors",
      items: [
        {
          title: "Realistic Sky Effect",
          description:
            "Creates the visual feeling of an open sky within enclosed interior spaces.",
        },
        {
          title: "Integrated Illumination",
          description:
            "Balanced LED lighting provides a bright and visually comfortable experience.",
        },
        {
          title: "Custom Visuals",
          description:
            "Sky scenes and artwork can be selected to complement the interior design.",
        },
        {
          title: "Premium Integration",
          description:
            "Designed to integrate seamlessly into refined architectural interiors.",
        },
      ],
    },

    applications: {
      eyebrow: "IDEAL APPLICATIONS",
      title: "Designed for Inspiring Spaces",
      items: [
        "Luxury Homes",
        "Bedrooms",
        "Living Rooms",
        "Offices",
        "Hotels",
        "Hospitals",
        "Spa & Wellness",
        "Restaurants",
        "Commercial Interiors",
        "Experience Centres",
      ],
    },

    cta: {
      eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
      title: "Bring the Open Sky Indoors",
      description:
        "Create a brighter and more immersive interior with a customised SHILPVIRTUAL™ SKY solution.",
      primaryText: "Request Free Consultation",
      primaryLink: "/contact",
    },
  },

  "virtual-window": {
    hero: {
      subtitle: "SHILPKAR™ Collection",
      title: "SHILPVIRTUAL™ WINDOW",
      description:
        "A premium illuminated virtual window system designed to introduce the feeling of outdoor views and natural openness into interior spaces.",
      image: images.virtualCeiling.windowHeroBanner,
      },

    sections: [
      {
        title: "SHILPVIRTUAL™ WINDOW",
        subtitle: "A View Beyond the Wall",
        description:
          "Transform ordinary walls into illuminated architectural features that create the impression of a beautiful view beyond the interior.",
        image: images.virtualCeiling.window,

        specs: [
          { label: "SYSTEM", value: "Virtual Window" },
          { label: "VISUAL", value: "Custom Outdoor View" },
          { label: "LIGHTING", value: "Premium LED" },
          { label: "FINISH", value: "Luxury Architectural" },
        ],
      },
    ],

    whyChoose: {
      eyebrow: "WHY CHOOSE SHILPVIRTUAL™ WINDOW",
      title: "Designed to Open Up Your Space",
      items: [
        {
          title: "Realistic Views",
          description:
            "Creates the visual impression of an outdoor environment inside enclosed spaces.",
        },
        {
          title: "Integrated Lighting",
          description:
            "Carefully balanced illumination creates a bright and realistic appearance.",
        },
        {
          title: "Custom Artwork",
          description:
            "Choose landscapes, nature scenes or customised visuals for your project.",
        },
        {
          title: "Architectural Feature",
          description:
            "Transforms a plain wall into a striking premium interior focal point.",
        },
      ],
    },

    applications: {
      eyebrow: "IDEAL APPLICATIONS",
      title: "Designed for Enclosed Interiors",
      items: [
        "Luxury Homes",
        "Bedrooms",
        "Basements",
        "Offices",
        "Hotels",
        "Hospitals",
        "Clinics",
        "Spa & Wellness",
        "Restaurants",
        "Commercial Interiors",
      ],
    },

    cta: {
      eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
      title: "Create a View Without a Window",
      description:
        "Bring visual depth, light and openness into your space with SHILPVIRTUAL™ WINDOW.",
      primaryText: "Request Free Consultation",
      primaryLink: "/contact",
    },
  },

  "virtual-sunlight": {
    hero: {
      subtitle: "SHILPKAR™ Collection",
      title: "SHILPVIRTUAL™ SUNLIGHT",
      description:
        "An advanced illuminated architectural system designed to recreate the warmth and ambience of natural daylight indoors.",
      image: images.virtualCeiling.sunlightHeroBanner,
      },

    sections: [
      {
        title: "SHILPVIRTUAL™ SUNLIGHT",
        subtitle: "Experience the Feeling of Daylight",
        description:
          "Designed for interiors with limited access to natural light, this system creates a bright and inviting architectural atmosphere.",
       image: images.virtualCeiling.sunlight,

        specs: [
          { label: "SYSTEM", value: "Virtual Sunlight" },
          { label: "LIGHTING", value: "Architectural LED" },
          { label: "EFFECT", value: "Natural Daylight Feel" },
          { label: "DESIGN", value: "Custom Installation" },
        ],
      },
    ],

    whyChoose: {
      eyebrow: "WHY CHOOSE SHILPVIRTUAL™ SUNLIGHT",
      title: "Designed for Natural Ambience",
      items: [
        {
          title: "Daylight Inspired",
          description:
            "Creates a bright visual atmosphere inspired by natural daylight.",
        },
        {
          title: "Enhanced Ambience",
          description:
            "Adds warmth and openness to enclosed architectural environments.",
        },
        {
          title: "Seamless Integration",
          description:
            "Designed to become a refined part of ceilings and interior architecture.",
        },
        {
          title: "Custom Planning",
          description:
            "Each installation can be planned around the specific space and concept.",
        },
      ],
    },

    applications: {
      eyebrow: "IDEAL APPLICATIONS",
      title: "Created for Comfortable Interiors",
      items: [
        "Luxury Homes",
        "Living Rooms",
        "Bedrooms",
        "Basements",
        "Offices",
        "Hotels",
        "Hospitals",
        "Wellness Centres",
        "Spa Spaces",
        "Commercial Interiors",
      ],
    },

    cta: {
      eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
      title: "Bring the Feeling of Sunlight Indoors",
      description:
        "Create a brighter and more inviting architectural environment with SHILPVIRTUAL™ SUNLIGHT.",
      primaryText: "Request Free Consultation",
      primaryLink: "/contact",
    },
  },

  "virtual-custom": {
    hero: {
      subtitle: "SHILPKAR™ Collection",
      title: "SHILPVIRTUAL™ CUSTOM",
      description:
        "A completely bespoke virtual ceiling and window solution developed around your unique architectural concept and creative vision.",
      image: images.virtualCeiling.customHeroBanner,
      },

    sections: [
      {
        title: "SHILPVIRTUAL™ CUSTOM",
        subtitle: "Designed Around Your Vision",
        description:
          "From custom artwork and dimensions to lighting effects and architectural integration, every SHILPVIRTUAL™ CUSTOM installation is created specifically for the project.",
       image: images.virtualCeiling.custom,

        specs: [
          { label: "SYSTEM", value: "Bespoke Virtual Solution" },
          { label: "DESIGN", value: "Fully Customised" },
          { label: "LIGHTING", value: "Integrated LED" },
          { label: "APPLICATION", value: "Ceiling & Wall" },
        ],
      },
    ],

    whyChoose: {
      eyebrow: "WHY CHOOSE SHILPVIRTUAL™ CUSTOM",
      title: "Unlimited Creative Possibilities",
      items: [
        {
          title: "Bespoke Concepts",
          description:
            "Create a personalised visual experience designed specifically for your project.",
        },
        {
          title: "Custom Dimensions",
          description:
            "Developed around the exact architectural requirements of the space.",
        },
        {
          title: "Integrated Lighting",
          description:
            "Lighting can be planned to create the desired atmosphere and visual depth.",
        },
        {
          title: "Premium Finish",
          description:
            "Every installation is designed as a refined and distinctive architectural feature.",
        },
      ],
    },

    applications: {
      eyebrow: "IDEAL APPLICATIONS",
      title: "Created for Unique Projects",
      items: [
        "Luxury Residences",
        "Villas",
        "Hotels",
        "Restaurants",
        "Retail Spaces",
        "Corporate Offices",
        "Experience Centres",
        "Wellness Spaces",
        "Entertainment Areas",
        "Premium Commercial Interiors",
      ],
    },

       cta: {
      eyebrow: "LET'S CREATE SOMETHING EXTRAORDINARY",
      title: "Let's Create Your Custom Experience",
      description:
        "Share your concept with our team and create a customised SHILPVIRTUAL™ solution for your space.",
      primaryText: "Request Free Consultation",
      primaryLink: "/contact",
    },
  },
},
};

export default serviceDetails;