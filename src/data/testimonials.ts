export interface Testimonial {
  id: number;
  name: string;
  role: string;
  college: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    role: 'Dean of Student Affairs',
    college: 'IIT Delhi',
    quote: 'Circle transformed our college merchandise from an afterthought into a genuine source of pride. Students actually want to wear our gear now. The quality and design are unmatched.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Arjun Mehta',
    role: 'Student Body President',
    college: 'BITS Pilani',
    quote: 'The college app Circle built for us has completely changed campus life. Event attendance is up 60%, and the in-app merch store is always buzzing. It feels like our own social platform.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Prof. Kavita Reddy',
    role: 'Director of Alumni Relations',
    college: 'Christ University',
    quote: 'Our alumni engagement metrics have improved dramatically since partnering with Circle. The limited-edition drops create excitement that traditional outreach never could.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Rahul Verma',
    role: 'Chief Administrative Officer',
    college: 'Manipal University',
    quote: 'Circle\'s bulk ordering process is seamless. From custom branding to delivery, everything was handled professionally. The merch quality exceeds anything we\'ve had before.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Sneha Patel',
    role: 'Final Year Student',
    college: 'NID Ahmedabad',
    quote: 'Finally, college merch that doesn\'t look like college merch. Circle\'s designs are so clean and minimal — I wear my NID hoodie everywhere. It\'s become part of my identity.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  },
];
