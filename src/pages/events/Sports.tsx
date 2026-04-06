import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Trophy, Dumbbell } from "lucide-react";

const Sports = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Events & Activities", path: "/events/co-curricular" }, { label: "Sports & Physical Training" }]} />
      <h1 className="page-title">Sports & Physical Training</h1>
      <div className="content-card mb-8">
        <Dumbbell size={36} className="text-primary mb-3" />
        <p className="text-muted-foreground">Physical training is a cornerstone of integral education. Our students participate in a wide range of sports and physical activities that build strength, agility, discipline, and team spirit.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Yoga & Pranayama", "Football", "Cricket", "Kabaddi", "Kho-Kho", "Volleyball", "Badminton", "Athletics", "Marathon Running"].map((sport, i) => (
          <div key={i} className="content-card flex items-center gap-3">
            <Trophy size={20} className="text-primary shrink-0" />
            <span className="font-medium text-sm">{sport}</span>
          </div>
        ))}
      </div>
      <div className="content-card mt-8 bg-secondary border-none">
        <h3 className="font-display font-semibold mb-2">Annual Sports Day</h3>
        <p className="text-muted-foreground text-sm">The Annual Sports Day is a grand event where students showcase their athletic abilities. Events include track and field competitions, team sports, yoga demonstrations, and march past. Parents and community members are invited as guests.</p>
      </div>
    </div>
  </Layout>
);
export default Sports;
