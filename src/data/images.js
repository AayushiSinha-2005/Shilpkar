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
const u = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("photo-1618221195710-dd6b41faaea6", 2000),
  heroAlt: u("photo-1616486338812-3dadae4b4ace", 2000),

  aboutPreview: u("photo-1615874959474-d609969a20ed", 1400),
  ownerPhoto: ownerPortrait,
  creativeDirector,
  ownerBackdrop: u("photo-1600210492486-724fe5c67fb0", 1800),

  servicesCover: u("photo-1600585154340-be6161a56a0c", 1400),

  service1: u("photo-1600607687939-ce8a6c25118c", 1200),
  service2: u("photo-1616137466211-f939a420be84", 1200),
  service3: u("photo-1583847268964-b28dc8f51f92", 1200),
  service4: u("photo-1598928506311-c55ded91a20c", 1200),
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