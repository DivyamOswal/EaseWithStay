import hilltop from "./hilltop.jpg";
import itcMaurya from "./itc-maurya-hotel.JPEG";
import jwMarriott from "./jw-marriott.jpg";
import lakeview from "./lakeview.jpg";
import mapleWood from "./maple-wood.jpg";
import sunsetMeadows from "./sunset-meadows.jpg";
import familyGarden from "./the-family-garden.jpg";

const familyStays = [
  {
    id: 1,
    image: hilltop,
    tag: "Top-rated",
    name: "Hilltop",
    location: "Mussoorie, Uttarakhand, India",
    rating: 8.7,
    reviews: 1245,
    nights: 1,
    oldPrice: "7,000",
    newPrice: "5,600",
    description:
      "Nestled in the misty hills of Mussoorie, Hilltop offers peaceful mountain views, cozy rooms, and open-air dining under the stars.",
  },
  {
    id: 2,
    image: itcMaurya,
    tag: "Recommended",
    name: "ITC Maurya",
    location: "New Delhi, India",
    rating: 9.1,
    reviews: 3672,
    nights: 1,
    oldPrice: "13,000",
    newPrice: "10,400",
    description:
      "An iconic luxury hotel in Delhi offering world-class dining, elegant suites, and a legacy of royal hospitality for families and travelers alike.",
  },
  {
    id: 3,
    image: jwMarriott,
    tag: "Top-rated",
    name: "JW Marriott",
    location: "Bengaluru, Karnataka, India",
    rating: 9.0,
    reviews: 2950,
    nights: 1,
    oldPrice: "12,000",
    newPrice: "9,600",
    description:
      "JW Marriott Bengaluru offers a premium family stay experience with spacious suites, a rooftop pool, and easy access to the city’s attractions.",
  },
  {
    id: 4,
    image: lakeview,
    tag: "Recommended",
    name: "Lakeview",
    location: "Nainital, Uttarakhand, India",
    rating: 8.9,
    reviews: 1078,
    nights: 1,
    oldPrice: "8,000",
    newPrice: "6,400",
    description:
      "Perched above the serene Naini Lake, Lakeview provides stunning balcony views, cozy cottages, and a calm retreat for families.",
  },
  {
    id: 5,
    image: mapleWood,
    tag: "Top-rated",
    name: "Maple Wood",
    location: "Manali, Himachal Pradesh, India",
    rating: 8.5,
    reviews: 894,
    nights: 1,
    oldPrice: "7,500",
    newPrice: "6,000",
    description:
      "Experience the warmth of mountain living at Maple Wood, featuring wooden interiors, scenic valley views, and a welcoming ambiance.",
  },
  {
    id: 6,
    image: sunsetMeadows,
    tag: "Top-rated",
    name: "Sunset Meadow",
    location: "Munnar, Kerala, India",
    rating: 8.8,
    reviews: 1540,
    nights: 1,
    oldPrice: "9,000",
    newPrice: "7,200",
    description:
      "Relax in luxury with panoramic tea valley views at Sunset Meadow — the perfect family escape with spa, pool, and fine dining options.",
  },
  {
    id: 7,
    image: familyGarden,
    tag: "Top-rated",
    name: "The Family Garden",
    location: "Lonavala, Maharashtra, India",
    rating: 8.6,
    reviews: 1189,
    nights: 1,
    oldPrice: "7,800",
    newPrice: "6,200",
    description:
      "A family-friendly resort with lush gardens, poolside dining, and modern rooms located just minutes from Lonavala’s scenic hills.",
  },
];

export default familyStays;
