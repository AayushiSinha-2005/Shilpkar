import images from "./images";

const serviceDetails = {
  "stretch-ceiling": {
    translucent: {
      hero: {
        title: "Shilpkar™ TRANSLUCENT",
        subtitle: "Translucent & Illuminated Ceiling",
        description:
          "Premium translucent stretch ceiling systems engineered to create seamless illuminated architectural interiors with elegant lighting and luxury finishes.",
      },

      sections: [
        {
          tag: "TYPE 1",
          title: "Shilpkar™ Static White",
          subtitle: "Fixed White LED Stretch Ceiling System",

          image: images.service1,

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

          image: images.service2,

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

          image: images.service3,

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

          image: images.service4,

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
      },

      sections: [
        {
          tag: "TYPE 1",
          title: "Shilpkar™ Static Print",
          subtitle: "Printed Stretch Ceiling",

          image: images.service5,

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

          image: images.service6,

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

          image: images.service7,

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

          image: images.service8,

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
  },
};

export default serviceDetails;