/** Site & contact (TailorTech Website Content Draft + Old/constants) */
export const SITE = {
  tagline: "Where Skills Are Tailor-Made.",
  heroTitle: "Build Real Tech Skills with TailorTech",
  heroSubtitle: "Where Skills Are Tailor-Made.",
  whatWeOffer:
    "At TailorTech, we offer carefully designed programs focused on building strong fundamentals, practical skills, and real-world project experience in modern software technologies.",
  ctaTitle: "Start Building Skills That Are Truly Tailor-Made.",
  ctaSubtext:
    "Join TailorTech and learn through practical projects, small live batches, and focused mentorship designed to help you grow in the software industry.",
  whatsappNumber: "917340445010",
  whatsappDisplay: "+91 73404 45010",
  email: "tailortech.team@gmail.com",
  instagram: "@tailortech.in",
  linkedinUrl: "https://www.linkedin.com/company/tailortechh",
};

export const whatsappLink = (text = "Hi, I want to know more about TailorTech programs") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const COURSES = [
  {
    id: "java-frontend",
    cat: "frontend",
    badge: "Live Online",
    emoji: "🎨",
    banner: "linear-gradient(135deg,#3a7d5e,#6ab88a)",
    title: "Java Frontend Development",
    desc: "Learn how to build modern and responsive user interfaces using core frontend technologies and best development practices.",
    duration: "75+ hours",
    mode: "Live Online",
    focus: "UI development, responsive design, and frontend fundamentals",
    lessons: "75+ hrs",
    rating: "5.0",
    price: "150",
    original: "150",
    currency: "USD",
    priceLabel: "Program Fee",
    earlyBird: null,
    tags: ["Live Online"],
    kind: "program",
    longDesc:
      "The Frontend Development program at TailorTech is designed to help learners build a strong foundation in modern web development. This module focuses on creating responsive, interactive web interfaces while understanding the core concepts that power modern frontend applications. Through structured live sessions and hands-on project work, learners gain practical experience with essential frontend technologies and development practices.",
    whatItCovers: [
      {
        title: "HTML & CSS",
        bullets: ["Build structured and responsive web pages using modern layout techniques."],
      },
      {
        title: "JavaScript & ES6 Fundamentals",
        bullets: ["Understand the core concepts of JavaScript and modern ES6 features used in real-world development."],
      },
      {
        title: "React Framework",
        bullets: ["Learn to build dynamic and component-based user interfaces using React."],
      },
      {
        title: "Real-World Frontend Projects",
        bullets: ["Apply your learning by building practical projects that simulate real development scenarios."],
      },
    ],
    whatYouGet: [
      "Live instructor-led sessions",
      "Hands-on project-based learning",
      "Practical exposure to frontend technologies",
      "A strong foundation for starting a career in frontend development",
    ],
    programDetails: { batchSize: "Small batches for focused learning" },
  },
  {
    id: "java-backend",
    cat: "backend",
    badge: "Live Online",
    emoji: "☕",
    banner: "linear-gradient(135deg,#b44a2d,#e07a5f)",
    title: "Java Backend Development",
    desc: "Understand how backend systems power modern applications, including server-side logic, APIs, and database integration.",
    duration: "90+ hours",
    mode: "Live Online",
    focus: "Backend architecture, API development, and database management",
    lessons: "90+ hrs",
    rating: "5.0",
    price: "200",
    original: "200",
    currency: "USD",
    priceLabel: "Program Fee",
    earlyBird: null,
    tags: ["Live Online"],
    kind: "program",
    longDesc:
      "The Backend Development program at TailorTech is designed to help learners build strong server-side development skills and prepare for backend-focused software engineering roles. This program focuses on the core technologies and concepts used to build scalable backend systems, APIs, and data-driven applications. Through structured live sessions and hands-on projects, learners gain practical experience in building and managing backend services used in real-world applications.",
    whatItCovers: [
      { title: "Core Java & OOP", bullets: ["Strong foundation in Java and object-oriented design principles."] },
      { title: "Databases & Data Management", bullets: ["SQL, database design, JPA, and Hibernate for data storage and integration."] },
      { title: "Spring Boot & REST APIs", bullets: ["Scalable backend services and RESTful APIs using Spring Boot."] },
      { title: "Security & Microservices Fundamentals", bullets: ["Spring Security concepts and basics of microservices architecture."] },
      { title: "Backend Architecture & Best Practices", bullets: ["How backend systems are structured; maintainable, scalable code."] },
      { title: "Real-World Backend Projects", bullets: ["Practical experience through backend projects and API integrations."] },
    ],
    whatYouGet: [
      "Live instructor-led sessions",
      "Real-world backend projects and code reviews",
      "Mock technical interviews and interview preparation",
      "Structured, job-oriented learning roadmap",
    ],
    programDetails: { batchSize: "Small batches — limited seats per batch" },
  },
  {
    id: "java-fullstack",
    cat: "fullstack",
    badge: "Flagship",
    emoji: "🚀",
    banner: "linear-gradient(135deg,#2d6a4f,#40916c)",
    title: "Java Full Stack Development",
    desc: "A complete program covering both frontend and backend development, helping learners build full web applications from scratch with real time projects and mock interviews.",
    duration: "175 hours",
    mode: "Live Online",
    focus: "End-to-end application development and full stack architecture",
    lessons: "175 hrs",
    rating: "5.0",
    price: "300",
    original: "350",
    currency: "USD",
    priceLabel: "Early Bird Fee",
    earlyBird: "300 USD (Regular 350 USD)",
    tags: ["Live Online"],
    kind: "program",
    longDesc:
      "The Java Full Stack Developer Program at TailorTech is designed to help learners become job-ready software developers with strong fundamentals and real-world project experience. This program takes learners from core programming concepts to building complete enterprise-level applications, following an industry-focused learning path aligned with modern software development practices. Through structured live sessions, hands-on assignments, and real-world projects, participants gain practical exposure to the tools and technologies used in modern full stack development.",
    whatItCovers: [
      { title: "Frontend Development", bullets: ["HTML, CSS, JavaScript, Bootstrap, and React for modern responsive UIs."] },
      { title: "Backend Development", bullets: ["Java, Spring Boot, and microservices for scalable backends and APIs."] },
      { title: "Database Technologies", bullets: ["SQL, JPA, and Hibernate for data storage and integration."] },
      { title: "DevOps & Cloud", bullets: ["Docker, Kubernetes, CI/CD, and AWS — modern deployment practices."] },
      {
        title: "Real-World Projects",
        bullets: ["E-commerce platform, food delivery app, issue tracking system, and more."],
      },
    ],
    whatYouGet: [
      "Live instructor-led sessions",
      "Real-world project experience",
      "Code reviews and technical guidance",
      "Mock interviews and interview preparation",
      "Industry-aligned learning roadmap",
    ],
    programDetails: { batchSize: "Small batches for focused learning" },
  },
  {
    id: "data-engineering",
    cat: "data",
    badge: "Live Online",
    emoji: "📊",
    banner: "linear-gradient(135deg,#1a759f,#52b8d6)",
    title: "Data Engineering Master Program",
    desc: "Learn how modern data platforms and pipelines are built to process and manage large datasets for real-world applications.",
    duration: "120 hours",
    mode: "Live Online",
    focus: "Data pipelines, data processing, and industry tools used in data engineering",
    lessons: "120 hrs",
    rating: "5.0",
    price: "—",
    original: "",
    currency: "",
    priceLabel: "Contact for fee",
    earlyBird: null,
    tags: ["Live Online"],
    kind: "program",
    longDesc:
      "The Data Engineering program at TailorTech is designed to help learners build strong foundations and practical skills required to work as a Data Engineer. This program covers the core concepts of data engineering, modern data processing tools, and cloud-based data systems through structured learning and hands-on projects.",
    whatItCovers: [
      {
        title: "Data Engineering Foundations",
        bullets: [
          "SQL for data engineering",
          "Python for data processing",
          "Linux basics and shell scripting",
          "Git and version control",
          "Data warehouse fundamentals",
          "Data modeling (Fact & Dimension, Star vs Snowflake)",
          "ETL vs ELT and incremental pipelines",
          "Medallion architecture and pipeline design",
          "Introduction to NoSQL systems",
        ],
      },
      {
        title: "Big Data Processing & Orchestration",
        bullets: [
          "Apache Spark and Spark SQL",
          "DataFrames, transformations, joins, aggregations",
          "Performance tuning fundamentals",
          "Databricks and Delta Lake basics",
          "Apache Airflow for orchestration",
          "Scheduling, dependencies, monitoring",
          "Kafka fundamentals and event-driven architecture",
          "Batch vs streaming pipelines",
        ],
      },
      {
        title: "Cloud Data Engineering & Projects",
        bullets: [
          "dbt fundamentals and transformation workflows",
          "Data quality checks and monitoring",
          "Cloud concepts (AWS / Azure overview)",
          "Data lake and data warehouse architecture",
          "End-to-end capstone project",
          "SQL, Python, and Spark interview prep",
        ],
      },
    ],
    whatYouGet: [
      "Live instructor-led sessions",
      "Hands-on data engineering projects",
      "Exposure to modern data engineering tools",
      "Structured learning roadmap",
      "Interview preparation and guidance",
    ],
    programDetails: { batchSize: "Small batches for focused learning" },
  },
  {
    id: "java-fullstack-recorded",
    cat: "recorded",
    badge: "Recorded",
    emoji: "📹",
    banner: "linear-gradient(135deg,#5a3d8a,#8b6bb8)",
    title: "Java Full Stack Development (Recorded)",
    desc: "A self-paced recorded program for learners who prefer flexible learning. Build frontend and backend skills through structured lectures and practical exercises.",
    duration: "Self-paced",
    mode: "Recorded",
    focus: "Full stack fundamentals, application development concepts, and independent learning",
    lessons: "Self-paced",
    rating: "5.0",
    price: "—",
    original: "",
    currency: "",
    priceLabel: "Contact for access",
    earlyBird: null,
    tags: ["Recorded", "Self-paced"],
    kind: "program",
    longDesc:
      "The Java Full Stack Development Recorded Program at TailorTech is designed for learners who prefer flexible, self-paced learning while building strong full stack development skills. This program covers both frontend and backend development, helping learners understand how modern web applications are built from end to end. Through structured recorded sessions and practical exercises, participants can learn at their own pace while building a solid foundation in full stack development.",
    whatItCovers: [
      {
        title: "Frontend Development",
        bullets: ["HTML and CSS fundamentals", "JavaScript and modern ES6", "Bootstrap for responsive layouts", "React for dynamic applications"],
      },
      {
        title: "Backend Development",
        bullets: ["Core Java and OOP", "Spring Boot", "REST API development", "Backend architecture fundamentals"],
      },
      {
        title: "Database & Application Integration",
        bullets: ["SQL fundamentals", "Database design basics", "JPA and Hibernate concepts"],
      },
      {
        title: "Full Stack Application Development",
        bullets: ["How frontend, backend, and databases work together", "Full stack architecture and workflows"],
      },
    ],
    whatYouGet: [
      "Structured recorded sessions",
      "Self-paced learning flexibility",
      "Practical full stack development concepts",
      "Strong foundation for modern web development",
    ],
    programDetails: { batchSize: "Learn anytime at your own pace" },
  },
  {
    id: "mock-interviews",
    cat: "interview",
    badge: "1:1 Session",
    emoji: "🎯",
    banner: "linear-gradient(135deg,#7a4488,#c47ad7)",
    title: "Mock Interview Sessions",
    desc: "Prepare for real technical interviews through one-on-one mock interview sessions with detailed feedback and guidance.",
    duration: "1 hour / session",
    mode: "Live Online",
    focus: "Technical interview practice, problem-solving, and confidence building",
    lessons: "Per session",
    rating: "5.0",
    price: "—",
    original: "",
    currency: "",
    priceLabel: "Book via WhatsApp",
    earlyBird: null,
    tags: ["One-on-One"],
    kind: "service",
    longDesc:
      "TailorTech Mock Interview Sessions are designed to help learners prepare confidently for technical interviews. These one-on-one sessions simulate real interview environments and provide valuable feedback to improve problem-solving, technical understanding, and communication. Each session is conducted by an industry professional who evaluates your approach and provides detailed feedback to help you perform better in real interviews.",
    whatItCovers: [
      {
        title: "What the Session Includes",
        bullets: [
          "One-on-one mock interview with an industry expert",
          "Real interview-style technical questions",
          "Evaluation of problem-solving approach",
          "Feedback on technical concepts and coding style",
          "Guidance on improving interview performance",
        ],
      },
      {
        title: "Who It Is For",
        bullets: [
          "Students preparing for technical interviews",
          "Developers looking to improve interview performance",
          "Professionals preparing for backend, full stack, or data engineering roles",
        ],
      },
    ],
    whatYouGet: ["Personalized feedback", "Interview-style practice", "Actionable next steps"],
    programDetails: { batchSize: "Duration: 1 hour per session · Live Online (One-on-One)" },
  },
];

