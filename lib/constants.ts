import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedinIn } from "react-icons/fa";

export const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT ?? 3000;
export const SITE_URL = isProduction ? "https://parathy.vercel.app" : `http://localhost:${PORT}`;

export const GITHUB_USERNAME = "parvathysuresh2001";
export const SITE_NAME = "Parvathy Suresh";
export const SITE_GITHUB_URL = "https://github.com/parvathysuresh2001";
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/____dustyrose____/";
export const SITE_LINKEDIN_URL = "https://www.linkedin.com/in/parvathy-suresh-3bbab4375/";

export const authorName = "Parvathy Suresh";

export const SITE_KEYWORDS = [
  `${authorName}`, "Python Developer", "Django Developer", "Full Stack Developer",
  "Backend Developer", "Web Developer", "Web Development", "Tech Enthusiast",
  "Django REST Framework", "API Development", "Flask", "FastAPI", "Database Design",
  "PostgreSQL", "MySQL", "Web Apps", "Personal Projects", "Tech Portfolio",
  "GitHub", "Portfolio Website", "Python Projects", "Django Projects",
  "Full Stack Projects", "API Projects", "Open Source Projects", "Learning Developer",
  "Self-Taught Programmer", "Coding Enthusiast", "Tech Learner", "Automation Projects",
  "Beginner Developer", "Web Application Development", "Programming Portfolio"
];

export const SOCIAL_LINKS = [
  {
    href: SITE_GITHUB_URL,
    title: "GitHub",
    icon: SiGithub,
  },
  {
    href: SITE_INSTAGRAM_URL,
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: SITE_LINKEDIN_URL,
    title: "LinkedIn",
    icon: FaLinkedinIn,
  },
];

//Layout
export const layoutUI = {
  lightImagePath: "/images/logo/plogo-black-transparent.svg",
  darkImagePath: "/images/logo/plogo-white-transparent.svg",
};

//Home Page
export const homePage = {
  title: "Parvathy Suresh's Portfolio",
  description: "Parvathy Suresh's Portfolio Website Home Page",
  metaTitle: `Meet ${authorName} - Building the Future with Modern Technology`,
  metaDesc: `${authorName} is a passionate developer with a drive for creating impactful, scalable solutions across platforms using the latest in modern technology and development tools.`,
  metaKeywords: [
    "Python Developer", "Django Developer", "Full Stack Development", "Web Development",
    "Modern Technologies", "Django REST Framework", "API Development", "Backend Developer",
    "Frontend Developer", "Tech Enthusiast", "Portfolio", "Web Apps", "GitHub",
    "Personal Website", "India Developer", "Programming Projects", "Open Source", "Learning Developer"
  ],
};

export const ABOUTME = {
  aboutMe: "About Me",
  knowMore: "Know more about me",
} as const;

export const contactInfo = {
  promptHeading: "Any questions?",
  promptText: "Feel free to reach out to me!",
  email: "parvathysuresh2001@gmail.com",
};

export const introText = {
  greetingLeft: `I'm ${authorName}, a passionate developer building`,
  greetingRight: "websites using modern technologies",
  location: "India • UTC/GMT +5:30",
  imagePath: "/images/logo/plogo-white-black-bg.svg",
};

export const techTags: TechTags = {
  author: "Parvathy", // First name only
  imagePath: "/images/logo/plogo-white-black-bg.svg",
  label: "Python",
  label2: "Django",
  label3: "Next.js",
  label4: "React.js",
};

// About Page
export const aboutPage = {
  title: "About",
  description: `Hi there! I am ${authorName}, a passionate developer who enjoys building web applications using modern technologies.`,
  metaTitle: `Get to Know ${authorName} - Passionate Python & Django Developer`,
  metaDesc: `Explore ${authorName}'s background, skills, and journey in web development. Discover how his passion for technology, creativity, and problem-solving drives his growth as a developer.`,
  metaKeywords: [
    "Python Developer", `About ${authorName}`, "Django Developer", "Web Developer",
    "Tech Enthusiast", "Backend Developer", "Full Stack Developer", "API Development",
    "Web Applications", "Creative Thinker", "Problem Solver", "Learning Developer",
    "Software Development", "Developer Journey", "Open Source Projects"
  ],
};

