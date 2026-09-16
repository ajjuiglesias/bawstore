export interface ProductColor {
  name: string;
  value: string;
  inStock: boolean;
}

export interface ProductBundle {
  id: string;
  qty: number;
  title: string;
  unitPrice: number;
  totalPrice: number;
  savings: number;
  tag?: string;
  recommended?: boolean;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
  text: string;
  location: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  badge?: string;
  badgeType?: "best" | "premium" | "hot" | "trend";
  rating: number;
  reviewsCount: number;
  regularPrice: number;
  price: number;
  discountPercent: number;
  cogs: number; // Cost of Goods Sold for Admin
  stock: number;
  sku: string;
  images: string[];
  colors?: ProductColor[];
  highlights: string[];
  dimensions: string;
  weight: string;
  warranty: string;
  delivery: string;
  bundles?: ProductBundle[];
  reviews?: Review[];
}

export const PRODUCTS: Product[] = [
  {
    id: "baw-cabinet-pro-5",
    title: "BAW Modular 5-Tier Foldable Storage Cabinet Pro Max",
    category: "Modular Storage",
    categorySlug: "storage",
    badge: "2026 Best Seller",
    badgeType: "best",
    rating: 4.96,
    reviewsCount: 428,
    regularPrice: 280,
    price: 159,
    discountPercent: 43,
    cogs: 62,
    stock: 7,
    sku: "BAW-MOD-CAB-5T",
    images: [
      "/images/cabinet-main.jpg",
      "/images/cabinet-detail.jpg"
    ],
    colors: [
      { name: "Matte Graphite", value: "#262626", inStock: true },
      { name: "Nordic Snow White", value: "#f8fafc", inStock: true },
      { name: "Warm Walnut Wood", value: "#5c3d2e", inStock: true }
    ],
    highlights: [
      "Patented 3-Minute Tool-less Assembly — Simply unfold, snap, and load",
      "Semi-transparent fluted magnetic doors with silent acoustic dampers",
      "Reinforced aerospace polymer frame supporting up to 265 lbs (120 kg)",
      "360° smooth glide lockable wheels for effortless room repositioning",
      "Dust-proof and moisture-sealed modular compartment design"
    ],
    dimensions: "61.4\" H × 25.6\" W × 16.5\" D (156 × 65 × 42 cm)",
    weight: "18.5 lbs (8.4 kg)",
    warranty: "2-Year Comprehensive Warranty + 30-Day Home Trial",
    delivery: "Express White-Glove Courier Delivery • Cash on Delivery (COD) Available",
    bundles: [
      {
        id: "single",
        qty: 1,
        title: "Standard Single Unit",
        unitPrice: 159,
        totalPrice: 159,
        savings: 121,
        tag: "Popular"
      },
      {
        id: "double",
        qty: 2,
        title: "Dual Home Duo (Save Extra $38)",
        unitPrice: 140,
        totalPrice: 280,
        savings: 280,
        tag: "Most Popular",
        recommended: true
      },
      {
        id: "bundle-3-plus-1",
        qty: 4,
        title: "Master Pack: Buy 3 + 1 FREE (Get 4 Units)",
        unitPrice: 119.25,
        totalPrice: 477,
        savings: 643,
        tag: "Buy 3 + 1 Free"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        location: "Tel Aviv, IL",
        rating: 5,
        date: "2 days ago",
        verified: true,
        text: "Exceeded every expectation. Arrived in 48 hours, unpacked and set up in literally 3 minutes with zero tools. The magnetic doors close with a whisper. Absolute luxury quality."
      },
      {
        id: 2,
        author: "David K.",
        location: "Zurich, CH",
        rating: 5,
        date: "5 days ago",
        verified: true,
        text: "I bought the Dual Pack for my walk-in closet and living room. The ribbed glass effect looks stunning in natural daylight. Definitely feels like a $600 designer piece."
      },
      {
        id: 3,
        author: "Emma R.",
        location: "London, UK",
        rating: 5,
        date: "1 week ago",
        verified: true,
        text: "Paid cash directly to the courier upon delivery. Smooth process, fantastic customer service on WhatsApp. Highly recommend BAW!"
      }
    ]
  },
  {
    id: "baw-ergo-lounge-chair",
    title: "BAW Cloud 360° Ergonomic Swivel Recliner & Ottoman",
    category: "Lounge & Furniture",
    categorySlug: "furniture",
    badge: "Luxury Comfort",
    badgeType: "premium",
    rating: 4.93,
    reviewsCount: 214,
    regularPrice: 650,
    price: 395,
    discountPercent: 39,
    cogs: 185,
    stock: 4,
    sku: "BAW-CHAIR-CLOUD-360",
    images: ["/images/chair.jpg"],
    colors: [
      { name: "Cream Bouclé", value: "#fdfbf7", inStock: true },
      { name: "Slate Charcoal", value: "#334155", inStock: true }
    ],
    highlights: [
      "135° infinite tilt mechanism with ergonomic lumbar stabilization",
      "Ultra-silent 360-degree swivel bearing on solid curved oak base",
      "Matching dual-density contour ottoman included for full leg decompression",
      "Hypoallergenic, stain-resistant high-performance bouclé fabric"
    ],
    dimensions: "38.5\" H × 32.2\" W × 33.4\" D",
    weight: "43 lbs (19.5 kg)",
    warranty: "5-Year Structural Frame Warranty",
    delivery: "Free Doorstep Delivery • Cash on Delivery (COD) Available"
  },
  {
    id: "baw-shoes-display-6",
    title: "Pro-Display Magnetic Acrylic Sneaker Showcase (6-Pack)",
    category: "Sneaker Displays",
    categorySlug: "shoes",
    badge: "Buy 3+1 Eligible",
    badgeType: "hot",
    rating: 4.89,
    reviewsCount: 312,
    regularPrice: 190,
    price: 110,
    discountPercent: 42,
    cogs: 42,
    stock: 14,
    sku: "BAW-SHOE-BOX-6PK",
    images: ["/images/shoes.jpg"],
    colors: [
      { name: "Crystal Clear HD", value: "#e2e8f0", inStock: true },
      { name: "Smoked Obsidian", value: "#1e293b", inStock: true }
    ],
    highlights: [
      "Patented interlocking groove system allows safe stacking up to 15 tiers",
      "Front-drop magnetic door with micro-ventilation prevents odor buildup",
      "Fits high-top basketball sneakers & boots up to US Men's size 15",
      "Optical grade 99.8% clarity acrylic with UV fade protection"
    ],
    dimensions: "14.2\" L × 11.0\" W × 8.7\" H per crate",
    weight: "9.2 lbs (4.2 kg)",
    warranty: "2-Year Acrylic Clarity Guarantee",
    delivery: "Express Courier Delivery"
  },
  {
    id: "baw-flexi-desk",
    title: "BAW FlexiDesk Mobile Pneumatic Overbed & Sofa Table",
    category: "Lounge & Furniture",
    categorySlug: "furniture",
    badge: "Everyday Essential",
    badgeType: "trend",
    rating: 4.86,
    reviewsCount: 168,
    regularPrice: 140,
    price: 85,
    discountPercent: 39,
    cogs: 34,
    stock: 9,
    sku: "BAW-DESK-FLEXI",
    images: ["/images/cabinet-detail.jpg"],
    highlights: [
      "Smooth one-touch hydraulic gas lift from 25.5\" to 37.4\" height",
      "Integrated gadget slot for iPad, phone, and mug with spill guard",
      "Ultra-low profile caster wheels slide under sofas as low as 2.8\""
    ],
    dimensions: "Top: 23.6\" × 15.7\" | Height: 25.5\"-37.4\"",
    weight: "11.2 lbs (5.1 kg)",
    warranty: "1-Year Warranty",
    delivery: "Express Delivery"
  },
  {
    id: "baw-smart-nightstand",
    title: "BAW Smart Wireless Charging Nightstand with Ambient LED",
    category: "Smart Tables",
    categorySlug: "furniture",
    badge: "Smart Home",
    badgeType: "trend",
    rating: 4.92,
    reviewsCount: 142,
    regularPrice: 195,
    price: 129,
    discountPercent: 34,
    cogs: 52,
    stock: 11,
    sku: "BAW-SMART-NT",
    images: ["/images/smart-nightstand.jpg"],
    highlights: [
      "15W Fast Qi Wireless Charging pad seamlessly integrated into oak top",
      "Motion-activated warm ambient underglow nightlight",
      "Soft-close solid oak drawer with brushed black steel legs"
    ],
    dimensions: "19.7\" W × 15.7\" D × 21.6\" H",
    weight: "16.4 lbs (7.4 kg)",
    warranty: "2-Year Warranty",
    delivery: "Express Courier Delivery • COD Available"
  },
  {
    id: "baw-kitchen-carousel",
    title: "BAW 360° Rotating Multi-Tier Spice & Pantry Carousel",
    category: "Modular Storage",
    categorySlug: "storage",
    badge: "Kitchen",
    badgeType: "best",
    rating: 4.88,
    reviewsCount: 95,
    regularPrice: 75,
    price: 49,
    discountPercent: 35,
    cogs: 18,
    stock: 22,
    sku: "BAW-KT-CAROUSEL",
    images: ["/images/kitchen-carousel.jpg"],
    highlights: [
      "Heavy-duty ball-bearing 360° whisper-smooth rotation",
      "Matte black carbon steel with rust-resistant powder coat",
      "Dual-tier spice jars organizer holding up to 20 bottles"
    ],
    dimensions: "11.8\" Diameter × 13.5\" Height",
    weight: "4.8 lbs (2.2 kg)",
    warranty: "1-Year Warranty",
    delivery: "Express Delivery"
  },
  {
    id: "baw-comfort-armchair",
    title: "BAW Comfort Lounge Armchair in Powder Blue",
    category: "Lounge & Furniture",
    categorySlug: "furniture",
    badge: "Signature Icon",
    badgeType: "premium",
    rating: 4.97,
    reviewsCount: 184,
    regularPrice: 990,
    price: 699,
    discountPercent: 29,
    cogs: 320,
    stock: 5,
    sku: "BAW-CHAIR-COMFORT-BLU",
    images: ["/images/hongo-hero-chair.jpg", "/images/hongo-sofa-duo.jpg"],
    colors: [
      { name: "Powder Blue", value: "#99b7cb", inStock: true },
      { name: "Nordic Oatmeal", value: "#e8e1d5", inStock: true },
      { name: "Charcoal Slate", value: "#374151", inStock: true }
    ],
    highlights: [
      "Precision-sculpted ergonomic curved silhouette inspired by Scandinavian minimalism",
      "High-resilience memory-foam cushioning upholstered in stain-resistant brushed woven fabric",
      "Reinforced solid European beechwood internal frame supporting up to 350 lbs (160 kg)",
      "Zero-tool 3-minute leg attachment system with protective floor-glide feet",
      "Hypoallergenic and OEKO-TEX® Standard 100 certified upholstery"
    ],
    dimensions: "34.2\" H × 33.8\" W × 31.5\" D",
    weight: "32 lbs (14.5 kg)",
    warranty: "5-Year Structural Frame Warranty + 30-Day Home Trial",
    delivery: "Free White-Glove Courier Delivery • Cash on Delivery (COD) Available",
    bundles: [
      {
        id: "single",
        qty: 1,
        title: "Single Comfort Armchair",
        unitPrice: 699,
        totalPrice: 699,
        savings: 291,
        tag: "Best Value"
      },
      {
        id: "pair",
        qty: 2,
        title: "Living Room Duo (Pair of 2 Chairs)",
        unitPrice: 629,
        totalPrice: 1258,
        savings: 722,
        tag: "Save Extra $140",
        recommended: true
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Oliver Bennett",
        location: "Geneva, Switzerland",
        rating: 5,
        date: "3 days ago",
        verified: true,
        text: "The powder blue color is even more stunning in person than on screen. Unbelievably comfortable, looks like an architectural centerpiece in our lounge.",
      },
      {
        id: 2,
        author: "Mia Lindqvist",
        location: "Stockholm, Sweden",
        rating: 5,
        date: "1 week ago",
        verified: true,
        text: "Delivered in immaculate packaging. The courier was very courteous and accepted COD with zero issues. Fantastic design!",
      }
    ]
  },
  {
    id: "baw-curved-chair",
    title: "Curved Ash Wood Dining & Accent Armchair",
    category: "Lounge & Furniture",
    categorySlug: "furniture",
    badge: "Handcrafted",
    badgeType: "best",
    rating: 4.91,
    reviewsCount: 127,
    regularPrice: 195,
    price: 140,
    discountPercent: 28,
    cogs: 65,
    stock: 12,
    sku: "BAW-WD-CHAIR-CURV",
    images: ["/images/hongo-wooden-chair.jpg"],
    colors: [
      { name: "Natural Ash Wood", value: "#d7b489", inStock: true },
      { name: "Smoked Walnut", value: "#5c3d2e", inStock: true },
      { name: "Ebony Black", value: "#1f1f1f", inStock: true }
    ],
    highlights: [
      "Steam-bent continuous solid ash backrest for gentle spine support",
      "Tenon and mortise joinery engineered for lifetime durability",
      "Hand-finished organic matte polyurethane protective coating"
    ],
    dimensions: "30.5\" H × 22.4\" W × 21.6\" D",
    weight: "14.2 lbs (6.4 kg)",
    warranty: "3-Year Craftsmanship Warranty",
    delivery: "Express Courier Delivery • COD Available",
    bundles: [
      {
        id: "single",
        qty: 1,
        title: "Single Wood Armchair",
        unitPrice: 140,
        totalPrice: 140,
        savings: 55,
        tag: "Standard"
      },
      {
        id: "set-of-4",
        qty: 4,
        title: "Dining Suite Pack (Set of 4 Chairs)",
        unitPrice: 120,
        totalPrice: 480,
        savings: 300,
        tag: "Most Popular",
        recommended: true
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Julian Chen",
        location: "Tel Aviv, IL",
        rating: 5,
        date: "4 days ago",
        verified: true,
        text: "The wood curvature is pure perfection. Sturdy, elegant, and matches our oak dining table impeccably.",
      }
    ]
  },
  {
    id: "baw-sage-chair",
    title: "Nordic Sage Green Minimalist Accent Chair",
    category: "Lounge & Furniture",
    categorySlug: "furniture",
    badge: "Trending",
    badgeType: "trend",
    rating: 4.89,
    reviewsCount: 88,
    regularPrice: 220,
    price: 160,
    discountPercent: 27,
    cogs: 72,
    stock: 8,
    sku: "BAW-CHAIR-SAGE",
    images: ["/images/hongo-sage-chair.jpg"],
    colors: [
      { name: "Nordic Sage", value: "#98a896", inStock: true },
      { name: "Sand Dune", value: "#dfd6c6", inStock: true }
    ],
    highlights: [
      "Muted sage green tone created by custom botanical dye formulation",
      "Sleek tubular black powder-coated steel frame with floor glides",
      "Ergonomic contoured bucket seat for hours of comfortable sitting"
    ],
    dimensions: "31.8\" H × 23.2\" W × 22.0\" D",
    weight: "15.8 lbs (7.1 kg)",
    warranty: "2-Year Warranty",
    delivery: "Express Courier Delivery"
  }
];

