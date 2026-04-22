import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Hamood",
  lastName: "Ahmed",
  name: `Hamood Ahmed`,
  role: "Agentic AI & Full Stack Engineer",
  avatar: "/images/personal/hamood-main.jpg",
  email: "hamood.dev@outlook.com",
  location: "Asia/Karachi",
  languages: ["English", "Urdu"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on Agentic AI, Claude Code, and Full Stack Development</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/hamoodahmed",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/hamood-ahmed-a34748213/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>Architecting Autonomous Systems & Scalable Web Solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Work</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Agentic AI ERP
        </Text>
      </Row>
    ),
    href: "/work/agentic-ai-erp-integration",
  },
  subline: (
    <>
      I'm Hamood, a <Text as="span" size="xl" weight="strong">Full Stack Developer</Text> specialized in <Text as="span" size="xl" weight="strong">Agentic AI</Text>. I build autonomous agents with Claude, scalable ERP systems with Python/Frappe, and high-performance applications with Next.js.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/hamoodahmed",
  },
  intro: {
    display: true,
    title: "My Journey",
    description: (
      <>
        My professional path is a unique blend of creativity and engineering. I started as a **Graphic & UI Designer**, which gave me a deep appreciation for user experience and aesthetics. However, my curiosity about how things work under the hood led me to pursue a **Bachelor's in Computer Science at Iqra University**.
        <br /><br />
        A defining chapter of my career was joining the **PIAIC (Presidential Initiative for Artificial Intelligence and Computing)**, where I specialized in **Agentic AI and Robotic Engineering**. This experience transformed my approach to software, moving from building static applications to architecting autonomous "Agentic" systems that can reason and execute complex tasks.
        <br /><br />
        Today, I bridge the gap between robust Full Stack development and cutting-edge AI, delivering solutions that are not just functional but intelligent.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "KCompute (Pvt) Ltd.",
        timeframe: "Mar 2023 - Dec 2025",
        role: "Full-stack Developer",
        achievements: [
          <>
            Developed and scaled web applications using ASP.NET Web API, JavaScript, and modern frontend frameworks, ensuring high performance and responsiveness.
          </>,
          <>
            Implemented Generative AI solutions using OpenAI and Claude-based tools to automate internal workflows and enhance product capabilities.
          </>,
          <>
            Integrated third-party services and managed complex PostgreSQL/SQL databases, maintaining 99.9% system uptime for client applications.
          </>,
          <>
            Applied DevOps best practices including Docker, Jenkins, and Kubernetes for seamless CI/CD pipeline management.
          </>,
        ],
        images: [],
      },
      {
        company: "Codes Soft",
        timeframe: "Apr 2025 - Jul 2025",
        role: "Python ERP Developer",
        achievements: [
          <>
            Developed custom ERP solutions using the Frappe framework and ERPNext, creating complex doctypes and dynamic reports.
          </>,
          <>
            Designed custom print formats and built intuitive pages to meet specific business process requirements for international clients.
          </>,
        ],
        images: [],
      },
      {
        company: "Credential Business Solutions",
        timeframe: "Feb 2020 - Mar 2021",
        role: "Graphic & UI Designer",
        achievements: [
          <>
            Created comprehensive branding packages, UI elements, and social media designs using Figma and Adobe Creative Suite.
          </>,
          <>
            Focused on clean, user-friendly design principles to improve user engagement and brand consistency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Iqra University (IU), Pakistan",
        description: (
          <>
            **Bachelor's in Computer Science (2020 - 2025)**<br />
            CGPA: 3.25. Focused on AI and Machine Learning. Final Year Project: AI-based ML system for detecting hairfall-related diseases.
          </>
        ),
      },
      {
        name: "PIAIC",
        description: <>Specialization in Agentic AI and Robotic Engineering (Quarter 1).</>,
      },
      {
        name: "Adamjee Government Science College",
        description: <>Intermediate in Pre-Engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Agentic AI & Automation",
        description: (
          <>Building autonomous systems and multi-agent workflows using cutting-edge AI frameworks.</>
        ),
        tags: [
          { name: "Claude Code", icon: "claude" },
          { name: "LangGraph", icon: "python" },
          { name: "n8n Automation", icon: "workflow" },
          { name: "Generative AI", icon: "ai" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Full Stack Development",
        description: (
          <>Developing scalable web applications with modern frameworks and robust backends.</>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "ASP.NET Web API", icon: "csharp" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "Tailwind CSS", icon: "tailwindcss" },
        ],
        images: [],
      },
      {
        title: "DevOps & ERP",
        description: (
          <>Managing infrastructure and specialized business systems.</>
        ),
        tags: [
          { name: "Docker", icon: "docker" },
          { name: "Kubernetes", icon: "kubernetes" },
          { name: "ERPNext", icon: "python" },
          { name: "Frappe", icon: "python" },
          { name: "CI/CD", icon: "jenkins" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/personal/hamood-main.jpg",
      alt: "Hamood Ahmed - Agentic AI Specialist",
      orientation: "vertical",
    },
    {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
      alt: "AI Neural Network Concept",
      orientation: "horizontal",
    },
    {
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000",
      alt: "Clean Code Implementation",
      orientation: "horizontal",
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000",
      alt: "Robotic Process Automation",
      orientation: "vertical",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000",
      alt: "Advanced Technology Hardware",
      orientation: "vertical",
    },
    {
      src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
      alt: "Cybersecurity & Data Protection",
      orientation: "horizontal",
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000",
      alt: "Modern Workspace Setup",
      orientation: "horizontal",
    },
    {
      src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000",
      alt: "Development Environment",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