export const CURRICULUM_BY_COURSE = {
  "java-frontend": [
    { num: "01", title: "HTML & CSS", meta: "Foundations", lessons: ["Structured pages|Live", "Responsive layouts|Live", "🛠 Mini project|Lab"] },
    { num: "02", title: "JavaScript & ES6", meta: "Core language", lessons: ["Syntax & types|Live", "Functions & scope|Live", "Async basics|Live"] },
    { num: "03", title: "React", meta: "UI development", lessons: ["Components & props|Live", "State & hooks|Live", "🛠 Frontend project|Lab"] },
  ],
  "java-backend": [
    { num: "01", title: "Core Java & OOP", meta: "Foundation", lessons: ["Language fundamentals|Live", "OOP design|Live"] },
    { num: "02", title: "Databases", meta: "SQL & JPA", lessons: ["SQL & design|Live", "JPA & Hibernate|Live"] },
    { num: "03", title: "Spring Boot & APIs", meta: "Backend services", lessons: ["REST APIs|Live", "Security basics|Live", "🛠 Backend project|Lab"] },
  ],
  "java-fullstack": [
    { num: "01", title: "Frontend Track", meta: "UI layer", lessons: ["HTML, CSS, JS, Bootstrap|Live", "React fundamentals|Live", "🛠 UI project|Lab"] },
    { num: "02", title: "Backend Track", meta: "Services", lessons: ["Java & Spring Boot|Live", "REST & microservices intro|Live", "🛠 API project|Lab"] },
    { num: "03", title: "Data & Integration", meta: "Persistence", lessons: ["SQL, JPA, Hibernate|Live", "End-to-end integration|Live"] },
    { num: "04", title: "DevOps & Cloud", meta: "Delivery", lessons: ["Docker & CI/CD overview|Live", "AWS deployment concepts|Live"] },
    { num: "05", title: "Capstone & Career", meta: "Job readiness", lessons: ["Full stack capstone|Lab", "Mock interviews|Live", "Resume & prep|Live"] },
  ],
  "java-fullstack-recorded": [
    { num: "01", title: "Recorded: Frontend", meta: "Self-paced", lessons: ["HTML, CSS, JavaScript|Recording", "Bootstrap & React|Recording"] },
    { num: "02", title: "Recorded: Backend", meta: "Self-paced", lessons: ["Java & OOP|Recording", "Spring Boot & REST|Recording"] },
    { num: "03", title: "Recorded: Full Stack", meta: "Self-paced", lessons: ["Databases & JPA|Recording", "🛠 Application exercises|Lab"] },
  ],
  "data-engineering": [
    { num: "01", title: "Foundations", meta: "Core DE skills", lessons: ["SQL & Python for DE|Live", "Linux, Git, warehousing|Live", "Modeling & pipelines|Live"] },
    { num: "02", title: "Big Data & Orchestration", meta: "Scale", lessons: ["Spark & Spark SQL|Live", "Airflow & Kafka intro|Live", "Batch vs streaming|Live"] },
    { num: "03", title: "Cloud & Capstone", meta: "Production", lessons: ["dbt & quality|Live", "Cloud data platforms|Live", "🛠 Capstone project|Lab"] },
  ],
  "mock-interviews": [
    { num: "01", title: "Session Flow", meta: "1 hour", lessons: ["Problem-solving round|Live", "Technical deep-dive|Live", "Feedback & plan|Live"] },
  ],
};

