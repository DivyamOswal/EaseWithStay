import fernHills from "./fernHills.jpg";
import geoHeritage from "./geo_heritage.avif";
import heritageGoa from "./heritage_goa.avif";
import heritageVillas from "./heritage_villas.jpg";
import kumarakomLake from "./kumarakomLake.jpg";
import pambaHeritage from "./pamba_heritage.jpg";
import shreeVillas from "./shree_villas.avif";

const heritageStays = [
  {
    id: 1,
    image: fernHills,
    tag: "Royal Heritage",
    name: "Fernhills Palace",
    location: "Ooty, Tamil Nadu",
    rating: 9.4,
    reviews: 642,
    nights: 2,
    oldPrice: "27,000",
    newPrice: "23,500",
    description:
      "Once the summer palace of the Mysore Maharajas, Fernhills Palace offers colonial charm, royal suites, and lush gardens in the Nilgiri Hills.",
  },
  {
    id: 2,
    image: geoHeritage,
    tag: "Traditional Kerala Home",
    name: "Geo Heritage Homes",
    location: "Thrissur, Kerala",
    rating: 9.2,
    reviews: 488,
    nights: 2,
    oldPrice: "19,000",
    newPrice: "16,500",
    description:
      "An authentic heritage homestay in Kerala, Geo Heritage Homes preserves ancient wooden architecture, peaceful courtyards, and traditional cuisine.",
  },
  {
    id: 3,
    image: heritageGoa,
    tag: "Portuguese Heritage",
    name: "Heritage Goa Villas",
    location: "Siolim, North Goa",
    rating: 9.5,
    reviews: 734,
    nights: 2,
    oldPrice: "24,000",
    newPrice: "20,999",
    description:
      "Step into old-world Portuguese architecture at Heritage Goa Villas, featuring arched corridors, antique furniture, and serene garden spaces.",
  },
  {
    id: 4,
    image: heritageVillas,
    tag: "Desert Heritage",
    name: "Heritage Villa Resort Camp",
    location: "Jaisalmer, Rajasthan",
    rating: 9.3,
    reviews: 561,
    nights: 2,
    oldPrice: "26,000",
    newPrice: "22,800",
    description:
      "Located in the heart of the Thar Desert, this resort combines traditional Rajasthani décor with modern luxury and cultural performances.",
  },
  {
    id: 5,
    image: kumarakomLake,
    tag: "Backwater Heritage",
    name: "Kumarakom Lake Resort",
    location: "Kumarakom, Kerala",
    rating: 9.7,
    reviews: 812,
    nights: 2,
    oldPrice: "42,000",
    newPrice: "37,999",
    description:
      "A royal retreat on the Vembanad Lake, featuring restored 16th-century Kerala homes, infinity pools, and exquisite lakefront villas.",
  },
  {
    id: 6,
    image: pambaHeritage,
    tag: "Riverside Heritage",
    name: "The Pamba Heritage Villa",
    location: "Alappuzha, Kerala",
    rating: 9.4,
    reviews: 523,
    nights: 2,
    oldPrice: "21,000",
    newPrice: "18,500",
    description:
      "Situated on the banks of the Pamba River, this heritage villa offers peace, Ayurvedic experiences, and traditional wooden architecture.",
  },
  {
    id: 7,
    image: shreeVillas,
    tag: "Rajasthani Heritage",
    name: "Shree Villas Heritage Home Stay",
    location: "Jaipur, Rajasthan",
    rating: 9.1,
    reviews: 478,
    nights: 2,
    oldPrice: "23,000",
    newPrice: "19,999",
    description:
      "A charming family-run heritage stay featuring intricate frescoes, royal courtyards, and warm Rajasthani hospitality in Jaipur.",
  },
];

export default heritageStays;
