import anandaSpaHimalayas from "./ananda_spa_himalayas.jpg";
import tajAravaliResort from "./taj_aravali_resort.avif";
import amaraVilla from "./amara_villa.jpg";
import naverlandFarms from "./naverland_farms.jpg";
import theJunglow from "./the_junglow.avif";
import villaBranco from "./villa_branco.webp";
import eliviasGoa from "./elivias_goa.webp";

const luxuryVillas = [
  {
    id: 1,
    image: anandaSpaHimalayas,
    tag: "Wellness Luxury",
    name: "Ananda in the Himalayas",
    location: "Rishikesh, Uttarakhand",
    rating: 9.6,
    reviews: 812,
    nights: 2,
    oldPrice: "48,000",
    newPrice: "42,500",
    description:
      "Nestled in the foothills of the Himalayas, Ananda is India’s premier luxury wellness retreat offering yoga, meditation, and holistic spa therapies in royal surroundings.",
  },
  {
    id: 2,
    image: tajAravaliResort,
    tag: "Luxury Resort Villa",
    name: "Taj Aravali Resort & Spa",
    location: "Udaipur, Rajasthan",
    rating: 9.3,
    reviews: 674,
    nights: 2,
    oldPrice: "39,000",
    newPrice: "34,500",
    description:
      "Spread across the Aravalli ranges, Taj Aravali’s private villas blend Rajput hospitality with contemporary elegance and serene nature views.",
  },
  {
    id: 3,
    image: amaraVilla,
    tag: "Private Luxury",
    name: "Amara Villa",
    location: "Alibaug, Maharashtra",
    rating: 9.1,
    reviews: 512,
    nights: 2,
    oldPrice: "32,000",
    newPrice: "27,999",
    description:
      "A tropical haven in Alibaug, Amara Villa features lush gardens, a private pool, and minimalist interiors for an ultra-luxe coastal stay.",
  },
  {
    id: 4,
    image: naverlandFarms,
    tag: "Nature Escape",
    name: "Neverland Farms",
    location: "Karjat, Maharashtra",
    rating: 9.4,
    reviews: 483,
    nights: 2,
    oldPrice: "28,500",
    newPrice: "25,000",
    description:
      "Set amidst green hills, Neverland Farms offers rustic-chic villas, organic dining, and peaceful seclusion — perfect for nature lovers.",
  },
  {
    id: 5,
    image: theJunglow,
    tag: "Heritage Stay",
    name: "The Jungalow",
    location: "Udaipur, Rajasthan",
    rating: 9.0,
    reviews: 398,
    nights: 2,
    oldPrice: "31,000",
    newPrice: "27,000",
    description:
      "A stylish heritage villa overlooking the Aravallis, The Jungalow combines artistic interiors, private gardens, and warm Rajasthani charm.",
  },
  {
    id: 6,
    image: villaBranco,
    tag: "Designer Villa",
    name: "Villa Branco",
    location: "Assagao, North Goa",
    rating: 9.5,
    reviews: 724,
    nights: 2,
    oldPrice: "36,000",
    newPrice: "31,500",
    description:
      "This Portuguese-style luxury villa in North Goa offers chic interiors, a serene courtyard pool, and the perfect blend of modern luxury and Goan charm.",
  },
  {
    id: 7,
    image: eliviasGoa,
    tag: "Architectural Gem",
    name: "The Glass Villa",
    location: "Goa, India",
    rating: 9.7,
    reviews: 565,
    nights: 2,
    oldPrice: "45,000",
    newPrice: "39,999",
    description:
      "With sleek glass facades, infinity pool, and sea views, The Glass Villa redefines luxury living with contemporary design and tropical tranquility.",
  },
];

export default luxuryVillas;
