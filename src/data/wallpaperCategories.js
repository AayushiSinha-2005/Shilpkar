const createProducts = (categoryTitle, slug) => [
  {
    title: `${categoryTitle} Design 01`,
    slug: `${slug}-design-01`,
    image: "",
    price: "₹129 / sq.ft",
    description: `A premium ${categoryTitle.toLowerCase()} design created for elegant residential and commercial interiors.`,
  },
  {
    title: `${categoryTitle} Design 02`,
    slug: `${slug}-design-02`,
    image: "",
    price: "₹129 / sq.ft",
    description: `A sophisticated ${categoryTitle.toLowerCase()} design created to add character and visual depth to your interiors.`,
  },
  {
    title: `${categoryTitle} Design 03`,
    slug: `${slug}-design-03`,
    image: "",
    price: "₹129 / sq.ft",
    description: `A contemporary ${categoryTitle.toLowerCase()} design combining premium aesthetics with timeless interior appeal.`,
  },
  {
    title: `${categoryTitle} Design 04`,
    slug: `${slug}-design-04`,
    image: "",
    price: "₹129 / sq.ft",
    description: `A statement ${categoryTitle.toLowerCase()} design for luxury residential and commercial spaces.`,
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
  /* ========================================
     BESPOKEWALL™ — CUSTOMIZED WALLPAPER
  ======================================== */

  "custom-photo-wallpaper": createCategory(
    "Custom Photo Wallpaper",
    "custom-photo-wallpaper",
    "Customer ki wall size, interior theme aur choice ke according specially designed wallpaper."
  ),

  "personalized-name-family-wallpaper": createCategory(
    "Personalized Name & Family Wallpaper",
    "personalized-name-family-wallpaper"
  ),

  "customized-nature-wallpaper": createCategory(
    "Customized Nature Wallpaper",
    "customized-nature-wallpaper"
  ),

  "custom-kids-room-wallpaper": createCategory(
    "Custom Kids Room Wallpaper",
    "custom-kids-room-wallpaper"
  ),

  "corporate-logo-wallpaper": createCategory(
    "Corporate Logo Wallpaper",
    "corporate-logo-wallpaper"
  ),

  "restaurant-theme-wallpaper": createCategory(
    "Restaurant Theme Wallpaper",
    "restaurant-theme-wallpaper"
  ),

  "hotel-resort-wallpaper": createCategory(
    "Hotel & Resort Wallpaper",
    "hotel-resort-wallpaper"
  ),

  "religious-spiritual-wallpaper": createCategory(
    "Religious & Spiritual Wallpaper",
    "religious-spiritual-wallpaper"
  ),

  "customized-map-wallpaper": createCategory(
    "Customized Map Wallpaper",
    "customized-map-wallpaper"
  ),

  "any-image-any-size-wallpaper": createCategory(
    "Any Image, Any Size Wallpaper",
    "any-image-any-size-wallpaper"
  ),

  /* ========================================
     PATTERNLINE™ — REPEAT PATTERN WALLPAPER
  ======================================== */

  "modern-geometric": createCategory(
    "Modern Geometric",
    "modern-geometric"
  ),

  "botanical-tropical": createCategory(
    "Botanical & Tropical",
    "botanical-tropical"
  ),

  "floral-elegance": createCategory(
    "Floral Elegance",
    "floral-elegance"
  ),

  "minimal-patterns": createCategory(
    "Minimal Patterns",
    "minimal-patterns"
  ),

  "classic-damask": createCategory(
    "Classic Damask",
    "classic-damask"
  ),

  "art-deco": createCategory(
    "Art Deco",
    "art-deco"
  ),

  "abstract-patterns": createCategory(
    "Abstract Patterns",
    "abstract-patterns"
  ),

  "kids-patterns": createCategory(
    "Kids Patterns",
    "kids-patterns"
  ),

  "brick-stone-concrete": createCategory(
    "Brick, Stone & Concrete",
    "brick-stone-concrete"
  ),

  "wood-natural-texture": createCategory(
    "Wood & Natural Texture",
    "wood-natural-texture"
  ),

  "indian-heritage-patterns": createCategory(
    "Indian Heritage Patterns",
    "indian-heritage-patterns"
  ),

  "luxury-metallic-patterns": createCategory(
    "Luxury Metallic Patterns",
    "luxury-metallic-patterns"
  ),

  /* ========================================
     EMBROWALL™ — EXCLUSIVE EMBROIDERY WALLPAPER
  ======================================== */

  "floral-embroidery": createCategory(
    "Floral Embroidery",
    "floral-embroidery"
  ),

  "botanical-embroidery": createCategory(
    "Botanical Embroidery",
    "botanical-embroidery"
  ),

  "royal-motif-collection": createCategory(
    "Royal Motif Collection",
    "royal-motif-collection"
  ),

  "indian-heritage-embroidery": createCategory(
    "Indian Heritage Embroidery",
    "indian-heritage-embroidery"
  ),

  "contemporary-line-art": createCategory(
    "Contemporary Line Art",
    "contemporary-line-art"
  ),

  "birds-nature-collection": createCategory(
    "Birds & Nature Collection",
    "birds-nature-collection"
  ),

  "geometric-threadwork": createCategory(
    "Geometric Threadwork",
    "geometric-threadwork"
  ),

  "golden-thread-collection": createCategory(
    "Golden Thread Collection",
    "golden-thread-collection"
  ),

  "customized-monogram-embroidery": createCategory(
    "Customized Monogram Embroidery",
    "customized-monogram-embroidery"
  ),

  "designer-signature-collection": createCategory(
    "Designer Signature Collection",
    "designer-signature-collection"
  ),

  /* ========================================
     WALLSCULPT™ — ARCHITECTURAL WALL MURALS
  ======================================== */

  "3d-architectural-murals": createCategory(
    "3D Architectural Murals",
    "3d-architectural-murals"
  ),

  "sculptural-wall-art": createCategory(
    "Sculptural Wall Art",
    "sculptural-wall-art"
  ),

  "arch-column-designs": createCategory(
    "Arch & Column Designs",
    "arch-column-designs"
  ),

  "hdmr-cnc-wall-panels": createCategory(
    "HDMR + CNC Wall Panels",
    "hdmr-cnc-wall-panels"
  ),

  "canvas-insert-wall-panels": createCategory(
    "Canvas Insert Wall Panels",
    "canvas-insert-wall-panels"
  ),

  "textured-relief-murals": createCategory(
    "Textured Relief Murals",
    "textured-relief-murals"
  ),

  "classical-architectural-art": createCategory(
    "Classical Architectural Art",
    "classical-architectural-art"
  ),

  "modern-luxury-wall-panels": createCategory(
    "Modern Luxury Wall Panels",
    "modern-luxury-wall-panels"
  ),

  "backlit-wall-art": createCategory(
    "Backlit Wall Art",
    "backlit-wall-art"
  ),

  "customized-feature-walls": createCategory(
    "Customized Feature Walls",
    "customized-feature-walls"
  ),

    /* ========================================
     ROOM-WISE SHOPPING CATEGORIES
  ======================================== */

  "living-room-wallpaper": createCategory(
    "Living Room Wallpaper",
    "living-room-wallpaper"
  ),

  "drawing-room-wallpaper": createCategory(
    "Drawing Room Wallpaper",
    "drawing-room-wallpaper"
  ),

  "bedroom-wallpaper": createCategory(
    "Bedroom Wallpaper",
    "bedroom-wallpaper"
  ),

  "kids-room-wallpaper": createCategory(
    "Kids Room Wallpaper",
    "kids-room-wallpaper"
  ),

  "dining-room-wallpaper": createCategory(
    "Dining Room Wallpaper",
    "dining-room-wallpaper"
  ),

  "kitchen-wallpaper": createCategory(
    "Kitchen Wallpaper",
    "kitchen-wallpaper"
  ),

  "office-wallpaper": createCategory(
    "Office Wallpaper",
    "office-wallpaper"
  ),

  "reception-wallpaper": createCategory(
    "Reception Wallpaper",
    "reception-wallpaper"
  ),

  "restaurant-cafe-wallpaper": createCategory(
    "Restaurant & Café Wallpaper",
    "restaurant-cafe-wallpaper"
  ),

  "hotel-resort-room-wallpaper": createCategory(
    "Hotel & Resort Wallpaper",
    "hotel-resort-room-wallpaper"
  ),

  "retail-showroom-wallpaper": createCategory(
    "Retail & Showroom Wallpaper",
    "retail-showroom-wallpaper"
  ),

  "temple-spiritual-wallpaper": createCategory(
    "Temple & Spiritual Wallpaper",
    "temple-spiritual-wallpaper"
  ),
    /* ========================================
     DESIGN-WISE COLLECTIONS
  ======================================== */

  "nature-landscape": createCategory(
    "Nature & Landscape",
    "nature-landscape"
  ),

  "floral-botanical": createCategory(
    "Floral & Botanical",
    "floral-botanical"
  ),

  "abstract-art": createCategory(
    "Abstract Art",
    "abstract-art"
  ),

  "geometric": createCategory(
    "Geometric",
    "geometric"
  ),

  "marble-stone": createCategory(
    "Marble & Stone",
    "marble-stone"
  ),

  "wood-concrete": createCategory(
    "Wood & Concrete",
    "wood-concrete"
  ),

  "luxury-classic": createCategory(
    "Luxury Classic",
    "luxury-classic"
  ),

  "indian-heritage": createCategory(
    "Indian Heritage",
    "indian-heritage"
  ),

  "islamic-art": createCategory(
    "Islamic Art",
    "islamic-art"
  ),

  "spiritual-art": createCategory(
    "Spiritual Art",
    "spiritual-art"
  ),

  "kids-cartoon": createCategory(
    "Kids & Cartoon",
    "kids-cartoon"
  ),

  "world-maps": createCategory(
    "World Maps",
    "world-maps"
  ),

  "cityscapes": createCategory(
    "Cityscapes",
    "cityscapes"
  ),

  "architecture": createCategory(
    "Architecture",
    "architecture"
  ),

  "birds-animals": createCategory(
    "Birds & Animals",
    "birds-animals"
  ),

  "texture-minimal": createCategory(
    "Texture & Minimal",
    "texture-minimal"
  ),

  "embroidery-art": createCategory(
    "Embroidery Art",
    "embroidery-art"
  ),

  "3d-illusion": createCategory(
    "3D Illusion",
    "3d-illusion"
  ),

    /* ========================================
     PREMIUM SPECIAL COLLECTIONS
  ======================================== */

  "signature-walls": createCategory(
    "Signature Walls™",
    "signature-walls"
  ),

  "heritage-loom": createCategory(
    "Heritage Loom™",
    "heritage-loom"
  ),

  "nature-canvas": createCategory(
    "NatureCanvas™",
    "nature-canvas"
  ),

  "royale-walls": createCategory(
    "Royale Walls™",
    "royale-walls"
  ),

  "artisan-walls": createCategory(
    "Artisan Walls™",
    "artisan-walls"
  ),

  "corporate-canvas": createCategory(
    "CorporateCanvas™",
    "corporate-canvas"
  ),

  "little-dreams": createCategory(
    "LittleDreams™",
    "little-dreams"
  ),

  "divine-walls": createCategory(
    "DivineWalls™",
    "divine-walls"
  ),

  "hotelique": createCategory(
    "Hotelique™",
    "hotelique"
  ),

  "wall-muse": createCategory(
    "WallMuse™",
    "wall-muse"
  ),

  
};

export default wallpaperCategories;