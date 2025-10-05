import azureWave from "./azure-wave.png";
import coralBay from "./coral-bay.jpg";
import oceanPearl from "./ocean-pearl.jpg";
import palmBreeze from "./palm-breeze.jpg";
import theBayLuxe from "./the-bay-luxe.jpg";
import seashellGrande from "./seashell-grande.jpg";
import blueHorizon from "./blue-horizon.jpg";

const beachResorts = [
  {
    id: 1,
    image: azureWave,
    tag: "Top-rated",
    name: "Azure Wave Resort",
    location: "Goa, India",
    rating: 9.2,
    reviews: 725,
    nights: 2,
    oldPrice: "18,000",
    newPrice: "14,500",
    description:
      "Perched along Goa’s golden coastline, Azure Wave Resort offers breathtaking infinity pool views and luxurious sea-facing suites for an unforgettable escape.",
  },
  {
    id: 2,
    image: coralBay,
    tag: "Recommended",
    name: "Coral Bay Retreat",
    location: "Kovalam, Kerala",
    rating: 8.8,
    reviews: 657,
    nights: 2,
    oldPrice: "15,500",
    newPrice: "12,999",
    description:
      "A serene getaway in the heart of Kovalam, Coral Bay Retreat blends traditional Kerala architecture with modern comfort, surrounded by lush palm gardens.",
  },
  {
    id: 3,
    image: oceanPearl,
    tag: "Top-rated",
    name: "Ocean Pearl Villas",
    location: "Pondicherry, India",
    rating: 9.4,
    reviews: 634,
    nights: 3,
    oldPrice: "18,000",
    newPrice: "16,900",
    description:
      "An elegant beachfront villa experience in Pondicherry with private pools, gourmet dining, and cozy coastal vibes for families and couples alike.",
  },
  {
    id: 4,
    image: palmBreeze,
    tag: "Recommended",
    name: "Palm Breeze Resort",
    location: "Varkala, Kerala",
    rating: 8.6,
    reviews: 275,
    nights: 1,
    oldPrice: "14,000",
    newPrice: "11,500",
    description:
      "Set near Varkala’s stunning cliffs, Palm Breeze Resort offers an idyllic retreat with Ayurvedic spa sessions and panoramic ocean sunsets.",
  },
  {
    id: 5,
    image: theBayLuxe,
    tag: "Top-rated",
    name: "The Bay Luxe",
    location: "Alibaug, Maharashtra",
    rating: 9.0,
    reviews: 398,
    nights: 2,
    oldPrice: "17,000",
    newPrice: "13,900",
    description:
      "A chic beachfront camp resort under the stars in Alibaug featuring cozy glamping tents, string lights, and a laid-back coastal charm.",
  },
  {
    id: 6,
    image: seashellGrande,
    tag: "Top-rated",
    name: "SeaShell Grande",
    location: "Havelock Island, Andaman, India",
    rating: 9.6,
    reviews: 602,
    nights: 2,
    oldPrice: "22,000",
    newPrice: "18,500",
    description:
      "Nestled in the Andamans, SeaShell Grande offers tropical luxury cabins with private balconies and crystal-clear turquoise beach access.",
  },
  {
    id: 7,
    image: blueHorizon,
    tag: "Top-rated",
    name: "Blue Horizon Beach Stay",
    location: "Gokarna, Karnataka",
    rating: 8.4,
    reviews: 241,
    nights: 2,
    oldPrice: "13,000",
    newPrice: "10,700",
    description:
      "Located on the serene Gokarna coastline, Blue Horizon Beach Stay is perfect for those seeking tranquility, ocean views, and fresh coastal cuisine.",
  },
];

export default beachResorts;
