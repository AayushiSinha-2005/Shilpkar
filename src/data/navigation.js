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
      label: " Training",
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