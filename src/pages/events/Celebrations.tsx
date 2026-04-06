import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Calendar } from "lucide-react";

const Celebrations = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Events & Activities", path: "/events/co-curricular" }, { label: "Events & Celebrations" }]} />
      <h1 className="page-title">Events & Celebrations</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Our school calendar is filled with events and celebrations that bring the community together, foster joy, and provide platforms for students to shine.</p>
      </div>
      <div className="space-y-4">
        {[
          { date: "August 15, 2025", title: "Sri Aurobindo's Birthday & Independence Day", desc: "A day of national pride and spiritual reflection. Morning meditation, flag hoisting, cultural performances, and community meals." },
          { date: "September 5, 2025", title: "Teacher's Day Celebrations", desc: "Students express gratitude to their teachers through songs, poems, skits, and a special assembly organized entirely by students." },
          { date: "October 2025", title: "Durga Puja & Dussehra", desc: "Cultural programs, art competitions, and festive meals mark these important celebrations. Students learn about mythology and cultural significance." },
          { date: "November 14, 2025", title: "Children's Day", desc: "A day dedicated to fun and laughter. Teachers organize games, performances, and treats for all students." },
          { date: "January 26, 2026", title: "Republic Day Celebrations", desc: "Flag hoisting, march past, patriotic songs, and speeches by student leaders. Awards for outstanding students are also given." },
          { date: "February 21, 2026", title: "The Mother's Birthday", desc: "A day of collective meditation, readings from The Mother's writings, devotional music, and offering of flowers." },
          { date: "March 2026", title: "Annual Sports Day", desc: "Inter-house athletic competitions, yoga demonstrations, and team sports. Parents and dignitaries are invited as chief guests." },
        ].map((e, i) => (
          <div key={i} className="content-card flex items-start gap-4">
            <Calendar size={20} className="text-primary shrink-0 mt-1" />
            <div>
              <span className="text-xs text-primary font-semibold">{e.date}</span>
              <h3 className="font-display font-semibold">{e.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Celebrations;
