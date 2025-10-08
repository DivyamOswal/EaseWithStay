import abhayManor from "./abhay_manor.avif";
import amaStays from "./ama_stays.jpg";
import braganza from "./braganza.jpeg";
import cardozoHouse from "./cardozo_house.avif";
import theMongoHouse from "./the mongo_house.avif";
import villaSiolim from "./villa_siolim.jpg";
import wisperingPines from "./wispering_pines.avif";

const groupStays = [
  {
    id: 1,
    name: "Abhay Manor",
    location: "Alibaug, Maharashtra",
    tag: "Luxury Group Stay",
    image: abhayManor,
    rating: 4.8,
    reviews: 290,
    nights: 2,
    oldPrice: "17,500",
    newPrice: "13,900",
    description:
      "Abhay Manor offers modern luxury for groups — private pool, open-air dining, and spacious interiors ideal for celebrations or weekend getaways."
  },
  {
    id: 2,
    name: "Ama Stays & Trails",
    location: "Coorg, Karnataka",
    tag: "Colonial Charm",
    image: amaStays,
    rating: 4.9,
    reviews: 340,
    nights: 3,
    oldPrice: "18,500",
    newPrice: "15,200",
    description:
      "A serene retreat nestled amidst coffee plantations — Ama Stays & Trails combines heritage charm with elegant comfort for large family or friend groups."
  },
  {
    id: 3,
    name: "Braganza House",
    location: "Goa",
    tag: "Portuguese Heritage",
    image: braganza,
    rating: 4.7,
    reviews: 230,
    nights: 2,
    oldPrice: "16,000",
    newPrice: "12,800",
    description:
      "Step into a slice of Goan history with Braganza House — an elegant heritage home perfect for group vacations with a vintage touch."
  },
  {
    id: 4,
    name: "Cardozo House",
    location: "Assagao, Goa",
    tag: "Tropical Escape",
    image: cardozoHouse,
    rating: 4.8,
    reviews: 265,
    nights: 2,
    oldPrice: "16,500",
    newPrice: "13,500",
    description:
      "Surrounded by lush palms, Cardozo House blends contemporary design with Goan architecture — perfect for a relaxing group escape."
  },
  {
    id: 5,
    name: "The Mongo House",
    location: "North Goa",
    tag: "Private Villa Stay",
    image: theMongoHouse,
    rating: 4.9,
    reviews: 310,
    nights: 3,
    oldPrice: "19,500",
    newPrice: "15,800",
    description:
      "A vibrant and luxurious villa featuring private pool, tropical gardens, and large living spaces — The Mongo House is ideal for large groups seeking privacy."
  },
  {
    id: 6,
    name: "Villa Siolim",
    location: "Siolim, Goa",
    tag: "Poolside Villa",
    image: villaSiolim,
    rating: 4.8,
    reviews: 275,
    nights: 2,
    oldPrice: "17,200",
    newPrice: "14,200",
    description:
      "Experience laid-back Goan luxury at Villa Siolim — a stunning modern villa with a pool, perfect for fun group gatherings and weekend stays."
  },
  {
    id: 7,
    name: "Wispering Pines",
    location: "Mussoorie, Uttarakhand",
    tag: "Mountain Stay",
    image: wisperingPines,
    rating: 4.7,
    reviews: 260,
    nights: 3,
    oldPrice: "15,000",
    newPrice: "12,100",
    description:
      "Located amidst cedar forests, Wispering Pines offers breathtaking views, cozy rooms, and outdoor activities — perfect for groups seeking peace and adventure."
  },
];

export default groupStays;
