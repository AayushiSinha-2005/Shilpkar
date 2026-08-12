const createProducts = (categoryTitle, slug) => [
  {
    title: `${categoryTitle} Collection 01`,
    slug: `${slug}-collection-01`,
    image: "",
    price: "₹129 / sq.ft",
    description:
      `A premium ${categoryTitle.toLowerCase()} wallpaper design created for elegant residential and commercial interiors.`,
  },
  {
    title: `${categoryTitle} Collection 02`,
    slug: `${slug}-collection-02`,
    image: "",
    price: "₹129 / sq.ft",
    description:
      `A sophisticated ${categoryTitle.toLowerCase()} mural designed to add character and visual depth to your interiors.`,
  },
  {
    title: `${categoryTitle} Collection 03`,
    slug: `${slug}-collection-03`,
    image: "",
    price: "₹129 / sq.ft",
    description:
      `A contemporary ${categoryTitle.toLowerCase()} design combining premium aesthetics with timeless interior appeal.`,
  },
  {
    title: `${categoryTitle} Collection 04`,
    slug: `${slug}-collection-04`,
    image: "",
    price: "₹129 / sq.ft",
    description:
      `A statement ${categoryTitle.toLowerCase()} mural designed for luxury residential and commercial spaces.`,
  },
];


const createCategory = (title, slug, description) => ({
  title,
  description:
    description ||
    `Explore our collection of ${title.toLowerCase()}, created to bring premium design and artistic character into contemporary interiors.`,
  heroImage: "",
  products: createProducts(title, slug),
});


