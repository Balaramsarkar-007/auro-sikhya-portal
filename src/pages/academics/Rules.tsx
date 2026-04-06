import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Shield } from "lucide-react";

const Rules = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Academics", path: "/academics/curriculum" }, { label: "Rules & Guidelines" }]} />
      <h1 className="page-title">Rules & Guidelines</h1>
      <div className="content-card mb-8">
        <Shield size={28} className="text-primary mb-3" />
        <p className="text-muted-foreground">The school maintains a set of guidelines that help create a harmonious, respectful, and conducive learning environment. These are not rigid rules but principles of conscious living that we aspire to practice together.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          { title: "Attendance & Punctuality", items: ["Minimum 80% attendance is required for promotion", "Students must arrive by 7:00 AM", "Leave applications must be submitted to the class teacher", "Absence for more than 3 days requires a medical certificate"] },
          { title: "Uniform & Appearance", items: ["School uniform is compulsory on all school days", "Clean and neat appearance is expected", "No jewelry except small ear studs for girls", "Hair must be neatly combed; long hair tied back"] },
          { title: "Conduct & Behavior", items: ["Respect for all teachers, staff, and fellow students", "No physical or verbal bullying tolerated", "Care for school property and environment", "Mobile phones are not permitted on campus"] },
          { title: "Academic Discipline", items: ["Regular homework submission is mandatory", "Honest conduct in examinations", "Library books must be returned on time", "Active participation in class discussions encouraged"] },
        ].map((s, i) => (
          <div key={i} className="content-card">
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <ul className="text-muted-foreground text-sm space-y-1">{s.items.map((item, j) => <li key={j}>• {item}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Rules;
