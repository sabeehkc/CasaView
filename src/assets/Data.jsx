import property1 from "../assets/productImages/image_6.jpg";
import property2 from "../assets/productImages/work-1.jpg";
import property3 from "../assets/productImages/image_5.jpg";
import property4 from "../assets/productImages/image_2.jpg";
import property5 from "../assets/productImages/bg_2.jpg";

export const navLinks = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Properties", url: "/properties" },
  { id: 4, title: "Contact", url: "/contact" },
];

export const BannerImages = [
  {
    id: 1,
    image: "src/assets/BannerImages/beach_cat.jpg",
  },
  {
    id: 2,
    image: "src/assets/BannerImages/lake_cat.webp",
  },
  {
    id: 3,
    image: "src/assets/BannerImages/lux_cat.jpg",
  },
  {
    id: 4,
    image: "src/assets/BannerImages/modern_cat.webp",
  },
];

export const properties = [
  {
    id: 1,
    name: "Luxury Villa",
    image: property1,
    price: 1000000,
    location: "New York, USA",
    coordinates: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    address: "123 Park Avenue, Manhattan, New York, NY 10022",
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    description:
      "This stunning luxury villa offers the epitome of sophisticated living in the heart of Manhattan. Featuring high-end finishes, panoramic city views, and exclusive amenities including a private pool, landscaped garden, and state-of-the-art security system. Perfect for discerning buyers seeking the ultimate urban retreat.",
    type: "Villa",
    status: "For Sale",
    features: [
      "Pool",
      "Garden",
      "Gym",
      "Jacuzzi",
      "Parking",
      "Security",
      "24/7",
    ],
    contact: {
      agent: "Sarah Johnson",
      phone: "+1 (212) 555-0123",
      email: "sarah.johnson@luxuryrealty.com",
      office: "Luxury Realty Group",
    },
  },
  {
    id: 2,
    name: "Modern Apartment",
    image: property2,
    price: 8000,
    location: "Los Angeles, USA",
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    address: "456 Sunset Boulevard, West Hollywood, Los Angeles, CA 90069",
    bedrooms: 3,
    bathrooms: 2,
    area: 2000,
    description:
      "Contemporary apartment with sleek design and premium amenities. Located in the vibrant West Hollywood area, this property offers easy access to shopping, dining, and entertainment. Features include floor-to-ceiling windows, gourmet kitchen, and access to building amenities.",
    type: "Apartment",
    status: "For Rent",
    features: [
      "Pool",
      "Garden",
      "Gym",
      "Jacuzzi",
      "Parking",
      "Security",
      "24/7",
    ],
    contact: {
      agent: "Michael Chen",
      phone: "+1 (310) 555-0456",
      email: "michael.chen@westcoastproperties.com",
      office: "West Coast Properties",
    },
  },
  {
    id: 3,
    name: "Beachfront Villa",
    image: property3,
    price: 2500000,
    location: "Miami Beach, USA",
    coordinates: {
      latitude: 25.7907,
      longitude: -80.13,
    },
    address: "789 Ocean Drive, Miami Beach, FL 33139",
    bedrooms: 4,
    bathrooms: 3,
    area: 3500,
    description:
      "Exclusive beachfront villa with direct ocean access and breathtaking views. This architectural masterpiece combines luxury with coastal living, featuring a private beach, infinity pool, and outdoor entertainment areas. Perfect for those seeking the ultimate waterfront lifestyle.",
    type: "Villa",
    status: "For Sale",
    features: [
      "Pool",
      "Garden",
      "Gym",
      "Jacuzzi",
      "Parking",
      "Security",
      "24/7",
    ],
    contact: {
      agent: "Elena Rodriguez",
      phone: "+1 (305) 555-0789",
      email: "elena.rodriguez@miamiluxury.com",
      office: "Miami Luxury Real Estate",
    },
  },
  {
    id: 4,
    name: "Downtown Penthouse",
    image: property4,
    price: 1800000,
    location: "Chicago, USA",
    coordinates: {
      latitude: 41.8781,
      longitude: -87.6298,
    },
    address: "321 Michigan Avenue, Chicago, IL 60601",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    description:
      "Spectacular penthouse in the heart of downtown Chicago with panoramic city and lake views. This luxury residence features custom finishes, smart home technology, and exclusive building amenities. Located steps from world-class shopping, dining, and cultural attractions.",
    type: "Penthouse",
    status: "For Sale",
    features: [
      "Pool",
      "Garden",
      "Gym",
      "Jacuzzi",
      "Parking",
      "Security",
      "24/7",
    ],
    contact: {
      agent: "David Thompson",
      phone: "+1 (312) 555-0321",
      email: "david.thompson@chicagopremier.com",
      office: "Chicago Premier Realty",
    },
  },
  {
    id: 5,
    name: "Mountain Retreat",
    image: property5,
    price: 1200000,
    location: "Aspen, USA",
    coordinates: {
      latitude: 39.1911,
      longitude: -106.8175,
    },
    address: "654 Mountain View Road, Aspen, CO 81611",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    description:
      "Luxurious mountain retreat with stunning alpine views and world-class skiing access. This custom-built home features rustic elegance with modern amenities, including a stone fireplace, gourmet kitchen, and outdoor hot tub. Perfect for outdoor enthusiasts and those seeking mountain tranquility.",
    type: "Cabin",
    status: "For Sale",
    features: [
      "Pool",
      "Garden",
      "Gym",
      "Jacuzzi",
      "Parking",
      "Security",
      "24/7",
    ],
    contact: {
      agent: "Jennifer Walsh",
      phone: "+1 (970) 555-0654",
      email: "jennifer.walsh@aspenproperties.com",
      office: "Aspen Properties",
    },
  },
];


export const testimonials = [
    {
        id: 1,
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        rating: 5,
        date: "2021-01-01",
        location: "New York, USA",
        property: "Luxury Villa",
    },
    {
        id: 2,
        name: "Jane Doe",
        image: "https://via.placeholder.com/150",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        rating: 5,
        date: "2021-01-01",
        location: "New York, USA",
        property: "Luxury Villa",
    },
    {
        id: 3,
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        rating: 5,
        date: "2021-01-01",
        location: "New York, USA",
        property: "Luxury Villa",
    },
]