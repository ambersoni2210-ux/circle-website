export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Lead the design of our college merchandise and digital platforms. You\'ll work closely with colleges to create branded experiences that resonate with Gen-Z.',
    requirements: [
      '4+ years of product design experience',
      'Strong portfolio in branding and merchandise design',
      'Proficiency in Figma and Adobe Creative Suite',
      'Experience with Gen-Z or youth-focused brands',
      'Understanding of e-commerce UX',
    ],
  },
  {
    id: 'job-002',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote, India',
    type: 'Full-time',
    description: 'Build and scale our college app platform and e-commerce infrastructure. Work with React Native, Next.js, and Node.js.',
    requirements: [
      '3+ years of full-stack development experience',
      'Proficiency in React/Next.js and Node.js',
      'Experience with React Native or mobile development',
      'Familiarity with MongoDB and PostgreSQL',
      'Strong understanding of RESTful APIs',
    ],
  },
  {
    id: 'job-003',
    title: 'College Partnerships Manager',
    department: 'Business Development',
    location: 'Delhi NCR, India',
    type: 'Full-time',
    description: 'Drive partnerships with colleges across India. You\'ll be the face of Circle, helping institutions understand the value of premium merchandise and digital platforms.',
    requirements: [
      '3+ years in B2B sales or partnerships',
      'Experience in education, ed-tech, or campus services',
      'Strong presentation and communication skills',
      'Willingness to travel across India',
      'Existing network in higher education is a plus',
    ],
  },
  {
    id: 'job-004',
    title: 'Content & Social Media Lead',
    department: 'Marketing',
    location: 'Bangalore, India',
    type: 'Full-time',
    description: 'Own our brand voice across social media and content channels. Create content that speaks to college students and administrators alike.',
    requirements: [
      '2+ years in content marketing or social media',
      'Deep understanding of Gen-Z culture and trends',
      'Experience with Instagram, LinkedIn, and YouTube',
      'Strong copywriting and storytelling skills',
      'Video production skills are a plus',
    ],
  },
  {
    id: 'job-005',
    title: 'Operations & Supply Chain Coordinator',
    department: 'Operations',
    location: 'Mumbai, India',
    type: 'Full-time',
    description: 'Manage our merchandise production, quality control, and logistics. Ensure every piece meets our premium quality standards.',
    requirements: [
      '2+ years in supply chain or operations',
      'Experience with apparel or merchandise production',
      'Strong organizational and project management skills',
      'Familiarity with inventory management tools',
      'Experience with vendor management',
    ],
  },
  {
    id: 'job-006',
    title: 'UI/UX Design Intern',
    department: 'Design',
    location: 'Remote, India',
    type: 'Internship',
    description: 'Join our design team and work on real projects — from app interfaces to web experiences. Perfect for design students looking to build their portfolio.',
    requirements: [
      'Currently pursuing a degree in Design or related field',
      'Basic proficiency in Figma',
      'Strong aesthetic sense and attention to detail',
      'Portfolio showcasing personal or academic projects',
      'Enthusiasm for branding and youth culture',
    ],
  },
];
