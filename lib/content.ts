export type Service = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
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
  },
  {
    slug: "building-regulations-design",
    title: "Building Regulations Design",
    image: "/images/L2.jpg",
    excerpt:
      "Detailed compliant drawings and specifications for approval.",
    content:
      "We produce detailed building regulations drawings, specifications and coordination packages ready for Building Control approval and construction. We focus on buildability, thermal performance and cost-effective compliance.",
  },
  {
    slug: "structural-engineering",
    title: "Structural Engineering",
    image: "/images/L3.jpg",
    excerpt:
      "Efficient structural schemes and calculations.",
    content:
      "From domestic alterations to multi-storey frames, we design efficient, safe structures. We provide calculations, connection details and construction-stage support. Materials include steel, timber, masonry and reinforced concrete.",
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    image: "/images/L4.jpg",
    excerpt:
      "Drainage, highways access and external works design.",
    content:
      "We design adoptable and private drainage strategies, SUDS, levels, access and external works in line with local and national requirements. We can coordinate with utilities and highways authorities to de-risk delivery.",
  },
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  category: string;
};

export const projects: Project[] = [
  { slug: "residential-extension", title: "Residential Extension", image: "/images/L5.jpg", category: "Residential" },
  { slug: "urban-mixed-use", title: "Urban Mixed-Use", image: "/images/L2.jpg", category: "Mixed Use" },
  { slug: "office-refurb", title: "Office Refurbishment", image: "/images/L3.jpg", category: "Commercial" },
  { slug: "housing-scheme", title: "Housing Scheme", image: "/images/L1.jpg", category: "Residential" },
];
