import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Palette, Music, BookOpen, Users } from "lucide-react";

const CoCurricular = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Events & Activities", path: "/events/co-curricular" }, { label: "Co-curricular Activities" }]} />
      <h1 className="page-title">Co-curricular Activities</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Co-curricular activities are integral to our educational approach. They complement classroom learning and help develop creativity, teamwork, leadership, and self-expression in every student.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { icon: Palette, title: "Art & Craft", desc: "Drawing, painting, clay modeling, paper craft, rangoli making, and other creative activities are conducted regularly. Annual art exhibitions showcase student talent." },
          { icon: Music, title: "Music & Dance", desc: "Classical and folk music, devotional songs, and traditional dance forms are taught. Students perform at cultural events and inter-school competitions." },
          { icon: BookOpen, title: "Literary Activities", desc: "Debate, elocution, essay writing, storytelling, quiz competitions, and book reading clubs develop communication skills and confidence." },
          { icon: Users, title: "Clubs & Societies", desc: "Science Club, Eco Club, Literary Club, and Social Service Club meet weekly. Students choose clubs based on their interests and contribute to school and community." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="content-card">
            <Icon size={28} className="text-primary mb-3" />
            <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default CoCurricular;
