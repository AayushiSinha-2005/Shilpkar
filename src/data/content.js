// Central content store. Replace image URLs with files from
// /src/assets/images/ once real photography is available.

export const services = [
  {
    slug: 'residential-interiors',
    index: '01',
    title: 'Residential Interiors',
    desc: 'Full-home interior design — from spatial planning to the last cushion.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'modern-architecture',
    index: '02',
    title: 'Modern Architecture',
    desc: 'Ground-up architectural design for homes, villas and boutique buildings.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'commercial-spaces',
    index: '03',
    title: 'Commercial Spaces',
    desc: 'Offices, showrooms and hospitality interiors built for brand and flow.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'custom-furniture',
    index: '04',
    title: 'Custom Furniture',
    desc: 'Hand-detailed furniture and joinery, made to the room it lives in.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'lighting-design',
    index: '05',
    title: 'Lighting Design',
    desc: 'Layered lighting schemes that shape mood, depth and material.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
  },
  {
    slug: 'landscape-design',
    index: '06',
    title: 'Landscape & Facade',
    desc: 'Outdoor living, courtyards and facades that extend the interior world.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
  },
];

export const projects = [
  {
    slug: 'the-birchwood-residence',
    title: 'The Birchwood Residence',
    location: 'Gurugram, India',
    year: '2024',
    category: 'Residential Interior',
    cover: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop',
    description:
      'A 6,200 sq. ft. family home reworked around a central light court, walnut joinery and a warm, tactile material palette. Every room was designed to soften as the day turns, from bright working spaces at the front to low, amber-lit living areas at the rear.',
    details: {
      Area: '6,200 sq. ft.',
      Scope: 'Interior Design + Furniture',
      Duration: '11 months',
      Location: 'Gurugram, India',
    },
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'villa-noor',
    title: 'Villa Noor',
    location: 'Alibaug, India',
    year: '2023',
    category: 'Modern Architecture',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    description:
      'A coastal villa built around cross-ventilation and a courtyard pool, with deep stone eaves that keep the interior cool through the peak months. The material language stays consistent inside and out: lime plaster, teak and hand-finished stone.',
    details: {
      Area: '8,400 sq. ft.',
      Scope: 'Architecture + Interiors',
      Duration: '19 months',
      Location: 'Alibaug, India',
    },
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'atelier-verde-office',
    title: 'Atelier Verde Office',
    location: 'Bengaluru, India',
    year: '2023',
    category: 'Commercial Space',
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    description:
      'A 14,000 sq. ft. workspace for a design studio, organised around a central greenhouse atrium. Brass, terrazzo and cane furniture bring warmth to an otherwise disciplined material grid.',
    details: {
      Area: '14,000 sq. ft.',
      Scope: 'Commercial Interior',
      Duration: '8 months',
      Location: 'Bengaluru, India',
    },
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'the-fig-house',
    title: 'The Fig House',
    location: 'Dehradun, India',
    year: '2022',
    category: 'Residential Architecture',
    cover: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop',
    description:
      'A hillside retreat wrapped around a century-old fig tree, with board-formed concrete, oak floors and full-height glazing that keeps the forest present from every room.',
    details: {
      Area: '5,100 sq. ft.',
      Scope: 'Architecture + Interiors',
      Duration: '14 months',
      Location: 'Dehradun, India',
    },
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'the-copper-loft',
    title: 'The Copper Loft',
    location: 'Mumbai, India',
    year: '2022',
    category: 'Residential Interior',
    cover: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    description:
      'A compact 1,800 sq. ft. apartment reimagined with custom joinery, brushed-copper fixtures and a single continuous flooring material to make the small footprint feel expansive.',
    details: {
      Area: '1,800 sq. ft.',
      Scope: 'Interior Design',
      Duration: '5 months',
      Location: 'Mumbai, India',
    },
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop',
    ],
  },
  {
    slug: 'sundial-pavilion',
    title: 'Sundial Pavilion',
    location: 'Jaipur, India',
    year: '2021',
    category: 'Hospitality',
    cover: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    description:
      'A boutique event pavilion built from local sandstone, referencing traditional jaali screens reinterpreted as a modern perforated facade that filters desert light through the day.',
    details: {
      Area: '9,600 sq. ft.',
      Scope: 'Architecture + Landscape',
      Duration: '16 months',
      Location: 'Jaipur, India',
    },
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
    ],
  },
];

export const testimonials = [
  {
    name: 'Ritika Malhotra',
    role: 'Homeowner, The Birchwood Residence',
    quote:
      'Shilpkar Factory understood our home before we could fully explain it ourselves. Every material choice feels considered, not decorative.',
  },
  {
    name: 'Karan Sethi',
    role: 'Director, Atelier Verde',
    quote:
      'Our office finally feels like the studio we always described to clients. The atrium alone changed how the whole team works.',
  },
  {
    name: 'Meher Kapoor',
    role: 'Homeowner, Villa Noor',
    quote:
      'Precise, patient and genuinely obsessed with detail. The house performs beautifully in the heat and still feels warm and personal.',
  },
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop', alt: 'Living room interior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop', alt: 'Dining space' },
  { id: 3, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop', alt: 'Villa facade' },
  { id: 4, src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', alt: 'Office interior' },
  { id: 5, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop', alt: 'Apartment loft' },
  { id: 6, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop', alt: 'Hillside house' },
  { id: 7, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop', alt: 'Lighting detail' },
  { id: 8, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop', alt: 'Pavilion facade' },
];

export const timeline = [
  { year: '2012', title: 'Studio Founded', text: 'Shilpkar Factory begins as a two-person design practice in Gurugram.' },
  { year: '2015', title: 'First Landmark Project', text: 'Completion of our first ground-up residence, setting the material language we still use today.' },
  { year: '2018', title: 'Commercial Studio Launched', text: 'A dedicated commercial and hospitality wing opens, led by a growing team of architects.' },
  { year: '2021', title: '50 Projects Delivered', text: 'The studio crosses fifty completed residences, offices and pavilions across India.' },
  { year: '2024', title: 'In-House Furniture Atelier', text: 'A dedicated joinery and furniture workshop opens, bringing custom pieces fully in-house.' },
];
