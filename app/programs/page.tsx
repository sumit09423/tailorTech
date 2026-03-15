import Navigation from "@/components/Navigation";
import ProgramCard from "@/components/ProgramCard";
import MockInterviewButton from "@/components/MockInterviewButton";

export const metadata = {
  title: "Our Programs - TailorTech",
  description: "Explore our comprehensive coding courses including Java Frontend, Backend, Full Stack Development, and Data Engineering programs.",
};

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#e91e63]/10 to-[#e91e63]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
                Comprehensive coding courses designed to transform your career
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Choose from live programs, recorded courses, or enhance your interview skills with our mock interview sessions.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="#java-fullstack"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Full Stack
              </a>
              <a
                href="#java-frontend"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Frontend
              </a>
              <a
                href="#java-backend"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Backend
              </a>
              <a
                href="#data-engineering"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Data Engineering
              </a>
              <a
                href="#recorded-courses"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Recorded Courses
              </a>
              <a
                href="#mock-interviews"
                className="px-6 py-2 bg-[#e91e63]/20 text-white rounded-full hover:bg-[#e91e63]/30 transition-colors border border-[#e91e63]/30"
              >
                Mock Interviews
              </a>
            </div>
          </div>
        </section>

        {/* Live Programs Section */}
        <section className="py-12 md:py-16 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Live Programs
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join small live batches with personalized guidance and real-time interaction
              </p>
            </div>

            {/* All Live Programs in Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Java Full Stack Development */}
              <div id="java-fullstack">
                <ProgramCard
                  title="Java Full Stack Developer Program"
                  duration="175 Hours"
                  mode="Live Online"
                  image="/javaFullStackDevloper.png"
                  description="The Java Full Stack Developer Program at TailorTech is designed to help learners become job-ready software developers with strong fundamentals and real-world project experience."
                  longDescription="This program takes learners from core programming concepts to building complete enterprise-level applications, following an industry-focused learning path aligned with modern software development practices. Through structured live sessions, hands-on assignments, and real-world projects, participants gain practical exposure to the tools and technologies used in modern full stack development."
                  whatCovers={[
                    "Frontend Development: HTML, CSS, JavaScript, Bootstrap, and React for building modern and responsive user interfaces.",
                    "Backend Development: Java, Spring Boot, and Microservices architecture for building scalable backend systems and APIs.",
                    "Database Technologies: SQL, JPA, and Hibernate for efficient data storage, management, and integration with applications.",
                    "DevOps & Cloud: Introduction to Docker, Kubernetes, CI/CD pipelines, and AWS to understand modern deployment practices.",
                    "Real-World Projects: Hands-on experience through projects such as an E-commerce platform, Food Delivery application, and Issue Tracking system.",
                  ]}
                  whatYouGet={[
                    "Live instructor-led sessions",
                    "Real-world project experience",
                    "Code reviews and technical guidance",
                    "Mock interviews and interview preparation",
                    "Industry-aligned learning roadmap",
                  ]}
                  fee={{
                    regular: "$350 USD",
                    earlyBird: "$300 USD",
                  }}
                  programId="java-fullstack"
                />
              </div>

              {/* Frontend Development */}
              <div id="java-frontend">
                <ProgramCard
                  title="Frontend Development – Module 1"
                  duration="75+ Hours"
                  mode="Live Online"
                  image="/FrontendDevelopment.png"
                  description="The Frontend Development program at TailorTech is designed to help learners build a strong foundation in modern web development. This module focuses on creating responsive, interactive web interfaces while understanding the core concepts that power modern frontend applications."
                  longDescription="Through structured live sessions and hands-on project work, learners gain practical experience with essential frontend technologies and development practices."
                  whatCovers={[
                    "HTML & CSS: Build structured and responsive web pages using modern layout techniques.",
                    "JavaScript & ES6 Fundamentals: Understand the core concepts of JavaScript and modern ES6 features used in real-world development.",
                    "React Framework: Learn to build dynamic and component-based user interfaces using React.",
                    "Real-World Frontend Projects: Apply your learning by building practical projects that simulate real development scenarios.",
                  ]}
                  whatYouGet={[
                    "Live instructor-led sessions",
                    "Hands-on project-based learning",
                    "Practical exposure to frontend technologies",
                    "A strong foundation for starting a career in frontend development",
                  ]}
                  fee={{
                    program: "$150 USD",
                  }}
                  programId="java-frontend"
                />
              </div>

              {/* Backend Development */}
              <div id="java-backend">
                <ProgramCard
                  title="Backend Development Program"
                  duration="90+ Hours"
                  mode="Live Online"
                  image="/JavaBackendDevelopment.png"
                  description="The Backend Development program at TailorTech is designed to help learners build strong server-side development skills and prepare for backend-focused software engineering roles."
                  longDescription="This program focuses on the core technologies and concepts used to build scalable backend systems, APIs, and data-driven applications. Through structured live sessions and hands-on projects, learners gain practical experience in building and managing backend services used in real-world applications."
                  whatCovers={[
                    "Core Java & Object-Oriented Programming: Build a strong foundation in Java programming and object-oriented design principles.",
                    "Databases & Data Management: Learn SQL, database design, JPA, and Hibernate for efficient data storage and application integration.",
                    "Spring Boot & REST APIs: Develop scalable backend services and RESTful APIs using Spring Boot.",
                    "Security & Microservices Fundamentals: Understand Spring Security concepts and the basics of microservices architecture.",
                    "Backend Architecture & Best Practices: Learn how backend systems are structured and how to write maintainable and scalable backend code.",
                    "Real-World Backend Projects: Gain practical experience through backend projects and API integrations.",
                  ]}
                  whatYouGet={[
                    "Live instructor-led sessions",
                    "Real-world backend projects and code reviews",
                    "Mock technical interviews and interview preparation",
                    "Structured, job-oriented learning roadmap",
                  ]}
                  fee={{
                    program: "$200 USD",
                  }}
                  programId="java-backend"
                />
              </div>

              {/* Data Engineering */}
              <div id="data-engineering">
                <ProgramCard
                  title="Data Engineering Master Program"
                  duration="120 Hours"
                  mode="Live Online"
                  image="/DataEngineeringMasterProgram.png"
                  description="The Data Engineering program at TailorTech is designed to help learners build strong foundations and practical skills required to work as a Data Engineer."
                  longDescription="This program covers the core concepts of data engineering, modern data processing tools, and cloud-based data systems through structured learning and hands-on projects."
                  whatCovers={[
                    "Data Engineering Foundations: SQL for data engineering, Python for data processing, Linux basics and shell scripting, Git and version control, Data warehouse fundamentals, Data modeling (Fact & Dimension tables, Star vs Snowflake schema), ETL vs ELT and incremental data pipelines, Medallion architecture and pipeline design basics, Introduction to NoSQL systems.",
                    "Big Data Processing & Orchestration: Apache Spark and Spark SQL, DataFrames, transformations, joins, and aggregations, Performance tuning fundamentals, Databricks and Delta Lake basics, Apache Airflow for workflow orchestration, Pipeline scheduling, dependencies, and monitoring, Kafka fundamentals and event-driven architecture, Batch vs streaming pipelines.",
                    "Cloud Data Engineering & Projects: dbt fundamentals and data transformation workflows, Data quality checks and monitoring, Cloud concepts for data engineering (AWS / Azure overview), Data lake and data warehouse architecture, Batch vs streaming system design, End-to-end data engineering capstone project, SQL, Python, and Spark interview preparation.",
                  ]}
                  whatYouGet={[
                    "Live instructor-led sessions",
                    "Hands-on data engineering projects",
                    "Exposure to modern data engineering tools",
                    "Structured learning roadmap",
                    "Interview preparation and guidance",
                  ]}
                  programId="data-engineering"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recorded Courses */}
        <section id="recorded-courses" className="py-12 md:py-16 bg-[#1a1a2e]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Recorded Courses
              </h2>
              <p className="text-lg text-gray-300 mb-2 max-w-2xl mx-auto">
                Self-paced recorded programs - learn at your own speed
              </p>
              <p className="text-sm text-gray-400 italic">
                Perfect for those who prefer flexible learning schedules
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProgramCard
                title="Java Full Stack Development (Recorded Program)"
                duration="Self-Paced"
                mode="Recorded Program"
                image="/JavaFullStackDevelopment(Recorded Program).png"
                description="The Java Full Stack Development Recorded Program at TailorTech is designed for learners who prefer flexible, self-paced learning while building strong full stack development skills."
                longDescription="This program covers both frontend and backend development, helping learners understand how modern web applications are built from end to end. Through structured recorded sessions and practical exercises, participants can learn at their own pace while building a solid foundation in full stack development."
                whatCovers={[
                  "Frontend Development: HTML and CSS fundamentals, JavaScript and modern ES6 concepts, Bootstrap for responsive layouts, React for dynamic frontend applications.",
                  "Backend Development: Core Java and object-oriented programming, Spring Boot framework, REST API development, Backend architecture fundamentals.",
                  "Database & Application Integration: SQL fundamentals, Database design basics, JPA and Hibernate concepts.",
                  "Full Stack Application Development: Understand how frontend, backend, and databases work together to build complete applications. Learners will gain a practical understanding of full stack architecture and development workflows.",
                ]}
                whatYouGet={[
                  "Structured recorded sessions",
                  "Self-paced learning flexibility",
                  "Practical full stack development concepts",
                  "Strong foundation for modern web development",
                ]}
                programId="java-fullstack-recorded"
              />
            </div>
          </div>
        </section>

        {/* Mock Interviews */}
        <section id="mock-interviews" className="py-12 md:py-16 bg-[#1f1f3a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-[#1a1a2e] rounded-xl shadow-2xl border border-gray-700 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Mock Interview Sessions
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  1 Hour per Session | Live Online
                </p>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  TailorTech Mock Interview Sessions are designed to help learners prepare confidently for technical interviews. These one-on-one sessions simulate real interview environments and provide valuable feedback to improve problem-solving, technical understanding, and communication.
                </p>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Each session is conducted by an industry professional who evaluates your approach and provides detailed feedback to help you perform better in real interviews.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">What the Session Includes</h3>
                  <ul className="space-y-2">
                    {[
                      "One-on-one mock interview with an industry expert",
                      "Real interview-style technical questions",
                      "Evaluation of problem-solving approach",
                      "Feedback on technical concepts and coding style",
                      "Guidance on improving interview performance",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#e91e63] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Who It Is For</h3>
                  <ul className="space-y-2">
                    {[
                      "Students preparing for technical interviews",
                      "Developers looking to improve interview performance",
                      "Professionals preparing for backend, full stack, or data engineering roles",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#e91e63] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Session Details</h3>
                  <div className="bg-[#1f1f3a] p-4 rounded-lg">
                    <p className="text-gray-300">
                      <span className="font-semibold">Duration:</span> 1 Hour per session
                    </p>
                    <p className="text-gray-300">
                      <span className="font-semibold">Mode:</span> Live Online (One-on-One)
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-gray-700">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    Prepare with confidence and gain valuable insights before your real interviews.
                  </p>
                  <MockInterviewButton />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#e91e63] to-[#c2185b]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Coding Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join TailorTech and transform your career with hands-on learning, real-world projects, and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/apply"
                  className="px-8 py-4 bg-white text-[#e91e63] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
