/**
 * Central image manifest.
 * -----------------------------------------------------------------------
 * Every image used across the site is declared here, pointing to Unsplash
 * for now. To use your own photography: drop files into
 * `src/assets/images/` and swap the corresponding path below, e.g.
 *   hero: new URL("../assets/images/hero.jpg", import.meta.url).href
 * No other file needs to change.
 * -----------------------------------------------------------------------
 */

import ownerPortrait from "../assets/images/ProfilePhoto.png";
import creativeDirector from "../assets/images/CreativeDirector.jpeg";
import hero1 from "../assets/images/hero1.webp";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";
import hero4 from "../assets/images/hero4.webp";
import shilpkarDealershipTerritory from "../assets/images/shilpkar-dealership-territory.png";
import shilpkarAssociateProjectSupport from "../assets/images/shilpkar-associate-project-support.png";
import associateCover from "../assets/images/associate-cover.webp";
import shilpkarDealershipHero from "../assets/images/shilpkar-dealership-hero.png";
import shopBackground from "../assets/images/shopbycategory hero.png";

const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
heroSlides: [
  hero1,
  hero2,
  hero3,
  hero4,
],
  heroAlt: u("photo-1616486338812-3dadae4b4ace", 2000),
  territory: shilpkarDealershipTerritory,
  associateProjectSupport: shilpkarAssociateProjectSupport,
  aboutPreview: u("photo-1615874959474-d609969a20ed", 1400),
  ownerPhoto: ownerPortrait,
  creativeDirector,
  shilpkarDealershipHero,
  associateCover,
  ownerBackdrop: u("photo-1600210492486-724fe5c67fb0", 1800),
  servicesCover: u("photo-1600585154340-be6161a56a0c", 1400),
  shopBackground,

service1: new URL(
  "../assets/images/services/stretch-ceiling/main/stretch-ceiling-main.png",
  import.meta.url
).href,

translucent: {
  main: new URL(
    "../assets/images/services/stretch-ceiling/translucent/stretch ceiling 1.png",
    import.meta.url
  ).href,

  staticWhite: new URL(
    "../assets/images/services/stretch-ceiling/translucent/static-white.png",
    import.meta.url
  ).href,

  cctWhite: new URL(
    "../assets/images/services/stretch-ceiling/translucent/cct-white.png",
    import.meta.url
  ).href,

  rgbw: new URL(
    "../assets/images/services/stretch-ceiling/translucent/RGBW Stretch Ceiling.png",
    import.meta.url
  ).href,

  rgbwProgramming: new URL(
    "../assets/images/services/stretch-ceiling/translucent/RGBW Programming.png",
    import.meta.url
  ).href,
},

printed: {
  staticPrint: new URL(
    "../assets/images/services/stretch-ceiling/printed/static-print.png",
    import.meta.url
  ).href,

  cctPrint: new URL(
    "../assets/images/services/stretch-ceiling/printed/cct-print.png",
    import.meta.url
  ).href,

  rgbw: new URL(
    "../assets/images/services/stretch-ceiling/printed/Printed RGBW.png",
    import.meta.url
  ).href,

  rgbwProgramming: new URL(
    "../assets/images/services/stretch-ceiling/printed/Printed RGBW Programming.png",
    import.meta.url
  ).href,

  printed4k: new URL(
    "../assets/images/services/stretch-ceiling/printed/Printed 4k png.png",
    import.meta.url
  ).href,

  main: new URL(
    "../assets/images/services/stretch-ceiling/printed/Printed Stretch Ceiling.png",
    import.meta.url
  ).href,
},

gloss: {
  main: new URL(
    "../assets/images/services/stretch-ceiling/gloss/Glossy Stretch Ceiling.png",
    import.meta.url
  ).href,

  reflection: new URL(
    "../assets/images/services/stretch-ceiling/gloss/glossy 2.jpg",
    import.meta.url
  ).href,
},

panel: {
  grid: new URL(
    "../assets/images/services/stretch-ceiling/panel/2x2 pannel.png",
    import.meta.url
  ).href,

  design: new URL(
    "../assets/images/services/stretch-ceiling/panel/Pannel 2.png",
    import.meta.url
  ).href,
},

textile: {
  main: new URL(
    "../assets/images/services/textile-ceiling/main/Textile main.png",
    import.meta.url
  ).href,

  wave: new URL(
    "../assets/images/services/textile-ceiling/wave/textile wave.webp",
    import.meta.url
  ).href,

  frill: new URL(
    "../assets/images/services/textile-ceiling/frill/textile frill.webp",
    import.meta.url
  ).href,

  snake: new URL(
    "../assets/images/services/textile-ceiling/snake/textile snake.webp",
    import.meta.url
  ).href,

  custom: new URL(
    "../assets/images/services/textile-ceiling/custom/Textile Ceiling.png",
    import.meta.url
  ).href,
},