export const whoAmIData = {
  bio: {
    role: "Python & Django Developer",
    birthDate: "2001-11-28", // yyyy-mm-dd format strictly
    description: "I'm passionate about building cutting-edge applications that solve real-world problems. With a blend of technical expertise, creative thinking, and a constant hunger for learning, I develop solutions that are not only functional but also impactful.",
  },
  skills: ["Python", "Django", "Django REST Framework", "FastAPI", "React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "PostgreSQL", "MySQL", "Git", "GitHub", "VS Code", "Linux"],
  whyMe: [
    {
      id: 1,
      text: "A creative thinker with a knack for solving challenging problems.",
    },
    {
      id: 2,
      text: "Always on the pulse of the latest tech trends to deliver forward-thinking solutions.",
    },
    {
      id: 3,
      text: "A team player with a passion for collaboration and innovation.",
    },
  ],
  aboutThisSite: {
    Framework: "Next.js",
    Authentication: "Next Auth",
    "State Management": "Zustand",
    Deployment: "Vercel",
    Styling: "Tailwind CSS",
    "UI Components": ["Headless UI", "Radix UI", "Shadcn UI"],
    Animations: ["Motion", "React Spring", "TailwindCSS Animate"],
  },
};

//Cert Page
export const certPage = {
  title: "Certificates",
  description: "Check out some of the certifications I have earned.",
  metaTitle: `${authorName}'s Certifications & Achievements`,
  metaDesc: `Explore the professional certifications of ${authorName}, highlighting his expertise and commitment to mastering modern software technologies.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects",
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects",
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const certificates: Certificate[] = [
  {
    id: 1,
    certificateName: "Python & Django Skill Training",
    description: "Python & Django Skill Training is an online program authorized by Avodha",
    issuer: "Avodha",
    issueDate: "15-09-2025",
    imgPath: "/images/certificates/cert1.jpg",
  }
];

//Journey Page
export const journeyPage = {
  title: "Journey",
  description: "Explore my experiences and learning path that shaped my career in software development.",
  metaTitle: `${authorName}'s Career & Education Timeline`,
  metaDesc: `Trace the growth of Software Engineer ${authorName} through his academic milestones and industry experience in software development and innovation.`,
  metaKeywords: [
    `${authorName} Journey`, "Software Engineer Career", "Developer Education", "Tech Career Path",
    "Software Engineer Experience", "Developer Timeline", "Tech Education", "Professional Development",
    "Tech Experience", "Software Engineering Journey", "Tech Milestones", "Career Timeline", "Industry Experience"
  ],
};

export const experiences: Experience[] = [
  // {
  //   id: 1,
  //   title: "",
  //   organization: "",
  //   date: "",
  //   description: [""],
  // },
];

export const education: Education[] = [
  {
    id: 1,
    course: "Computer Science & Engineering",
    institution: "College of Engineering and Management Punnapra, Alappuzha, Kerala",
    period: "2019 - 2023",
  },
  {
    id: 2,
    course: "Higher Secondary",
    institution: "St. Joseph's Higher Secondary School, Alappuzha, Kerala",
    period: "2017 - 2019",
  },
  {
    id: 3,
    course: "High School",
    institution: "St. Mary's Residential Central School, Alappuzha, Kerala",
    period: "2014 - 2017",
  },
];

//Projects Page
export const projectPage = {
  title: "Projects",
  description: "Check out some of the projects I've worked on.",
  metaTitle: `${authorName}'s Project Portfolio`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    `${authorName} Projects`, "Software Engineering Projects", "Web Development Projects",
    "React Projects", "Next.js Projects", "TypeScript Projects", "GitHub Portfolio", "Tech Projects",
    "Full Stack Development", "Open Source Projects", "Software Solutions", "App Development"
  ],
};

export const projects: Project[] = [
  {
    id: "",
    name: "",
    description: "",
    detailedDescription: "",
    techstack: ["", "", "", "", "", ""],
    slug: "",
    website: "",
    imgPath: ""
  },
]

//Tech Page
export const techPage = {
  title: "Tech",
  description: "Check out some of the technologies and tools i am using",
  metaTitle: `${authorName}'s Tech Stack`,
  metaDesc: `Browse through ${authorName}'s latest development projects, featuring modern tech stacks like React, Next.js, TypeScript, Spring Boot, and Tailwind CSS. Built to be performant, scalable, and visually stunning.`,
  metaKeywords: [
    "Tech Stacks", "Tools I Use", "React.js", "Next.js", "TypeScript", "JavaScript", "Spring Boot", "Python",
    "MySQL", "PostgreSQL", "Tailwind CSS", "Zustand", "GitHub", "DigitalOcean", "Linux", "VS Code",
    "Tech Stack Portfolio", "Development Tools", "Frontend Tech", "Backend Tech"
  ],
};