const wallpaperCategories = {

  /* =========================
     ART & DESIGN
  ========================= */

  "pichwai-wallpaper": {
    title: "Pichwai Wallpaper",

    description:
      "Explore our collection of Pichwai-inspired wall murals, bringing traditional Indian artistry, intricate details and timeless elegance into contemporary interiors.",

    heroImage: "",

    products: [
      {
        title: "Shahi Aangan Wall Mural",
        slug: "shahi-aangan-wall-mural",
        image: "",
        price: "₹129 / sq.ft",
        description:
          "A graceful Pichwai-inspired mural featuring royal Indian courtyard elements and intricate traditional detailing.",
      },
      {
        title: "Peacock Dream Wall Mural",
        slug: "peacock-dream-wall-mural",
        image: "",
        price: "₹129 / sq.ft",
        description:
          "An elegant mural inspired by peacocks, florals and the beauty of traditional Indian art.",
      },
      {
        title: "Morning Grace Pichwai",
        slug: "morning-grace-pichwai",
        image: "",
        price: "₹129 / sq.ft",
        description:
          "A serene Pichwai-inspired composition designed to bring warmth and artistic character to your interiors.",
      },
      {
        title: "Krishna's Sanctuary",
        slug: "krishnas-sanctuary",
        image: "",
        price: "₹129 / sq.ft",
        description:
          "A heritage-inspired mural celebrating Krishna, nature and traditional Indian decorative artistry.",
      },
    ],
  },


  "indian-wallpaper": createCategory(
    "Indian Wallpaper",
    "indian-wallpaper"
  ),

  "abstract-wallpaper": createCategory(
    "Abstract Wallpaper",
    "abstract-wallpaper"
  ),

  "artistic-wallpaper": createCategory(
    "Artistic Wallpaper",
    "artistic-wallpaper"
  ),

  "brushstroke-wallpaper": createCategory(
    "Brushstroke Wallpaper",
    "brushstroke-wallpaper"
  ),

  "chinoiserie-wallpaper": createCategory(
    "Chinoiserie Wallpaper",
    "chinoiserie-wallpaper"
  ),

  "geometric-wallpaper": createCategory(
    "Geometric Wallpaper",
    "geometric-wallpaper"
  ),

  "japanese-wallpaper": createCategory(
    "Japanese Wallpaper",
    "japanese-wallpaper"
  ),

  "art-deco-wallpaper": createCategory(
    "Art Deco Wallpaper",
    "art-deco-wallpaper"
  ),

  "watercolor-wallpaper": createCategory(
    "Watercolor Wallpaper",
    "watercolor-wallpaper"
  ),

  "boho-wallpaper": createCategory(
    "Boho Wallpaper",
    "boho-wallpaper"
  ),

  "scandinavian-wallpaper": createCategory(
    "Scandinavian Wallpaper",
    "scandinavian-wallpaper"
  ),


  /* =========================
     NATURE & SCENERY
  ========================= */

  "forest-wallpaper": createCategory(
    "Forest Wallpaper",
    "forest-wallpaper"
  ),

  "jungle-wallpaper": createCategory(
    "Jungle Wallpaper",
    "jungle-wallpaper"
  ),

  "lake-wallpaper": createCategory(
    "Lake Wallpaper",
    "lake-wallpaper"
  ),

  "landscape-wallpaper": createCategory(
    "Landscape Wallpaper",
    "landscape-wallpaper"
  ),

  "mountain-wallpaper": createCategory(
    "Mountain Wallpaper",
    "mountain-wallpaper"
  ),

  "nature-wallpaper": createCategory(
    "Nature Wallpaper",
    "nature-wallpaper"
  ),

  "ocean-wallpaper": createCategory(
    "Ocean Wallpaper",
    "ocean-wallpaper"
  ),

  "sky-cloud-wallpaper": createCategory(
    "Sky Cloud Wallpaper",
    "sky-cloud-wallpaper"
  ),

  "tree-wallpaper": createCategory(
    "Tree Wallpaper",
    "tree-wallpaper"
  ),

  "tropical-wallpaper": createCategory(
    "Tropical Wallpaper",
    "tropical-wallpaper"
  ),

  "hariyali-wallpaper": createCategory(
    "Hariyali Wallpaper",
    "hariyali-wallpaper"
  ),


  /* =========================
     SURFACE
  ========================= */

  "brick-wallpaper": createCategory(
    "Brick Wallpaper",
    "brick-wallpaper"
  ),

  "concrete-wallpaper": createCategory(
    "Concrete Wallpaper",
    "concrete-wallpaper"
  ),

  "luxurious-wallpaper": createCategory(
    "Luxurious Wallpaper",
    "luxurious-wallpaper"
  ),

  "marble-wallpaper": createCategory(
    "Marble Wallpaper",
    "marble-wallpaper"
  ),

  "metal-wallpaper": createCategory(
    "Metal Wallpaper",
    "metal-wallpaper"
  ),

  "tile-wallpaper": createCategory(
    "Tile Wallpaper",
    "tile-wallpaper"
  ),

  "wood-wallpaper": createCategory(
    "Wood Wallpaper",
    "wood-wallpaper"
  ),


  /* =========================
     KIDS
  ========================= */

  "cartoon-wallpaper": createCategory(
    "Cartoon Wallpaper",
    "cartoon-wallpaper"
  ),

  "children-wallpaper": createCategory(
    "Children Wallpaper",
    "children-wallpaper"
  ),

  "dinosaur-wallpaper": createCategory(
    "Dinosaur Wallpaper",
    "dinosaur-wallpaper"
  ),

  "hot-air-balloon": createCategory(
    "Hot Air Balloon",
    "hot-air-balloon"
  ),

  "kids-map-wallpaper": createCategory(
    "Kids Map Wallpaper",
    "kids-map-wallpaper"
  ),

  "kids-mountains-wallpaper": createCategory(
    "Kids Mountains Wallpaper",
    "kids-mountains-wallpaper"
  ),

  "nursery-wallpaper": createCategory(
    "Nursery Wallpaper",
    "nursery-wallpaper"
  ),

  "pirate-wallpaper": createCategory(
    "Pirate Wallpaper",
    "pirate-wallpaper"
  ),

  "rainbow-wallpaper": createCategory(
    "Rainbow Wallpaper",
    "rainbow-wallpaper"
  ),

  "space-wallpaper": createCategory(
    "Space Wallpaper",
    "space-wallpaper"
  ),


  /* =========================
     BOTANICAL
  ========================= */

  "floral-wallpaper": createCategory(
    "Floral Wallpaper",
    "floral-wallpaper"
  ),

  "flower-wallpaper": createCategory(
    "Flower Wallpaper",
    "flower-wallpaper"
  ),

  "leaf-wallpaper": createCategory(
    "Leaf Wallpaper",
    "leaf-wallpaper"
  ),

  "peony-wallpaper": createCategory(
    "Peony Wallpaper",
    "peony-wallpaper"
  ),

  "botanical-wallpaper": createCategory(
    "Botanical Wallpaper",
    "botanical-wallpaper"
  ),


  /* =========================
     THEMATIC & STYLES
  ========================= */

  "classic-wallpaper": createCategory(
    "Classic Wallpaper",
    "classic-wallpaper"
  ),

  "feather-wallpaper": createCategory(
    "Feather Wallpaper",
    "feather-wallpaper"
  ),

  "modern-wallpaper": createCategory(
    "Modern Wallpaper",
    "modern-wallpaper"
  ),

  "monochrome-wallpaper": createCategory(
    "Monochrome Wallpaper",
    "monochrome-wallpaper"
  ),

  "nautical-wallpaper": createCategory(
    "Nautical Wallpaper",
    "nautical-wallpaper"
  ),

  "ombre-wallpaper": createCategory(
    "Ombre Wallpaper",
    "ombre-wallpaper"
  ),

  "retro-wallpaper": createCategory(
    "Retro Wallpaper",
    "retro-wallpaper"
  ),

  "vintage-wallpaper": createCategory(
    "Vintage Wallpaper",
    "vintage-wallpaper"
  ),

  "rustic-wallpaper": createCategory(
    "Rustic Wallpaper",
    "rustic-wallpaper"
  ),

  /* =========================
     SPECIAL FEATURES
  ========================= */

  "latest-wallpaper": createCategory(
    "Latest Wallpaper",
    "latest-wallpaper"
  ),

  "peel-and-stick-wallpaper": createCategory(
    "Peel and Stick Wallpaper",
    "peel-and-stick-wallpaper"
  ),

  "removable-wallpaper": createCategory(
    "Removable Wallpaper",
    "removable-wallpaper"
  ),

  "self-adhesive-wallpaper": createCategory(
    "Self Adhesive Wallpaper",
    "self-adhesive-wallpaper"
  ),

  "temporary-wallpaper": createCategory(
    "Temporary Wallpaper",
    "temporary-wallpaper"
  ),

  /* =========================
     ANIMAL & WILDLIFE
  ========================= */

  "birds-wallpaper": createCategory(
    "Birds Wallpaper",
    "birds-wallpaper"
  ),

  "butterfly-wallpaper": createCategory(
    "Butterfly Wallpaper",
    "butterfly-wallpaper"
  ),

  "elephant-wallpaper": createCategory(
    "Elephant Wallpaper",
    "elephant-wallpaper"
  ),

  "underwater-wallpaper": createCategory(
    "Underwater Wallpaper",
    "underwater-wallpaper"
  ),
};


export default wallpaperCategories;