export const CATEGORIES = [
  { id: "all", name: "All Collections", count: 48 },
  { id: "storage", name: "Modular Storage", count: 18, hot: true },
  { id: "shoes", name: "Sneaker Displays", count: 8 },
  { id: "furniture", name: "Lounge & Furniture", count: 12 },
  { id: "deals", name: "Buy 3 + 1 Deals", count: 6, special: true }
];

export interface OrderRecord {
  id: string;
  customer: string;
  email: string;
  phone: string;
  city: string;
  items: string;
  total: number;
  cogs: number;
  profit: number;
  margin: string;
  paymentMethod: string;
  paymentType: "COD" | "Card" | "Bit";
  status: "Delivered" | "Dispatched" | "Processing" | "Pending COD";
  statusColor: string;
  date: string;
}

export const ADMIN_ORDERS: OrderRecord[] = [
  {
    id: "ORD-9842",
    customer: "Jonathan Vance",
    email: "j.vance@example.com",
    phone: "+972 54-882-1941",
    city: "Tel Aviv, IL",
    items: "Modular 5-Tier Cabinet (Dual Pack)",
    total: 280,
    cogs: 124,
    profit: 156,
    margin: "55.7%",
    paymentMethod: "Cash on Delivery (COD)",
    paymentType: "COD",
    status: "Dispatched",
    statusColor: "blue",
    date: "14 mins ago"
  },
  {
    id: "ORD-9841",
    customer: "Elena Rostova",
    email: "elena.r@example.com",
    phone: "+972 52-419-8802",
    city: "Herzliya Pituach",
    items: "Cloud 360 Swivel Recliner & Ottoman",
    total: 395,
    cogs: 185,
    profit: 210,
    margin: "53.1%",
    paymentMethod: "Credit Card (Visa Express)",
    paymentType: "Card",
    status: "Processing",
    statusColor: "amber",
    date: "38 mins ago"
  },
  {
    id: "ORD-9840",
    customer: "Marcus Aurelius",
    email: "m.aurelius@example.com",
    phone: "+972 50-711-2094",
    city: "Haifa, IL",
    items: "Pro-Display Sneaker Showcase (6-Pack)",
    total: 110,
    cogs: 42,
    profit: 68,
    margin: "61.8%",
    paymentMethod: "Cash on Delivery (COD)",
    paymentType: "COD",
    status: "Delivered",
    statusColor: "emerald",
    date: "1 hour ago"
  },
  {
    id: "ORD-9839",
    customer: "Sophia Al-Mansoor",
    email: "sophia.m@example.com",
    phone: "+972 53-902-1144",
    city: "Ramat HaSharon",
    items: "Master Pack: Buy 3+1 Free Cabinets (4 Units)",
    total: 477,
    cogs: 248,
    profit: 229,
    margin: "48.0%",
    paymentMethod: "Cash on Delivery (COD)",
    paymentType: "COD",
    status: "Pending COD",
    statusColor: "amber",
    date: "2 hours ago"
  },
  {
    id: "ORD-9838",
    customer: "Liam Thorne",
    email: "l.thorne@example.com",
    phone: "+972 58-330-9115",
    city: "Jerusalem",
    items: "FlexiDesk Table + Shoe Box Pack",
    total: 195,
    cogs: 76,
    profit: 119,
    margin: "61.0%",
    paymentMethod: "Apple Pay / Card",
    paymentType: "Card",
    status: "Dispatched",
    statusColor: "blue",
    date: "3 hours ago"
  }
];