export const stackGroups = [
  {
    id: "coding",
    name: "Coding Tools",
    menuItems: [
      {
        imagePath: "/images/tech/vscode.png",
        name: "VS Code",
        description: "Code editor",
        url: "https://code.visualstudio.com/",
      },
      {
        imagePath: "/images/tech/material-icon-theme.png",
        name: "Material Icons",
        description: "VS Code theme",
        url: "https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme",
      },
      {
        imagePath: "/images/tech/pycharm.png",
        name: "PyCharm",
        description: "Python IDE",
        url: "https://www.jetbrains.com/pycharm/",
      },
      {
        imagePath: "/images/tech/git.png",
        name: "Git",
        description: "Version control",
        url: "https://git-scm.com",
      },
      {
        imagePath: "/images/tech/github.png",
        name: "GitHub",
        description: "Code hosting",
        url: "https://github.com",
      },
    ],
  },
  {
    id: "design",
    name: "Design Tools",
    menuItems: [
      {
        imagePath: "/images/tech/figma.png",
        name: "Figma",
        description: "UI design",
        url: "https://www.figma.com",
      },
      {
        imagePath: "/images/tech/canva.png",
        name: "Canva",
        description: "Graphic design",
        url: "https://www.canva.com",
      },
      {
        imagePath: "/images/tech/picsart.png",
        name: "Picsart",
        description: "Photo editor",
        url: "https://picsart.com",
      },
    ],
  },
  {
    id: "hosting",
    name: "Deployment & Hosting",
    menuItems: [
      {
        imagePath: "/images/tech/vercel.png",
        name: "Vercel",
        description: "Web hosting",
        url: "https://vercel.com",
      },
      {
        imagePath: "/images/tech/netlify.png",
        name: "Netlify",
        description: "Deploy platform",
        url: "https://www.netlify.com",
      },
      {
        imagePath: "/images/tech/cloudflare.png",
        name: "Cloudflare",
        description: "DNS & CDN",
        url: "https://www.cloudflare.com/",
      },
    ],
  },
  {
    id: "tools",
    name: "Productivity Tools",
    menuItems: [
      {
        imagePath: "/images/tech/postman.png",
        name: "Postman",
        description: "API testing",
        url: "https://www.postman.com/",
      },
      {
        imagePath: "/images/tech/chatgpt.png",
        name: "ChatGPT",
        description: "AI assistant",
        url: "https://chat.openai.com",
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    menuItems: [
      {
        imagePath: "/images/tech/winrar.png",
        name: "WinRAR",
        description: "File archiver",
        url: "https://www.win-rar.com",
      },
      {
        imagePath: "/images/tech/winscp.png",
        name: "WinSCP",
        description: "FTP client",
        url: "https://winscp.net",
      },
    ],
  },
  {
    id: "browsers",
    name: "Browsers",
    menuItems: [
      {
        imagePath: "/images/tech/chrome.png",
        name: "Chrome",
        description: "Web browser",
        url: "https://www.google.com/chrome/",
      },
      {
        imagePath: "/images/tech/brave.png",
        name: "Brave",
        description: "Private browser",
        url: "https://brave.com",
      },
    ],
  },
];

//Coming Soon Page
export const comingSoon = {
  title: "Coming soon",
  description: "The page you are viewing is under construction",
  metaTitle: `Coming soon`,
  metaDesc: `The page you are viewing is under construction`,
  metaKeywords: [
    "Coming Soon", "Under Construction"
  ],
};

// Default Metadata
export const metadataValues = {
  description: `I'm ${authorName}, a passionate software engineer specializing in building innovative digital solutions using modern technologies like React, Next.js, and TypeScript.`,
  openGraph: {
    description: `Explore the portfolio of ${authorName} — a Software Engineer creating impactful projects, sharing his career journey, and more. Dive into his work with cutting-edge technologies.`,
    imagePath: "/images/logo/open-share.png",
    imageType: "image/png",
  },
  twitter: {
    description: "Software engineer crafting seamless digital experiences with Next.js, React, TypeScript, and more.",
    imagePath: `/images/logo/open-share.png`,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};