import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Demo Videos - TailorTech",
  description: "Watch sample lectures and demo videos from TailorTech courses.",
};

// Placeholder video data - replace with actual YouTube video IDs
const DEMO_VIDEOS = [
  {
    id: "1",
    title: "Java Full Stack Development - Introduction",
    description: "Get an overview of our comprehensive Full Stack Development course",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "2",
    title: "Java Backend Development - REST APIs",
    description: "Learn how we teach REST API development in our Backend course",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "3",
    title: "Java Frontend Development - React Basics",
    description: "See how we introduce React in our Frontend Development course",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
  {
    id: "4",
    title: "Data Engineering - Introduction to Big Data",
    description: "Explore the fundamentals of Data Engineering in this sample lecture",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
  },
];

export default function DemoVideosPage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#2C3E50]">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 md:py-16 bg-[#FFF8F0]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E2A3A] mb-4">
                Demo Videos
              </h1>
              <p className="text-xl text-[#6B7C8F] max-w-3xl mx-auto">
                Watch sample lectures and get a feel for our teaching style
              </p>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 md:py-24 bg-[#FFFDFB]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DEMO_VIDEOS.map((video) => (
                <div
                  key={video.id}
                  className="overflow-hidden rounded-2xl border border-black/[0.05] bg-white shadow-sm"
                >
                  <div className="aspect-video bg-gray-800">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E2A3A] mb-2">
                      {video.title}
                    </h3>
                    <p className="text-[#6B7C8F]">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
