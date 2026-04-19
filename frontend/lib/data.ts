export interface Hall {
  id: string;
  name: string;
  slug: string;
  type: string;
  maxCapacity: number;
  minCapacity: number;
  capacity: number; // Legacy alias
  area: string;
  ac: boolean;
  location: string;
  address: string;
  pricePerEvent: number;
  pricePerDay: number;
  priceNote?: string;
  featured: boolean;
  rating: number;
  reviewCount: number;
  discount?: number;
  description: string;
  shortDescription: string;
  features: string[];
  facilities: string[]; // Alias for features
  images: string[];
  coverImage: string;
  idealFor: string[];
  eventTypes: string[];
  lat: number;
  lng: number;
  phone: string;
  whatsapp: string;
  bookedDates: string[];
  rooms: {
    name: string;
    area: string;
    capacity: number;
    ac: boolean;
  }[];
  reviews: {
    id: string;
    author: string;
    avatar: string;
    rating: number;
    event: string;
    comment: string;
    date: string;
  }[];
}

export const halls: Hall[] = [
  {
    id: "v1",
    name: "Aashirwad Grand Ballroom",
    slug: "aashirwad-grand-ballroom",
    type: "Main Hall",
    maxCapacity: 2000,
    minCapacity: 500,
    capacity: 2000,
    area: "25,000 sq ft",
    ac: true,
    location: "Jubilee Hills",
    address: "Plot 12, Road No. 36, Jubilee Hills, Hyderabad",
    pricePerEvent: 250000,
    pricePerDay: 400000,
    featured: true,
    rating: 4.9,
    reviewCount: 324,
    discount: 10,
    description: "Our flagship ballroom is the crown jewel of the Grand Maharaja Convention. Bathed in golden chandeliers and adorned with intricate décor, this hall transforms every event into a regal experience.",
    shortDescription: "Our crown jewel — a grand AC ballroom for royal celebrations.",
    features: ["Crystal Chandeliers", "Grand Stage", "LED Lighting", "HD Sound System", "Projector & LED Wall", "Pre-Function Foyer", "Bridal Dressing Room", "Hydraulic Stage"],
    facilities: ["Crystal Chandeliers", "Grand Stage", "LED Lighting", "HD Sound System", "Projector & LED Wall", "Pre-Function Foyer", "Bridal Dressing Room", "Hydraulic Stage"],
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=85",
    ],
    idealFor: ["Wedding", "Reception", "Engagement"],
    eventTypes: ["Wedding", "Reception", "Engagement", "Corporate Awards"],
    lat: 17.4239,
    lng: 78.4738,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: ["2026-05-10", "2026-05-15", "2026-06-01"],
    rooms: [
      { name: "Main Ballroom", area: "20,000 sq ft", capacity: 1800, ac: true },
      { name: "Pre-Function Area", area: "5,000 sq ft", capacity: 400, ac: true },
    ],
    reviews: [
      { id: "r1", author: "Animesh Singh", avatar: "https://i.pravatar.cc/150?u=1", rating: 5, event: "Wedding", comment: "Absolutely stunning venue. The staff was top-notch.", date: "2 months ago" },
    ],
  },
  {
    id: "v2",
    name: "Utsava Convention Hall",
    slug: "utsava-convention-hall",
    type: "Convention Hall",
    maxCapacity: 1200,
    minCapacity: 200,
    capacity: 1200,
    area: "15,000 sq ft",
    ac: true,
    location: "Madhapur",
    address: "Cyber Towers Road, Madhapur, Hyderabad",
    pricePerEvent: 150000,
    pricePerDay: 250000,
    featured: true,
    rating: 4.8,
    reviewCount: 186,
    description: "Utsava is our premier convention hall designed for corporate excellence. Featuring modular seating and a professional AV suite.",
    shortDescription: "A premier AC convention hall for corporate events and seminars.",
    features: ["Fiber WiFi", "Conference System", "Breakout Rooms", "LED Walls"],
    facilities: ["Fiber WiFi", "Conference System", "Breakout Rooms", "LED Walls"],
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=900&q=85",
    ],
    idealFor: ["Conference", "Seminar"],
    eventTypes: ["Conference", "Seminar", "Product Launch"],
    lat: 17.4483,
    lng: 78.3915,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: ["2026-05-12", "2026-05-20"],
    rooms: [
      { name: "Conference Suite A", area: "10,000 sq ft", capacity: 800, ac: true },
      { name: "Breakout Lounge", area: "5,000 sq ft", capacity: 400, ac: true },
    ],
    reviews: [
      { id: "r2", author: "Kiran Kumar", avatar: "https://i.pravatar.cc/150?u=2", rating: 5, event: "Conference", comment: "Best tech infrastructure in the city.", date: "1 month ago" },
    ],
  },
  {
    id: "v3",
    name: "Anuraga Banquet",
    slug: "anuraga-banquet",
    type: "Banquet Hall",
    maxCapacity: 600,
    minCapacity: 100,
    capacity: 600,
    area: "8,000 sq ft",
    ac: true,
    location: "Banjara Hills",
    address: "Road No. 2, Banjara Hills, Hyderabad",
    pricePerEvent: 85000,
    pricePerDay: 130000,
    featured: true,
    rating: 4.7,
    reviewCount: 94,
    discount: 5,
    description: "Anuraga is our intimate banquet hall, perfect for mid-size celebrations.",
    shortDescription: "Intimate AC banquet for mid-size weddings and celebrations.",
    features: ["Mood Lighting", "Dedicated Catering", "Valet Parking"],
    facilities: ["Mood Lighting", "Dedicated Catering", "Valet Parking"],
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
      "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=900&q=85",
    ],
    idealFor: ["Engagement", "Birthday"],
    eventTypes: ["Engagement", "Birthday", "Anniversary"],
    lat: 17.4156,
    lng: 78.4347,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: ["2026-05-18"],
    rooms: [
      { name: "Primary Banquet", area: "8,000 sq ft", capacity: 600, ac: true },
    ],
    reviews: [
      { id: "r3", author: "Sneha Reddy", avatar: "https://i.pravatar.cc/150?u=3", rating: 4, event: "Birthday", comment: "Great food and ambiance.", date: "3 weeks ago" },
    ],
  },
  {
    id: "v4",
    name: "Aashirwad Gardens",
    slug: "aashirwad-gardens",
    type: "Outdoor Lawn",
    maxCapacity: 1500,
    minCapacity: 300,
    capacity: 1500,
    area: "20,000 sq ft",
    ac: false,
    location: "Gachibowli",
    address: "Beside DLF Cyber City, Gachibowli, Hyderabad",
    pricePerEvent: 120000,
    pricePerDay: 180000,
    featured: false,
    rating: 4.9,
    reviewCount: 156,
    description: "A sprawling open-air lawn surrounded by lush greenery. Ideal for starry nights.",
    shortDescription: "A lush open-air lawn for dreamy outdoor weddings under the stars.",
    features: ["Open Air", "Fairy Lights", "Green Lawns"],
    facilities: ["Open Air", "Fairy Lights", "Green Lawns"],
    coverImage: "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=900&q=85",
      "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=900&q=85",
    ],
    idealFor: ["Outdoor Wedding", "Sangeet"],
    eventTypes: ["Wedding", "Sangeet", "Reception"],
    lat: 17.4442,
    lng: 78.3498,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: ["2026-05-25", "2026-05-26"],
    rooms: [
      { name: "Main Garden", area: "20,000 sq ft", capacity: 1500, ac: false },
    ],
    reviews: [
      { id: "r4", author: "Vikram Batra", avatar: "https://i.pravatar.cc/150?u=4", rating: 5, event: "Reception", comment: "The lighting was magical.", date: "1 month ago" },
    ],
  },
  {
    id: "v5",
    name: "Amulya Mini Hall",
    slug: "amulya-mini-hall",
    type: "Mini Hall",
    maxCapacity: 200,
    minCapacity: 30,
    capacity: 200,
    area: "2,500 sq ft",
    ac: true,
    location: "Kondapur",
    address: "Botanical Garden Road, Kondapur, Hyderabad",
    pricePerEvent: 35000,
    pricePerDay: 55000,
    featured: false,
    rating: 4.6,
    reviewCount: 42,
    description: "Amulya is our cozy mini hall ideal for intimate celebrations.",
    shortDescription: "Cozy AC mini hall for intimate gatherings and private dinners.",
    features: ["AC", "Lounge", "Catering"],
    facilities: ["AC", "Lounge", "Catering"],
    coverImage: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=900&q=85",
    images: ["https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=900&q=85"],
    idealFor: ["Private Dinner", "Meeting"],
    eventTypes: ["Birthday", "Private Dinner", "Meeting", "Baby Shower"],
    lat: 17.4589,
    lng: 78.3697,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: [],
    rooms: [
      { name: "Mini Suite", area: "2,500 sq ft", capacity: 200, ac: true },
    ],
    reviews: [
      { id: "r5", author: "Meena Gupta", avatar: "https://i.pravatar.cc/150?u=5", rating: 4, event: "Baby Shower", comment: "Perfect for small family events.", date: "2 months ago" },
    ],
  },
  {
    id: "v6",
    name: "Pre-Function Hall",
    slug: "pre-function-hall",
    type: "Pre-Function Lounge",
    maxCapacity: 300,
    minCapacity: 50,
    capacity: 300,
    area: "4,000 sq ft",
    ac: true,
    location: "Main Lobby",
    address: "Grand Maharaja Lobby Area, Hyderabad",
    pricePerEvent: 25000,
    pricePerDay: 40000,
    featured: false,
    rating: 4.5,
    reviewCount: 28,
    description: "A beautifully appointed space connecting our major halls.",
    shortDescription: "Elegant pre-function lounge for cocktail receptions.",
    features: ["Cocktail Setup", "Bar Counter", "AC"],
    facilities: ["Cocktail Setup", "Bar Counter", "AC"],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85"],
    idealFor: ["Cocktail Reception", "Networking"],
    eventTypes: ["Cocktail Reception", "Networking", "Pre-Event Lounge"],
    lat: 17.4241,
    lng: 78.4740,
    phone: "+91 98765 43210",
    whatsapp: "919876543210",
    bookedDates: [],
    rooms: [
      { name: "Lobby Lounge", area: "4,000 sq ft", capacity: 300, ac: true },
    ],
    reviews: [
      { id: "r6", author: "David Wilson", avatar: "https://i.pravatar.cc/150?u=6", rating: 5, event: "Networking", comment: "Great flow and elegant space.", date: "4 months ago" },
    ],
  },
];