export const BATCHES = [
  {
    label: "Data Engineering",
    name: "Next batch",
    color: "#6BB3D4",
    start: "10th April 2026",
    time: "120 hours · Live Online",
    mode: "Live Online",
    seats: 17,
    status: "open",
    courseId: "data-engineering",
  },
  {
    label: "Java Full Stack",
    name: "Next batch",
    color: "#7BAE8E",
    start: "1st May 2026",
    time: "175 hours · Live Online",
    mode: "Live Online",
    seats: 20,
    status: "open",
    courseId: "java-fullstack",
  },
  {
    label: "Evening",
    name: "Rolling",
    color: "#E8845C",
    start: "Ask for schedule",
    time: "Live Online",
    mode: "Zoom Live",
    seats: null,
    status: "open",
    courseId: null,
  },
  {
    label: "Self-Paced",
    name: "Recorded programs",
    color: "#9B87B2",
    start: "Instant access",
    time: "Your own pace",
    mode: "HD Recordings",
    seats: null,
    status: "open",
    courseId: "java-fullstack-recorded",
  },
];

export const REVIEWS = [
  {
    text: "TailorTech transformed my career! The practical approach and small batch size meant I got personalized attention. The instructors are industry experts who really care about your success.",
    name: "Rahul Sharma",
    role: "Java Full Stack Development",
    avatar: "👨‍🎓",
  },
  {
    text: "The best investment I've made in my career. The course covers everything from fundamentals to advanced concepts. The live sessions and hands-on projects prepared me perfectly for real-world challenges.",
    name: "Priya Patel",
    role: "Java Backend Development",
    avatar: "👩",
  },
  {
    text: "Excellent course structure and amazing support. The focus on industry tools and practical projects helped me land my dream job. Highly recommend TailorTech to anyone serious about coding!",
    name: "Amit Kumar",
    role: "Data Engineering",
    avatar: "👨",
  },
  {
    text: "The small batch learning approach made all the difference. I could ask questions freely and get immediate feedback. The course materials are comprehensive and the instructors are always available to help.",
    name: "Sneha Reddy",
    role: "Java Frontend Development",
    avatar: "👩‍🎓",
  },
  {
    text: "From zero coding experience to a full-stack developer — TailorTech made it possible! The step-by-step guidance and real-world projects gave me the confidence to apply for jobs.",
    name: "Vikram Singh",
    role: "Java Full Stack Development",
    avatar: "👨‍💻",
  },
  {
    text: "The personalized guidance and focus on fundamentals really helped me understand concepts deeply. The mock interviews and career support were invaluable in my job search.",
    name: "Anjali Mehta",
    role: "Java Backend Development",
    avatar: "👩",
  },
];

