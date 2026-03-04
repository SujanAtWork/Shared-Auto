export const LOCATIONS = [
  "Main Hostel Gate", "Girls Hostel Block A", "Boys Hostel Block B",
  "Engineering College", "Medical College", "Arts & Science Block",
  "Central Library", "Sports Complex", "Railway Station", "Bus Stand",
  "City Mall", "Market Square", "Airport Road",
];

export const RIDES = [
  { id: 1, driver: "Aryan S.",  avatar: "A", rating: 4.9, seats: 2, price: 40, dept: "8:00 AM", from: "Main Hostel Gate",      to: "Engineering College",    duration: "12 min", type: "Auto",   verified: true,  trips: 234 },
  { id: 2, driver: "Priya M.",  avatar: "P", rating: 4.8, seats: 3, price: 35, dept: "8:15 AM", from: "Main Hostel Gate",      to: "Engineering College",    duration: "14 min", type: "Auto",   verified: true,  trips: 187 },
  { id: 3, driver: "Rahul K.",  avatar: "R", rating: 4.7, seats: 1, price: 45, dept: "8:30 AM", from: "Main Hostel Gate",      to: "Engineering College",    duration: "11 min", type: "E-Auto", verified: false, trips: 98  },
  { id: 4, driver: "Sneha T.",  avatar: "S", rating: 5.0, seats: 2, price: 50, dept: "8:45 AM", from: "Girls Hostel Block A",  to: "Medical College",        duration: "18 min", type: "E-Auto", verified: true,  trips: 312 },
  { id: 5, driver: "Vikram D.", avatar: "V", rating: 4.6, seats: 3, price: 30, dept: "9:00 AM", from: "Boys Hostel Block B",   to: "Arts & Science Block",   duration: "10 min", type: "Auto",   verified: true,  trips: 156 },
];

export const MY_BOOKINGS = [
  { id: "BK001", from: "Main Hostel Gate", to: "Engineering College", date: "Today, 8:00 AM",     driver: "Aryan S.", status: "upcoming",  price: 40 },
  { id: "BK002", from: "City Mall",        to: "Main Hostel Gate",    date: "Yesterday, 6:30 PM", driver: "Priya M.", status: "completed", price: 35 },
];

export const POPULAR_ROUTES = [
  ["Main Hostel Gate",     "Engineering College"],
  ["Girls Hostel Block A", "Medical College"],
  ["Boys Hostel Block B",  "City Mall"],
];
