export const siteConfig = {
  name: "SANJAY KM",
  title: "Full Stack Developer | Freelancer | Exploring AI & Data Science",
  description: "Portfolio website of SANJAY KM",
  accentColor: "#1d4ed8",
  social: {
    email: "sanjay@sanjaykm.com",
    linkedin: "https://linkedin.com/in/sanjay-k-m",
    twitter: "https://x.com/_sanjay_km",
    github: "https://github.com/sanjay-k-m",
    resume: "1rlk_OThpTlNyQKc6mNqVjD53_n6y-rMa",
  },

  aboutMe:
    "I'm a Full Stack Developer who builds production-grade web applications and automated backend systems. I work across the stack — React.js and Next.js on the frontend, Node.js, Django, and FastAPI on the backend — with PostgreSQL, MongoDB, and Redis powering the data layer. I engineer CI/CD pipelines with Jenkins, manage AWS infrastructure, and integrate services like the Meta WhatsApp Business API and Razorpay. From freelance client deliveries to enterprise deployments, I focus on shipping reliable, scalable software.",

  projects: [
    {
      name: "PoshWatch – Luxury E-Catalog with Admin Panel (Freelance)",
      description:
        "A full-stack luxury product catalog built for a premium retailer in Kochi. Features a sophisticated, minimalist storefront for showcasing watches, wallets, and accessories, backed by a NestJS REST API with PostgreSQL. Includes a dedicated admin panel for real-time product, category, and inventory management.",
      link: "https://www.poshwatch.in",
      skills: [
        "React.js",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
        "Admin Panel",
        "UI/UX Design",
        // "Graphql",
      ],

    },
    {
      name: "HRMS Platform (Employee Management)",
      description:
        "A full-featured HRMS platform built with the MERN stack and Electron.js. Handles attendance, leave, and asset tracking. Includes RBAC for secure role management and auto-logout on inactivity. Cross-platform app supports desktop punch-in/out.",
      link: "https://hrmstest.domainenroll.com/auth/login",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Electron.js",
        "Redux",
        "RBAC",
      ],
    },
    {
      name: "Trade Fusion Corporate Website (Freelance)",
      description:
        "A responsive corporate website built as a freelance project for a UAE-based trading company. Developed with Bootstrap. Includes a fully functional admin panel to manage products, categories, and images using Firebase Firestore and Storage. Integrated secure upload handling and bulk deletion. Hosted on Netlify with domain setup via GoDaddy.",
      link: "https://tradefusionuae.com",
      skills: [
        "Bootstrap",
        "Firebase",
        "Firestore",
        "Firebase Storage",
        "Netlify",
        "GoDaddy",
      ],
    },
    {
      name: "Zylera Ecommerce",
      description:
        "A scalable e-commerce platform built using Next.js, Zustand, Tailwind CSS, and Sanity CMS. Integrated Razorpay for secure payments and deployed using serverless architecture on Vercel.",
      link: "https://zylera-ecommerce.vercel.app/",
      skills: [
        "Next.js",
        "React.js",
        "Zustand",
        "Tailwind CSS",
        "Sanity CMS",
        "Razorpay",
        "Vercel",
      ],
    },
    {
      name: "Realtime Chat App",
      description:
        "A full-stack real-time chat app using the MERN stack and WebSockets. Supports messaging, typing indicators, and persistent chat history with JWT-based authentication.",
      link: "https://github.com/Sanjay-k-m/mern-realtime-chat-app-frontend",
      skills: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "WebSockets",
        "JWT",
      ],
    },
    {
      name: "React Admin Dashboard",
      description:
        "A real-time admin dashboard built using React.js. Features include dynamic UI components, user analytics, and data visualizations for better business insights.",
      link: "https://react-admin-dashboard-rust-phi.vercel.app/",
      skills: ["React.js", "Tailwind CSS", "Chart.js", "Realtime Data"],
    },
  ],

  experience: [
    {
      company: "Onebyzero Labs, Kozhikode, Kerala",
      title: "Full Stack Developer",
      dateRange: "Oct 2025 – Present",
      bullets: [
        "Full-Stack Architecture: Lead the development and deployment of enterprise-grade applications, leveraging a diverse stack including React.js, Django, and FastAPI to deliver robust and scalable solutions.",
        "DevOps & Automation: Engineered and maintained automated CI/CD pipelines using Jenkins to streamline software delivery, optimize AWS EC2 infrastructure performance, and ensure consistent production reliability.",
        "System Integration: Architected complex backend systems with secure biometric integrations and advanced business logic to enhance security and operational efficiency across live products.",
        "Infrastructure Management: Managed end-to-end cloud deployments, including DNS configuration, Nginx setup, and SSL implementation, ensuring high availability for company-wide production environments.",
      ],
    },
    {
      company: "Domain Enroll",
      title: "Junior Software Engineer (Intern)",
      dateRange: "Apr 2024 – Sept 2024",
      bullets: [
        "Developed a full-featured HRMS platform using the MERN stack",
        "Built a cross-platform Electron.js app for attendance punch-in/out",
        "Implemented secure Role-Based Access Control (RBAC) with Redux",
        "Increased attendance accuracy by 80% and improved leave tracking efficiency",
        "Integrated auto-logout and user inactivity handling for enhanced security",
      ],
    },
  ],

  skills: [
    // Frontend
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Vite",
    "Electron.js",
    "Tailwind CSS",
    "Material UI",
    "ShadCN UI",
    "Bootstrap",
    "Redux",
    "Zustand",
    // Backend
    "Node.js",
    "Express.js",
    "Django",
    "FastAPI",
    "Python",
    "REST APIs",
    "WebSockets",
    "JWT",
    // Databases
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    // DevOps & Infrastructure
    "Docker",
    "AWS",
    "S3",
    "Jenkins",
    "CI/CD pipelines",
    "Nginx",
    "Linux",
    "n8n",
    // Integrations & Tools
    "Meta WhatsApp Business API",
    "Biometric Authentication",
    "Git",
    "Postman",
    "Vercel",
    "Netlify",
    "Render",
  ],

  education: [
    {
      school:
        "St Aloysius Institute of Management & Information Technology (AIMIT)",
      degree: "Master of Computer Applications",
      dateRange: "2022 - 2024",
      achievements: [
        "Developed multiple full-stack projects using MERN and Firebase",
        "Completed internship as Full Stack Developer (MERN + Electron.js)",
        "Built and deployed a live HRMS platform as part of final year project",
      ],
    },
    {
      school: "Kannur University",
      degree: "Bachelor of Computer Science",
      dateRange: "2018 - 2021",
      achievements: [
        "Learned core programming and computer science fundamentals",
        "Built mini-projects using Python and JavaScript",
      ],
    },
  ],
};
