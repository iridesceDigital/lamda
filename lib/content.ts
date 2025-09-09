export type Service = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  highlights?: string[];
  gallery?: string[];
};

export const services: Service[] = [
  {
    slug: "planning-permission",
    title: "Planning Permission",
    image: "/images/L1.jpg",
    excerpt:
      "Applications, drawings and liaison with planning authorities.",
    content:
      "We manage the end-to-end planning process including pre-app advice, site appraisals, full planning applications, design & access statements, and responses to consultee comments. Our coordinated approach reduces risk and shortens decision timelines.",
    highlights: [
      "Pre-application advice",
      "Design & Access Statements",
      "Neighbour consultations",
      "Appeals and planning conditions",
    ],
    gallery: ["/images/L1.jpg", "/images/L2.jpg"],
  },
  {
    slug: "building-regulations-design",
    title: "Building Regulations Design",
    image: "/images/L2.jpg",
    excerpt:
      "Detailed compliant drawings and specifications for approval.",
    content:
      "We produce detailed building regulations drawings, specifications and coordination packages ready for Building Control approval and construction. We focus on buildability, thermal performance and cost-effective compliance.",
    highlights: [
      "Fully coordinated drawing packs",
      "Thermal and acoustic performance",
      "Fire safety provisions",
      "Specification and notes",
    ],
    gallery: ["/images/L2.jpg", "/images/L3.jpg"],
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    image: "/images/L3.jpg",
    excerpt:
      "Efficient structural schemes and calculations.",
    content:
      "From domestic alterations to multi-storey frames, we design efficient, safe structures. We provide calculations, connection details and construction-stage support. Materials include steel, timber, masonry and reinforced concrete.",
    highlights: [
      "Member sizing & connection details",
      "Temporary works guidance",
      "Load assessments",
      "Site support during build",
    ],
    gallery: ["/images/L3.jpg", "/images/L5.jpg"],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    image: "/images/L4.jpg",
    excerpt:
      "Drainage, highways access and external works design.",
    content:
      "We design adoptable and private drainage strategies, SUDS, levels, access and external works in line with local and national requirements. We can coordinate with utilities and highways authorities to de-risk delivery.",
    highlights: [
      "Drainage strategies & SuDS",
      "Levels & external works",
      "Highways access",
      "Adoption & utility coordination",
    ],
    gallery: ["/images/L4.jpg", "/images/L1.jpg"],
  },
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  category: string;
  description?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    image: "/images/L1.jpg",
    category: "Residential",
    description:
      "Sample description for Project 1.",
    gallery: ["/images/L1.jpg", "/images/L2.jpg"],
  },
  {
    slug: "project-2",
    title: "Project 2",
    image: "/images/L2.jpg",
    category: "Mixed Use",
    description:
      "Sample description for Project 2.",
    gallery: ["/images/L2.jpg", "/images/L3.jpg"],
  },
  {
    slug: "project-3",
    title: "Project 3",
    image: "/images/L3.jpg",
    category: "Commercial",
    description:
      "Sample description for Project 3.",
    gallery: ["/images/L3.jpg", "/images/L4.jpg"],
  },
  {
    slug: "project-4",
    title: "Project 4",
    image: "/images/L4.jpg",
    category: "Residential",
    description:
      "Sample description for Project 4.",
    gallery: ["/images/L4.jpg", "/images/L5.jpg"],
  },
  {
    slug: "project-5",
    title: "Project 5",
    image: "/images/L5.jpg",
    category: "Residential",
    description:
      "Sample description for Project 5.",
    gallery: ["/images/L5.jpg", "/images/L1.jpg"],
  },
  {
    slug: "project-6",
    title: "Project 6",
    image: "/images/L2.jpg",
    category: "Commercial",
    description:
      "Sample description for Project 6.",
    gallery: ["/images/L2.jpg", "/images/L3.jpg"],
  },
];
