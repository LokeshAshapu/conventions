// ── Single Convention Hall Data ───────────────────────────────────────────
// Replace these values with the real hall's information

export const HALL_INFO = {
  name: "The Grand Maharaja Convention",
  tagline: "Setting the Stage for Unforgettable Events",
  subtitle: "An exotic, larger-than-life event deserves an exquisite venue. Welcome to Hyderabad's finest convention centre.",
  phone: "+91 98765 43210",
  phone2: "+91 98765 43211",
  whatsapp: "919876543210",
  email: "events@grandmaharaja.com",
  address: "Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033",
  city: "Hyderabad",
  mapLat: 17.4239,
  mapLng: 78.4738,
  gMapsLink: "https://maps.google.com/?q=17.4239,78.4738",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  youtube: "https://www.youtube.com/",
  established: "1998",
  totalEvents: "5,000+",
  luxuryRooms: "42",
  carParking: "800",
  totalArea: "60,000 sq ft",
};

export interface Venue {
  id: string;
  name: string;
  slug: string;
  type: string;
  capacity: number;
  area: string;
  ac: boolean;
  description: string;
  shortDescription: string;
  features: string[];
  images: string[];
  coverImage: string;
  idealFor: string[];
  priceNote?: string;
}

export const venues: Venue[] = [
  {
    id: "v1",
    name: "Aashirwad Grand Ballroom",
    slug: "aashirwad-grand-ballroom",
    type: "Main Hall",
    capacity: 2000,
    area: "25,000 sq ft",
    ac: true,
    description: "Our flagship ballroom is the crown jewel of the Grand Maharaja Convention. Bathed in golden chandeliers and adorned with intricate décor, this hall transforms every event into a regal experience. Equipped with state-of-the-art AV, a grand stage, and multiple pre-function foyers.",
    shortDescription: "Our crown jewel — a grand AC ballroom for royal celebrations.",
    features: ["Crystal Chandeliers", "Grand Stage", "LED Lighting", "HD Sound System", "Projector & LED Wall", "Pre-Function Foyer", "Bridal Dressing Room", "Hydraulic Stage"],
    coverImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=85",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=85",
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=900&q=85",
    ],
    idealFor: ["Wedding", "Reception", "Engagement", "Cultural Events", "Awards Night"],
  },
  {
    id: "v2",
    name: "Utsava Convention Hall",
    slug: "utsava-convention-hall",
    type: "Convention Hall",
    capacity: 1200,
    area: "15,000 sq ft",
    ac: true,
    description: "Utsava is our premier convention hall designed for corporate excellence. Featuring modular seating, high-speed fiber internet, and a professional AV suite, it's the go-to space for seminars, conferences, and corporate galas in Hyderabad.",
    shortDescription: "A premier AC convention hall for corporate events and seminars.",
    features: ["Modular Seating", "Fiber WiFi", "Conference System", "Breakout Rooms", "LED Walls", "Catering Pantry", "Lounge Area", "Video Conferencing"],
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=85",
      "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=900&q=85",
    ],
    idealFor: ["Corporate Events", "Conference", "Seminar", "Product Launch", "Exhibition"],
    priceNote: "Starting ₹80K/day",
  },
  {
    id: "v3",
    name: "Anuraga Banquet",
    slug: "anuraga-banquet",
    type: "Banquet Hall",
    capacity: 600,
    area: "8,000 sq ft",
    ac: true,
    description: "Anuraga is our intimate banquet hall, perfect for mid-size celebrations. With warm amber lighting, elegant finishing, and a dedicated catering service, it promises an unforgettable experience for your guests.",
    shortDescription: "Intimate AC banquet for mid-size weddings and celebrations.",
    features: ["Amber Mood Lighting", "Dedicated Catering", "Stage", "Sound System", "Cake Counter", "Dance Floor", "Valet Parking"],
    coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
      "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=900&q=85",
    ],
    idealFor: ["Wedding", "Birthday", "Engagement", "Anniversary", "Reception"],
  },
  {
    id: "v4",
    name: "Aashirwad Gardens",
    slug: "aashirwad-gardens",
    type: "Outdoor Lawn",
    capacity: 800,
    area: "20,000 sq ft",
    ac: false,
    description: "A sprawling open-air lawn surrounded by lush greenery and twinkling fairy lights. Aashirwad Gardens is the perfect backdrop for outdoor weddings, sangeet nights, and cultural celebrations under the stars.",
    shortDescription: "A lush open-air lawn for dreamy outdoor weddings under the stars.",
    features: ["Green Lawns", "Fairy Lights", "Outdoor Catering", "Mandap Setup", "DJ Booth", "Parking Adjacent", "Tent/Shamiyana", "Generator Backup"],
    coverImage: "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=900&q=85",
      "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=900&q=85",
    ],
    idealFor: ["Outdoor Wedding", "Sangeet", "Cultural", "Garden Party", "Reception"],
  },
  {
    id: "v5",
    name: "Amulya Mini Hall",
    slug: "amulya-mini-hall",
    type: "Mini Hall",
    capacity: 150,
    area: "2,500 sq ft",
    ac: true,
    description: "Amulya is our cozy, fully air-conditioned mini hall ideal for intimate celebrations, private dinners, and small corporate meetings. Equipped with modern AV and personalized service.",
    shortDescription: "Cozy AC mini hall for intimate gatherings and private dinners.",
    features: ["AC", "Projector", "Sound System", "Catering", "Private Entrance", "Lounge"],
    coverImage: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=900&q=85",
    images: ["https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=900&q=85"],
    idealFor: ["Birthday", "Anniversary", "Private Dinner", "Meeting", "Baby Shower"],
    priceNote: "Starting ₹25K/event",
  },
  {
    id: "v6",
    name: "Pre-Function Hall",
    slug: "pre-function-hall",
    type: "Pre-Function Lounge",
    capacity: 300,
    area: "4,000 sq ft",
    ac: true,
    description: "A beautifully appointed pre-function space connecting our major halls, ideal for cocktail receptions, registration areas, and networking zones before the main event.",
    shortDescription: "Elegant pre-function lounge for cocktail receptions & networking.",
    features: ["Cocktail Setup", "Bar Counter", "Lounge Seating", "AC", "Reception Desk", "Branding Space"],
    coverImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=85"],
    idealFor: ["Cocktail Reception", "Networking", "Registration Area", "Pre-Event Lounge"],
  },
];

