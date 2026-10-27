import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-software',
    title: 'Website & Software Development',
    tagline: 'Attractive. Fast. Easy to use. Optimized for all devices.',
    category: 'web-software',
    icon: 'Globe',
    description:
      'We engineer high-performance web applications, institutional platforms, and responsive commercial websites tailored to precise business operational goals.',
    accentColor: '#1E293B',
    bgGrad: 'bg-white',
    features: [
      'Professional business websites',
      'E-commerce websites for online selling',
      'Web applications and digital platforms',
      'School management systems',
      'Business management systems',
      'Custom software solutions',
      'Landing pages & portfolio websites',
      'UI/UX design & responsive layouts',
    ],
    highlights: [
      '100% Mobile Responsive',
      'Fast Performance & Technical SEO',
      'Secure & Scalable Architecture',
      'Custom Content & Admin Management',
    ],
    deliverables: [
      'Production-ready source code & deployment setup',
      'Cross-device testing (Mobile, Tablet, Desktop)',
      'SSL security certification & domain configuration',
      '30-day post-launch technical warranty & maintenance',
    ],
  },
  {
    id: 'it-training',
    title: 'IT Training & Digital Skills Coaching',
    tagline: 'Online One-on-One Tuition · Dedicated expert support from home',
    category: 'it-training',
    icon: 'GraduationCap',
    description:
      'Structured 1-on-1 private technical coaching designed for working professionals, students, and career switchers seeking practical workplace proficiencies.',
    accentColor: '#1E293B',
    bgGrad: 'bg-white',
    features: [
      'Computer fundamentals & digital literacy',
      'Website development & modern frontend practices',
      'Programming & software basics',
      'UI/UX design principles & design systems',
      'Data management & workplace organization',
      'Essential digital skills for modern workplaces',
    ],
    highlights: [
      'Flexible Scheduling around your commitments',
      'Personalized Curriculum paced to your goals',
      'Practical & Project-Based Exercises',
      'Learn From Anywhere via live interactive screen sessions',
    ],
    deliverables: [
      'One-on-one live video mentorship sessions',
      'Practical workplace assignments & guided exercises',
      'Direct WhatsApp instructor Q&A channel',
      'Certificate of course completion',
    ],
  },
  {
    id: 'ms-office',
    title: 'Microsoft Office Professional Services',
    tagline: 'Better Documents. Better Analysis. Better Presentations. Better Results.',
    category: 'ms-office',
    icon: 'FileSpreadsheet',
    description:
      'Executive-level document design, formula automation, and high-stakes presentation consulting for corporate, legal, and academic standards.',
    accentColor: '#1E293B',
    bgGrad: 'bg-white',
    features: [
      'Professional CV & executive credentials creation',
      'Corporate reports, tenders, contracts & proposals',
      'Advanced Excel modeling, formulas & dynamic dashboards',
      'Automated inventory & calculation spreadsheets',
      'High-impact executive PowerPoint presentations',
      'Document formatting & standardized corporate stationery',
    ],
    highlights: [
      'Executive Typographic & Layout Standards',
      'Automated Formulas & Error-Free Calculations',
      'Compelling Visual Hierarchy in Presentations',
      'Fast Turnaround for Urgent Business Deadlines',
    ],
    subCategories: [
      {
        name: 'Microsoft Word',
        icon: 'FileText',
        items: [
          'Professional CV & Resume design',
          'Corporate documents & business proposals',
          'Reports, formatting & company manuals',
          'Official letters, memos & formal contracts',
        ],
      },
      {
        name: 'Microsoft Excel',
        icon: 'Table2',
        items: [
          'Advanced modeling & automated formulas',
          'Calculations & inventory tracking systems',
          'Interactive dashboards & data analysis',
          'Data cleaning, validation & reporting',
        ],
      },
      {
        name: 'Microsoft PowerPoint',
        icon: 'Presentation',
        items: [
          'Executive corporate slide decks',
          'Pitch decks & commercial investor proposals',
          'Educational, training & lecture presentations',
          'Keynote event slides & visual storytelling',
        ],
      },
    ],
  },
  {
    id: 'creative-video',
    title: 'Video Editing & Creative Content Creation',
    tagline: 'Creative Content. Stronger Brand. Greater Impact.',
    category: 'creative-video',
    icon: 'Video',
    description:
      'High-retention commercial video editing, brand assets, and marketing graphics engineered to elevate company credibility across digital channels.',
    accentColor: '#1E293B',
    bgGrad: 'bg-white',
    features: [
      'Professional video editing & color grading',
      'Promotional, commercial & explainer videos',
      'Short-form vertical content (Reels, Shorts, TikTok)',
      'Digital graphics, banners & marketing flyers',
      'Visual branding materials & brand identity assets',
    ],
    highlights: [
      'High-Retention Editorial Pacing & Hooks',
      'Clean Audio Mastering & Dynamic Subtitles',
      'Consistent Brand Guidelines & Color Grading',
      'Multi-Format Exports for Web & Mobile',
    ],
    deliverables: [
      'High-definition exports (1080p / 4K ProRes/MP4)',
      'Aspect ratios for widescreen (16:9) and vertical (9:16)',
      'Clean subtitles, sound effects & licensed audio',
      'Ready-to-publish digital marketing assets',
    ],
  },
];

export const whyChooseUsReasons = [
  {
    title: 'Professional & Creative Solutions',
    description:
      'Rigorous software engineering paired with thoughtful design aesthetics to give your organization a distinct competitive edge.',
    icon: 'Award',
  },
  {
    title: 'Affordable & Transparent Pricing',
    description:
      'Predictable scopes and transparent terms designed to deliver clear return on investment without hidden overheads.',
    icon: 'DollarSign',
  },
  {
    title: 'Modern Technology & Design Systems',
    description:
      'Built with industry-standard frameworks, responsive design principles, and enterprise accessibility guidelines.',
    icon: 'Monitor',
  },
  {
    title: 'Attentive Client Collaboration',
    description:
      'Direct communication with senior technical specialists who listen to your operational bottlenecks and build targeted solutions.',
    icon: 'HeartHandshake',
  },
  {
    title: 'End-to-End Delivery & Support',
    description:
      'From discovery and architecture through post-delivery support, we stand behind everything we produce.',
    icon: 'Headphones',
  },
  {
    title: 'Engineered for Real-World Demands',
    description:
      'Practical tools and training that streamline administrative workloads, enhance team productivity, and scale reliably.',
    icon: 'Target',
  },
];
