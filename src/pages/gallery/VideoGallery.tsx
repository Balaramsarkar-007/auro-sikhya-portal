import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Play } from "lucide-react";

const VideoGallery = () => {
  const videos = [
    { title: "School Anthem", duration: "3:45" },
    { title: "Annual Day 2024 Highlights", duration: "12:30" },
    { title: "Campus Tour", duration: "8:15" },
    { title: "Sports Day 2024", duration: "10:20" },
    { title: "Cultural Fest Samanvay", duration: "15:00" },
    { title: "Morning Assembly & Meditation", duration: "5:45" },
  ];

  return (
    <Layout>
      <div className="page-container">
        <Breadcrumb items={[{ label: "Gallery", path: "/gallery/photos" }, { label: "Video Gallery" }]} />
        <h1 className="page-title">Video Gallery</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary/80 transition-colors mb-2 relative">
                <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play size={24} className="text-primary-foreground ml-1" />
                </div>
                <span className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-0.5 rounded">{v.duration}</span>
              </div>
              <h3 className="font-semibold text-sm">{v.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default VideoGallery;