export const FAQS = [
  ["Need prior experience?", "No — programs are designed for learners building strong fundamentals. You need a laptop and commitment."],
  ["Miss a live class?", "Sessions are structured for small batches; recordings and support options are shared with enrolled learners."],
  ["Get a certificate?", "Yes — on completing the program requirements and projects as communicated for your batch."],
  ["How do I apply or pay?", `WhatsApp us at ${SITE.whatsappDisplay} or email ${SITE.email} for enrollment and fee details.`],
  ["Mock interviews — how to book?", "Use “Book a Slot” on the Mock Interview program — we’ll connect you via WhatsApp to schedule."],
  ["Working professionals?", "Live online schedules, small batches, and recorded options (where available) support flexible learning."],
];

export const TEAM = [
  { emoji: "👨‍🏫", title: "Instructors", role: "Industry practitioners", bio: "Live sessions led by professionals who build and ship software." },
  { emoji: "🤝", title: "Mentorship", role: "Small batches", bio: "Room for questions, feedback, and guided practice." },
  { emoji: "🛠️", title: "Projects", role: "Hands-on", bio: "Real-world assignments and capstones aligned with industry work." },
  { emoji: "💼", title: "Career prep", role: "Interviews", bio: "Mock interviews and guidance to build interview confidence." },
];

