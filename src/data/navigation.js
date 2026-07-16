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
    label: "Projects",
    path: "/projects",
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