import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Camera } from "lucide-react";

const PhotoGallery = () => {
  const albums = [
    { title: "Annual Sports Day 2024", count: 24 },
    { title: "Cultural Fest 'Samanvay' 2024", count: 36 },
    { title: "Science Exhibition", count: 18 },
    { title: "Independence Day Celebrations", count: 15 },
    { title: "Campus & Infrastructure", count: 20 },
    { title: "Classroom Activities", count: 22 },
    { title: "Morning Assembly", count: 12 },
    { title: "Art & Craft Exhibition", count: 28 },
    { title: "Nature Walk & Excursion", count: 16 },
    { title: "Yoga & Meditation", count: 14 },
    { title: "Library Activities", count: 10 },
    { title: "Community Service", count: 8 },
  ];

  return (
    <Layout>
      <div className="page-container">
        <Breadcrumb items={[{ label: "Gallery", path: "/gallery/photos" }, { label: "Photo Gallery" }]} />
        <h1 className="page-title">Photo Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {albums.map((album, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary/80 transition-colors mb-2">
                <Camera size={32} className="text-accent" />
              </div>
              <h3 className="font-semibold text-sm">{album.title}</h3>
              <p className="text-xs text-muted-foreground">{album.count} photos</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default PhotoGallery;
