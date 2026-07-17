const navigation = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "About",
    path: "/about",
  },

  {
    label: "Solutions",
    children: [
      {
        label: "Ceilings",
        path: "/solutions/ceilings",
      },

      {
        label: "Walls",
        path: "/solutions/walls",
      },

      {
        label: "Floors",
        path: "/solutions/floors",
      },
    ],
  },

  {
    label: "Services",
    path: "/services",
  },

  {
  label: "Franchise",
  children: [
    {
      label: "Dealership",
      path: "/franchise/dealership",
    },
    {
      label: "Associate",
      path: "/franchise/associate",
    },
    {
      label: "Installation Training",
      path: "/franchise/installation-training",
    },
  ],
},


  {
    label: "Certifications",
    path: "/certifications",
  },

  {
    label: "Gallery",
    path: "/gallery",
  },

  {
    label: "Contact",
    path: "/contact",
  },
];

export default navigation;