export const eventTypes = [
  { icon: "💍", label: "Weddings & Receptions", desc: "A royal stage for your dream wedding" },
  { icon: "💎", label: "Engagements", desc: "Celebrate the beginning of forever" },
  { icon: "🏢", label: "Corporate Events", desc: "Professional. Impressive. Memorable." },
  { icon: "🎂", label: "Birthday Parties", desc: "Make every age milestone grand" },
  { icon: "🎭", label: "Cultural Functions", desc: "Honour traditions in style" },
  { icon: "🎤", label: "Conferences & Seminars", desc: "Inspire and connect your audience" },
  { icon: "🖼️", label: "Exhibitions", desc: "Showcase your brand at scale" },
  { icon: "🌙", label: "Sangeet & Mehendi", desc: "Pre-wedding festivities done right" },
];

export const gallery = [
  { id: "g1", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80", category: "Wedding", caption: "Grand Wedding Setup" },
  { id: "g2", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", category: "Reception", caption: "Reception Decor" },
  { id: "g3", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", category: "Corporate", caption: "Corporate Conference" },
  { id: "g4", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", category: "Wedding", caption: "Sangeet Night" },
  { id: "g5", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", category: "Birthday", caption: "Birthday Celebration" },
  { id: "g6", image: "https://images.unsplash.com/photo-1506169894395-36397e4aaee4?w=800&q=80", category: "Outdoor", caption: "Garden Ceremony" },
  { id: "g7", image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80", category: "Corporate", caption: "Product Launch" },
  { id: "g8", image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80", category: "Wedding", caption: "Mandap Decor" },
  { id: "g9", image: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?w=800&q=80", category: "Corporate", caption: "Annual Gala" },
  { id: "g10", image: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?w=800&q=80", category: "Outdoor", caption: "Outdoor Reception" },
  { id: "g11", image: "https://images.unsplash.com/photo-1567636788276-40a47795ba4d?w=800&q=80", category: "Birthday", caption: "Private Dinner" },
  { id: "g12", image: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=800&q=80", category: "Reception", caption: "Evening Reception" },
];

export const testimonials = [
  { id: "t1", author: "Deepa & Arjun Sharma", event: "Wedding", avatar: "https://i.pravatar.cc/80?img=1", rating: 5, comment: "Our wedding at Grand Maharaja was everything we dreamed of and more. The hall was breathtaking, the staff was incredibly attentive, and every detail was perfect. Our guests still rave about it!", date: "March 2026" },
  { id: "t2", author: "Ravi Krishnamurthy", event: "Corporate Conference", avatar: "https://i.pravatar.cc/80?img=8", rating: 5, comment: "We hosted our annual tech conference here. The AV infrastructure, WiFi, and staff professionalism were world-class. Absolutely the best convention facility in Hyderabad.", date: "February 2026" },
  { id: "t3", author: "Lakshmi & Sai Venkatesh", event: "Reception", avatar: "https://i.pravatar.cc/80?img=11", rating: 5, comment: "The garden lawn was magical for our outdoor reception. The catering team was exceptional and the decoration team brought our vision to life perfectly.", date: "January 2026" },
  { id: "t4", author: "Sunita Aggarwal", event: "Birthday Celebration", avatar: "https://i.pravatar.cc/80?img=6", rating: 5, comment: "Booked Amulya Mini Hall for my mother's 60th birthday. The personalized service was outstanding. From lighting to food, everything was exactly as we requested.", date: "April 2026" },
];

export const awards = [
  { year: "2025", title: "Best Convention Centre", org: "Hyderabad Events Awards" },
  { year: "2024", title: "Top Wedding Venue", org: "Telangana Wedding Expo" },
  { year: "2024", title: "Excellence in Hospitality", org: "FICCI Tourism Awards" },
  { year: "2023", title: "Best Corporate Event Venue", org: "CII Business Summit" },
];