fiberOptic: {
  main: new URL(
    "../assets/images/services/fiber-optic/main/fiber-optic-static.png",
    import.meta.url
  ).href,

  static: new URL(
    "../assets/images/services/fiber-optic/static/fiber-optic-static.avif",
    import.meta.url
  ).href,

  twinkle: new URL(
    "../assets/images/services/fiber-optic/twinkle/twinkle-star-fiber-optic.png",
    import.meta.url
  ).href,

  rgb: new URL(
    "../assets/images/services/fiber-optic/rgb/fiber-optic-rgb.avif",
    import.meta.url
  ).href,

  galaxyPro: new URL(
    "../assets/images/services/fiber-optic/galaxy-pro/Galaxy-Design-Fiber-Light.jpg",
    import.meta.url
  ).href,
},


virtualCeiling: {
  main: new URL(
    "../assets/images/services/virtual-ceiling/main/virtual ceiling main.webp",
    import.meta.url
  ).href,

  sky: new URL(
    "../assets/images/services/virtual-ceiling/sky/Sunlight virtual.png",
    import.meta.url
  ).href,

  window: new URL(
    "../assets/images/services/virtual-ceiling/window/virtual window.webp",
    import.meta.url
  ).href,

  sunlight: new URL(
    "../assets/images/services/virtual-ceiling/sunlight/Sunlight virtual image.png",
    import.meta.url
  ).href,

  custom: new URL(
    "../assets/images/services/virtual-ceiling/custom/virtual ceiling.webp",
    import.meta.url
  ).href,
},


service2: new URL(
  "../assets/images/services/textile-ceiling/main/Textile main.png",
  import.meta.url
).href,

service3: new URL(
  "../assets/images/services/fiber-optic/main/fiber-optic-static.png",
  import.meta.url
).href,

service4: new URL(
  "../assets/images/services/virtual-ceiling/main/virtual ceiling main.webp",
  import.meta.url
).href,

  service5: u("photo-1591474200742-8e512e6f98f8", 1200),
  service6: u("photo-1524758631624-e2822e304c36", 1200),
  service7: u("photo-1616137466211-f939a420be84", 1200),
  service8: u("photo-1598928506311-c55ded91a20c", 1200),


  gallery: [
    u("photo-1519710164239-da123dc03ef4", 1400),
    u("photo-1493809842364-78817add7ffb", 1400),
    u("photo-1484154218962-a197022b5858", 1400),
    u("photo-1560184897-ae75f418493e", 1400),
    u("photo-1567538096630-e0c55bd6374c", 1400),
    u("photo-1571508601891-ca5e7a713859", 1400),
    u("photo-1505873242700-f289a29e1e0f", 1400),
    u("photo-1505691938895-1758d7feb511", 1400),
    u("photo-1522771739844-6a9f6d5f14af", 1400),
    u("photo-1615529182904-14819c35db37", 1400),
    u("photo-1616046229478-9901c5536a45", 1400),
    u("photo-1631679706909-1844bbd07221", 1400),
  ],

  projects: [
    { img: u("photo-1600566753086-00f18fb6b3ea", 1400), title: "Malabar Hill Residence", tag: "Residential" },
    { img: u("photo-1600121848594-d8644e57abab", 1400), title: "Worli Sky Penthouse", tag: "Penthouse" },
    { img: u("photo-1600585154526-990dced4db0d", 1400), title: "Alibaug Weekend Villa", tag: "Villa" },
    { img: u("photo-1600566752355-35792bedcfea", 1400), title: "BKC Executive Suite", tag: "Commercial" },
    { img: u("photo-1600607688969-a5bfcd646154", 1400), title: "Juhu Coastal Home", tag: "Residential" },
    { img: u("photo-1600210491892-03d54c0aaf87", 1400), title: "Lower Parel Loft", tag: "Loft" },
    { img: u("photo-1618219944342-824e40a13285", 1400), title: "Bandra Bandstand Duplex", tag: "Residential" },
    { img: u("photo-1600489000022-c2086d79f9d4", 1400), title: "Pali Hill Studio", tag: "Studio" },
  ],
  contactBackdrop: u("photo-1600047509807-ba8f99d2cdde", 1800),
};
export default images;