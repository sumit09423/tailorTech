export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: "Live" | "Recorded";
  category: "Live Program" | "Recorded Course";
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  rating: number;
  testimonial: string;
  role?: string;
}

export interface Batch {
  id: string;
  courseName: string;
  startDate: string;
  endDate: string;
  seatsAvailable: number;
}

export const COURSES: Course[] = [
  {
    id: "java-frontend",
    title: "Java Frontend Development",
    description:
      "Learn how to build modern and responsive user interfaces using core frontend technologies and best development practices.",
    duration: "75 hours",
    mode: "Live",
    category: "Live Program",
    image: "/courses/java-frontend.jpg",
  },
  {
    id: "java-backend",
    title: "Java Backend Development",
    description:
      "Understand how backend systems power modern applications, including server-side logic, APIs, and database integration.",
    duration: "90 hours",
    mode: "Live",
    category: "Live Program",
    image: "/courses/java-backend.jpg",
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    description:
      "A complete program covering both frontend and backend development, helping learners build full web applications from scratch with real time projects and mock interviews.",
    duration: "175 hours",
    mode: "Live",
    category: "Live Program",
    image: "/courses/java-fullstack.jpg",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Learn how modern data platforms and pipelines are built to process and manage large datasets for real-world applications.",
    duration: "120 hours",
    mode: "Live",
    category: "Live Program",
    image: "/courses/data-engineering.jpg",
  },
  {
    id: "java-fullstack-recorded",
    title: "Java Full Stack Development (Recorded)",
    description:
      "A self-paced recorded program designed for learners who prefer flexible learning. Build a strong understanding of both frontend and backend development through structured lectures and practical exercises.",
    duration: "Self-Paced",
    mode: "Recorded",
    category: "Recorded Course",
    image: "/courses/java-fullstack-recorded.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    course: "Java Full Stack Development",
    rating: 5,
    testimonial:
      "TailorTech transformed my career! The practical approach and small batch size meant I got personalized attention. The instructors are industry experts who really care about your success.",
  },
  {
    id: "2",
    name: "Priya Patel",
    course: "Java Backend Development",
    rating: 5,
    testimonial:
      "The best investment I've made in my career. The course covers everything from fundamentals to advanced concepts. The live sessions and hands-on projects prepared me perfectly for real-world challenges.",
  },
  {
    id: "3",
    name: "Amit Kumar",
    course: "Data Engineering",
    rating: 5,
    testimonial:
      "Excellent course structure and amazing support. The focus on industry tools and practical projects helped me land my dream job. Highly recommend TailorTech to anyone serious about coding!",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    course: "Java Frontend Development",
    rating: 5,
    testimonial:
      "The small batch learning approach made all the difference. I could ask questions freely and get immediate feedback. The course materials are comprehensive and the instructors are always available to help.",
  },
  {
    id: "5",
    name: "Vikram Singh",
    course: "Java Full Stack Development",
    rating: 5,
    testimonial:
      "From zero coding experience to a full-stack developer - TailorTech made it possible! The step-by-step guidance and real-world projects gave me the confidence to apply for jobs.",
  },
  {
    id: "6",
    name: "Anjali Mehta",
    course: "Java Backend Development",
    rating: 5,
    testimonial:
      "The personalized guidance and focus on fundamentals really helped me understand concepts deeply. The mock interviews and career support were invaluable in my job search.",
  },
];

export const UPCOMING_BATCHES: Batch[] = [
  {
    id: "1",
    courseName: "Data Engineering",
    startDate: "2026-04-10",
    endDate: "2026-08-10",
    seatsAvailable: 17,
  },
  {
    id: "2",
    courseName: "Java Full Stack Development",
    startDate: "2026-05-01",
    endDate: "2026-10-31",
    seatsAvailable: 20,
  },
];

export const WHY_TAILORTECH = [
  {
    title: "Practical Learning Approach",
    description:
      "Focus on real-world skills through hands-on projects and practical assignments.",
    icon: "💻",
  },
  {
    title: "Small Live Batches",
    description:
      "Interactive learning with personalized attention and mentorship.",
    icon: "👥",
  },
  {
    title: "Industry-Focused Training",
    description:
      "Programs designed around tools and practices used in modern software teams.",
    icon: "🛠️",
  },
  {
    title: "Tailor-Made Skill Development",
    description:
      "Learning paths designed to help each student grow at their own pace.",
    icon: "🎯",
  },
  {
    title: "Career-Oriented Learning",
    description:
      "Guidance and preparation focused on building confidence for real tech careers.",
    icon: "📚",
  },
];

export const ABOUT_CONTENT = {
  intro: {
    title: "About TailorTech",
    content:
      "TailorTech is a learning initiative focused on building practical, industry-ready technology skills through thoughtful and structured learning experiences. The idea behind TailorTech comes from a simple belief — learning technology should not be generic. Every learner has a different background, pace, and career goal. At TailorTech, programs are designed with the philosophy that skills should be built carefully, practically, and in a way that truly prepares someone for real-world software development. Our programs focus on practical learning, real-world projects, and strong fundamentals rather than just theoretical content. Through live online sessions, personalized guidance, and self-paced learning options, TailorTech aims to create an environment where learners can develop confidence in building real software systems.",
  },
  philosophy: {
    title: "Our Philosophy",
    content:
      "At TailorTech, we believe that strong careers in technology are built on clear fundamentals, practical understanding, and continuous learning. Instead of overwhelming learners with excessive information, our programs focus on helping students understand concepts deeply and apply them in real-world scenarios. This philosophy is reflected in everything we do — from curriculum design to teaching approach.",
  },
  focus: {
    title: "Our Focus",
    points: [
      {
        title: "Practical",
        description: "Programs are designed around real-world tools, projects, and development practices.",
      },
      {
        title: "Structured",
        description: "Learners follow a clear roadmap that builds skills step by step.",
      },
      {
        title: "Focused",
        description: "Small live batches allow for better interaction and personalized attention.",
      },
      {
        title: "Career-Oriented",
        description: "Programs are aligned with real industry expectations and interview preparation.",
      },
    ],
  },
  learningApproach: {
    title: "Our Learning Approach",
    content:
      "We emphasize small, focused learning environments where learners can ask questions, receive feedback, and build confidence while working on real projects. Whether someone is starting their journey in technology or looking to strengthen existing skills, TailorTech provides a learning environment designed to help them grow thoughtfully and build skills that truly matter.",
  },
};

// WhatsApp number
export const WHATSAPP_NUMBER = "917340445010"; // +91 73404 45010