export const WHY_TAILORTECH = [
  { icon: "💻", title: "Practical Learning Approach", desc: "Focus on real-world skills through hands-on projects and practical assignments.", bg: "#E8F3EC" },
  { icon: "👥", title: "Small Live Batches", desc: "Interactive learning with personalized attention and mentorship.", bg: "#FFF0EA" },
  { icon: "🛠️", title: "Industry-Focused Training", desc: "Programs designed around tools and practices used in modern software teams.", bg: "#D4EEF8" },
  { icon: "🎯", title: "Tailor-Made Skill Development", desc: "Learning paths designed to help each student grow at their own pace.", bg: "#E8E0F0" },
  { icon: "📚", title: "Career-Oriented Learning", desc: "Guidance and preparation focused on building confidence for real tech careers.", bg: "#FFF3DB" },
];

export const ABOUT = {
  title: "About TailorTech",
  headline: "Software training, thoughtfully structured.",
  intro:
    "TailorTech is a learning initiative focused on building practical, industry-ready technology skills through thoughtful and structured learning experiences. The idea behind TailorTech comes from a simple belief — learning technology should not be generic. Every learner has a different background, pace, and career goal. At TailorTech, programs are designed with the philosophy that skills should be built carefully, practically, and in a way that truly prepares someone for real-world software development.",
  philosophy:
    "At TailorTech, we believe that strong careers in technology are built on clear fundamentals, practical understanding, and continuous learning. Instead of overwhelming learners with excessive information, our programs focus on helping students understand concepts deeply and apply them in real-world scenarios.",
  learningApproach:
    "We emphasize small, focused learning environments where learners can ask questions, receive feedback, and build confidence while working on real projects. Whether someone is starting their journey in technology or looking to strengthen existing skills, TailorTech provides a learning environment designed to help them grow thoughtfully and build skills that truly matter.",
  focusPoints: [
    { title: "Practical", desc: "Programs are designed around real-world tools, projects, and development practices." },
    { title: "Structured", desc: "Learners follow a clear roadmap that builds skills step by step." },
    { title: "Focused", desc: "Small live batches allow for better interaction and personalized attention." },
    { title: "Career-Oriented", desc: "Programs are aligned with real industry expectations and interview preparation." },
  ],
};

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "fullstack", label: "Full Stack" },
  { key: "data", label: "Data" },
  { key: "recorded", label: "Recorded" },
  { key: "interview", label: "Mock Interviews" },
];

export const HOME_STATS = [
  ["Small batches", "Live programs"],
  ["Hands-on", "Projects"],
  ["Mentored", "Learning"],
  ["Interview", "Prep"],
];