export const venues = halls;
export type Venue = Hall;

export const HALL_INFO = {
  name: "Grand Maharaja Convention Centre",
  tagline: "Setting the Stage for Unforgettable Events",
  subtitle: "Hyderabad's most premium convention centre with luxury facilities.",
  phone: "+91 98765 43210",
  phone2: "+91 98765 43211",
  whatsapp: "919876543210",
  email: "events@grandmaharaja.com",
  address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  city: "Hyderabad",
  established: "1998",
  gMapsLink: "https://maps.google.com/?q=17.4239,78.4738",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  totalEvents: "5,000+",
  luxuryRooms: "42",
  carParking: "800",
  totalArea: "60,000 sq ft",
};

export const eventTypes = [
  "Weddings & Receptions",
  "Engagements",
  "Corporate Events",
  "Birthday Parties",
  "Cultural Functions",
];

export const eventCategories = [
  { id: "wedding", icon: "💍", label: "Weddings", description: "Grand ballrooms for royal celebrations", count: 3, color: "#C9A227" },
  { id: "corporate", icon: "🏢", label: "Corporate", description: "Professional suites for business excellence", count: 2, color: "#2772C9" },
  { id: "birthday", icon: "🎂", label: "Parties", description: "Cozy spaces for intimate celebrations", count: 2, color: "#C92772" },
  { id: "outdoor", icon: "🌳", label: "Outdoor", description: "Lush gardens for events under the stars", count: 1, color: "#27C972" },
];

export const gallery = [
  { id: "1", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80", category: "Wedding", caption: "Grand Hall" },
  { id: "2", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", category: "Reception", caption: "Luxury Decor" },
];

export const testimonials = [
  { id: "t1", author: "Deepa Sharma", event: "Wedding", comment: "Magical experience!", rating: 5, date: "March 2026", avatar: "https://i.pravatar.cc/150?u=1" },
];

export const awards = [
  { year: "2025", title: "Best Convention Centre", org: "Event Awards" },
];

