import property1 from "../assets/productImages/image_6.jpg";
import property2 from "../assets/productImages/work-1.jpg";
import property3 from "../assets/productImages/beach.jpg";
import property4 from "../assets/productImages/image_2.jpg";
import property5 from "../assets/productImages/bg_2.jpg";
import property6 from "../assets/productImages/image_3.jpg";
import property7 from "../assets/productImages/work-3.jpg";
import property8 from "../assets/productImages/work-4.jpg";
import property9 from "../assets/productImages/work-5.jpg";
import property10 from "../assets/productImages/work-2.jpg";

import avatar1 from "../assets/avatar/avatar_1.jpg";
import avatar2 from "../assets/avatar/avatar_2.jpg";
import avatar3 from "../assets/avatar/avatar_3.jpg";

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
      "This stunning luxury villa offers sophisticated living in Manhattan with panoramic city views and exclusive amenities including a private pool and garden.",
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
      "Contemporary apartment in West Hollywood featuring sleek design, gourmet kitchen, and access to upscale amenities and entertainment hubs.",
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
      "Exclusive beachfront villa with direct ocean access, private beach, infinity pool, and outdoor entertainment zones for luxury coastal living.",
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
      "Spectacular penthouse with panoramic city and lake views, custom interiors, smart home features, and direct access to shopping and dining.",
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
      "A rustic yet elegant mountain retreat with alpine views, a stone fireplace, gourmet kitchen, and easy access to ski slopes and hiking trails.",
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
  {
    id: 6,
    name: "Skyline Loft",
    image: property6,
    price: 950000,
    location: "Seattle, USA",
    coordinates: {
      latitude: 47.6062,
      longitude: -122.3321,
    },
    address: "1011 Pine Street, Seattle, WA 98101",
    bedrooms: 2,
    bathrooms: 2,
    area: 1600,
    description:
      "Industrial-style loft in downtown Seattle with exposed brick, large windows, and rooftop access. Ideal for modern urban living.",
    type: "Loft",
    status: "For Sale",
    features: ["Gym", "Parking", "Security", "24/7"],
    contact: {
      agent: "Brandon Lee",
      phone: "+1 (206) 555-0911",
      email: "brandon.lee@seattlerealty.com",
      office: "Seattle Skyline Realty",
    },
  },
  {
    id: 7,
    name: "Countryside Cottage",
    image: property7,
    price: 600000,
    location: "Nashville, USA",
    coordinates: {
      latitude: 36.1627,
      longitude: -86.7816,
    },
    address: "232 Riverbend Lane, Nashville, TN 37214",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    description:
      "Quaint cottage on Nashville’s outskirts offering peaceful surroundings, spacious yard, and cozy interiors perfect for countryside charm.",
    type: "Cottage",
    status: "For Sale",
    features: ["Garden", "Parking", "Security", "24/7"],
    contact: {
      agent: "Emily Carter",
      phone: "+1 (615) 555-0245",
      email: "emily.carter@homesteadnashville.com",
      office: "Homestead Realty",
    },
  },
  {
    id: 8,
    name: "Urban Studio",
    image: property8,
    price: 2200,
    location: "San Francisco, USA",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    address: "808 Mission Street, San Francisco, CA 94103",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    description:
      "Compact yet stylish studio in central San Francisco with updated appliances, work-from-home space, and rooftop amenity access.",
    type: "Studio",
    status: "For Rent",
    features: ["Gym", "Security", "24/7"],
    contact: {
      agent: "Liam Nguyen",
      phone: "+1 (415) 555-0488",
      email: "liam.nguyen@urbanbayrealty.com",
      office: "Urban Bay Realty",
    },
  },
  {
    id: 9,
    name: "Golf Estate Home",
    image: property9,
    price: 1750000,
    location: "Scottsdale, USA",
    coordinates: {
      latitude: 33.4942,
      longitude: -111.9261,
    },
    address: "145 Eagle Crest Dr, Scottsdale, AZ 85255",
    bedrooms: 5,
    bathrooms: 4,
    area: 4000,
    description:
      "Sprawling estate inside a luxury golf community featuring fairway views, expansive patio, gourmet kitchen, and outdoor living zones.",
    type: "Estate",
    status: "For Sale",
    features: ["Pool", "Garden", "Gym", "Parking", "Security", "24/7"],
    contact: {
      agent: "Aaron Mitchell",
      phone: "+1 (480) 555-0782",
      email: "aaron.mitchell@scottsdalehomes.com",
      office: "Scottsdale Luxury Homes",
    },
  },
  {
    id: 10,
    name: "Lakeview Bungalow",
    image: property10,
    price: 720000,
    location: "Minneapolis, USA",
    coordinates: {
      latitude: 44.9778,
      longitude: -93.265,
    },
    address: "923 Lake Street, Minneapolis, MN 55408",
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    description:
      "Peaceful bungalow with lakefront views, finished basement, and proximity to parks and walking trails in a family-friendly neighborhood.",
    type: "Bungalow",
    status: "For Sale",
    features: ["Garden", "Parking", "Security", "24/7"],
    contact: {
      agent: "Natalie Brooks",
      phone: "+1 (612) 555-0399",
      email: "natalie.brooks@midwestrealty.com",
      office: "Midwest Realty Group",
    },
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: avatar1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 5,
    date: "2021-01-01",
    location: "New York, USA",
    property: "Luxury Villa",
  },
  {
    id: 2,
    name: "Jane Doe",
    image: avatar2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 5,
    date: "2021-01-01",
    location: "New York, USA",
    property: "Luxury Villa",
  },
  {
    id: 3,
    name: "Jinya Jain",
    image: avatar3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    rating: 5,
    date: "2021-01-01",
    location: "New York, USA",
    property: "Modern Apartment",
  },
];
