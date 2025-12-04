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
    image: "/images/L2.jpg",
    excerpt:
      "Applications, drawings and liaison with planning authorities.",
    content:
      `We manage the end-to-end planning process including:
      
• Site appraisals
• Full planning applications; for new-builds, commercial developments, and major alterations to existing buildings and changes of use.
• Planning statements such as design and access statements.
• Any appeals to planning refusals
• Responses to consultee comments
• Retrospective planning applications
• Even if your planning requirements aren’t on the list, contact us as we are committed to helping you.
`,
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
    image: "/images/L6.jpg",
    excerpt:
      "Detailed compliant drawings and specifications to conform to the latest building regulations.",
    content:
      `Lamda Building Design can lead you through the complexities of the building regulations to ensure the success of your project.

Depending on the nature of your scheme, Building Regulations drawings may be required in addition to any structural calculations (Link to structural engineering); our in-house team can provide support in all areas.

Building regulations drawings delve into the technical aspects of developments such as thermal capacities of materials, waterproofing and escape routes.  

We will require any architectural planning drawings you may have carried out to provide a quote.  If planning isn't required for your scheme, please feel free to contact us and run through your requirements and we can advise further.
`,
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
      "Cost-effective and practical structural designs and calculations",
    content:
      "From domestic alterations to multi-storey frames, we design economical and robust structures. We provide calculations, connection details and construction-stage support. Materials include steel, timber, masonry and reinforced concrete.",
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
    image: "/images/L7.jpg",
    excerpt:
      "Drainage, highways access and external works design.",
    content:
      "We design drainage systems for both private and adoptable, SuDS, levels, access and external works. We coordinate with utilities companies, highway companies and other stakeholders to produce compliant details.",
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
    title: "Single storey rear extension in Doncaster",
    image: "/images/P1_4.jpg",
    category: "Residential",
    description:
      "drawings carried out for building regulations approval only as the extension fell within permitted development rights therefore did not require planning",
    gallery: ["/images/P1_2.jpg", "/images/P1_4.jpg", "/images/P1_1.jpg", "/images/P1_5.jpg", "/images/P1_3.jpg", "/images/P1_6.jpg"],
  },
  /*
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
  },*/
];
