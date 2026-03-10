export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: "Live" | "Recorded";
  category: "Live Program" | "Recorded Course";
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
      "Master modern frontend development with Java-based frameworks. Learn to build responsive, interactive web applications using the latest technologies and best practices.",
    duration: "3 months",
    mode: "Live",
    category: "Live Program",
  },
  {
    id: "java-backend",
    title: "Java Backend Development",
    description:
      "Dive deep into server-side development with Java. Build robust, scalable backend systems, REST APIs, and learn enterprise-level Java development.",
    duration: "3 months",
    mode: "Live",
    category: "Live Program",
  },
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    description:
      "Complete full-stack development course covering both frontend and backend technologies. Build end-to-end applications from scratch.",
    duration: "6 months",
    mode: "Live",
    category: "Live Program",
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Learn to design and build data pipelines, work with big data technologies, and master data engineering tools used in the industry.",
    duration: "4 months",
    mode: "Live",
    category: "Live Program",
  },
  {
    id: "java-fullstack-recorded",
    title: "Java Full Stack Development (Recorded)",
    description:
      "Self-paced recorded course covering full-stack Java development. Learn at your own pace with lifetime access to all course materials.",
    duration: "6 months",
    mode: "Recorded",
    category: "Recorded Course",
  },
  {
    id: "backend-recorded",
    title: "Backend Development (Recorded)",
    description:
      "Self-paced recorded course on backend development. Perfect for those who want to learn server-side development on their own schedule.",
    duration: "3 months",
    mode: "Recorded",
    category: "Recorded Course",
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
    role: "Software Developer at TechCorp",
  },
  {
    id: "2",
    name: "Priya Patel",
    course: "Java Backend Development",
    rating: 5,
    testimonial:
      "The best investment I've made in my career. The course covers everything from fundamentals to advanced concepts. The live sessions and hands-on projects prepared me perfectly for real-world challenges.",
    role: "Backend Engineer at StartupXYZ",
  },
  {
    id: "3",
    name: "Amit Kumar",
    course: "Data Engineering",
    rating: 5,
    testimonial:
      "Excellent course structure and amazing support. The focus on industry tools and practical projects helped me land my dream job. Highly recommend TailorTech to anyone serious about coding!",
    role: "Data Engineer at DataTech",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    course: "Java Frontend Development",
    rating: 5,
    testimonial:
      "The small batch learning approach made all the difference. I could ask questions freely and get immediate feedback. The course materials are comprehensive and the instructors are always available to help.",
    role: "Frontend Developer at WebSolutions",
  },
  {
    id: "5",
    name: "Vikram Singh",
    course: "Java Full Stack Development",
    rating: 5,
    testimonial:
      "From zero coding experience to a full-stack developer - TailorTech made it possible! The step-by-step guidance and real-world projects gave me the confidence to apply for jobs.",
    role: "Full Stack Developer at InnovateLabs",
  },
  {
    id: "6",
    name: "Anjali Mehta",
    course: "Java Backend Development",
    rating: 5,
    testimonial:
      "The personalized guidance and focus on fundamentals really helped me understand concepts deeply. The mock interviews and career support were invaluable in my job search.",
    role: "Backend Developer at CloudSystems",
  },
];

export const UPCOMING_BATCHES: Batch[] = [
  {
    id: "1",
    courseName: "Java Full Stack Development",
    startDate: "2026-04-01",
    endDate: "2026-09-30",
    seatsAvailable: 15,
  },
  {
    id: "2",
    courseName: "Java Backend Development",
    startDate: "2026-04-15",
    endDate: "2026-07-15",
    seatsAvailable: 12,
  },
  {
    id: "3",
    courseName: "Java Frontend Development",
    startDate: "2026-05-01",
    endDate: "2026-07-31",
    seatsAvailable: 10,
  },
  {
    id: "4",
    courseName: "Data Engineering",
    startDate: "2026-05-15",
    endDate: "2026-09-15",
    seatsAvailable: 8,
  },
];

export const WHY_TAILORTECH = [
  {
    title: "Small Live Batches",
    description:
      "Limited seats ensure personalized attention and better learning outcomes.",
    icon: "👥",
  },
  {
    title: "Practical Learning",
    description:
      "Hands-on projects and real-world applications, not just theory.",
    icon: "💻",
  },
  {
    title: "Industry Tools",
    description:
      "Learn the tools and technologies actually used in the industry.",
    icon: "🛠️",
  },
  {
    title: "Personalized Guidance",
    description:
      "Get individual attention and mentorship from experienced instructors.",
    icon: "🎯",
  },
  {
    title: "Focus on Fundamentals",
    description:
      "Strong foundation in core concepts that last throughout your career.",
    icon: "📚",
  },
];

export const ABOUT_CONTENT = {
  whyStarted: {
    title: "Why TailorTech Started",
    content:
      "TailorTech was born from a simple observation: traditional coding bootcamps and online courses often leave students unprepared for real-world challenges. We noticed that students were learning syntax but not understanding how to solve problems, building projects but not understanding the fundamentals, and graduating without the confidence to tackle industry challenges. We set out to create a learning experience that bridges this gap.",
  },
  philosophy: {
    title: "Our Philosophy",
    content:
      "We believe that coding is a craft that requires deep understanding, not just memorization. Our philosophy centers on three core principles: understanding fundamentals deeply, learning through building, and receiving personalized guidance. We don't just teach you how to code - we teach you how to think like a developer.",
  },
  practicalLearning: {
    title: "Focus on Practical Learning",
    content:
      "Every concept you learn is immediately applied in real-world projects. We don't believe in learning in isolation. From day one, you'll be building applications that solve actual problems. Our curriculum is designed around projects, not lectures. You'll work on portfolio-worthy projects that demonstrate your skills to potential employers.",
  },
  smallBatchApproach: {
    title: "Small Live Batch Learning Approach",
    content:
      "We intentionally keep our batches small (typically 10-15 students) because we believe that quality learning happens when instructors can give individual attention. In our small batches, every question gets answered, every code review is thorough, and every student gets the support they need. This approach ensures that no one gets left behind and everyone reaches their full potential.",
  },
};

// WhatsApp number - update this with actual number
export const WHATSAPP_NUMBER = "1234567890"; // Replace with actual WhatsApp number
