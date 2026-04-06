import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Calendar } from "lucide-react";

const EventsUpdates = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Notice & Publications", path: "/notices/announcements" }, { label: "Events Updates" }]} />
      <h1 className="page-title">Events Updates</h1>
      <div className="space-y-4">
        {[
          { date: "March 2025", title: "Annual Sports Day Successfully Held", desc: "The Annual Sports Day 2025 was a grand success with over 200 students participating in various track and field events. Chief Guest Shri Ram Kumar praised the school's commitment to physical education." },
          { date: "February 2025", title: "Inter-School Science Quiz", desc: "Our students represented the school at the District-level Science Quiz. Team of Priya, Arjun, and Meera secured 2nd position among 15 participating schools." },
          { date: "January 2025", title: "Republic Day Celebrations", desc: "A spectacular Republic Day program featured a march past, patriotic songs, and a powerful speech by Class VIII student Rahul on the importance of constitutional values." },
          { date: "December 2024", title: "Annual Cultural Program", desc: "The annual cultural program showcased dances, dramas, and musical performances by students of all classes. Parents appreciated the creativity and confidence of the performers." },
        ].map((e, i) => (
          <div key={i} className="content-card">
            <Calendar size={18} className="text-primary mb-2" />
            <span className="text-xs text-primary font-semibold">{e.date}</span>
            <h3 className="font-display font-semibold mt-1">{e.title}</h3>
            <p className="text-muted-foreground text-sm mt-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default EventsUpdates;
