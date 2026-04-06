import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { GraduationCap } from "lucide-react";

const ClassesPrograms = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Academics", path: "/academics/curriculum" }, { label: "Classes & Programs" }]} />
      <h1 className="page-title">Classes & Programs</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Sri Aurobindo Purnanga Sikhya Kendra offers education from Pre-Primary to Class VIII, with plans to extend to higher classes. Each level is designed to meet the developmental needs of students at that stage.</p>
      </div>
      <div className="space-y-4">
        {[
          { level: "Pre-Primary (Nursery & KG)", ages: "3-5 years", desc: "Play-based learning with stories, songs, art, and nature activities. Focus on socialization, motor skills, and language development.", students: "20-25 per class" },
          { level: "Primary (Classes I-V)", ages: "6-10 years", desc: "Foundation in core subjects with integrated activities. Emphasis on reading, writing, numeracy, and environmental awareness.", students: "20-25 per class" },
          { level: "Middle School (Classes VI-VIII)", ages: "11-13 years", desc: "Subject-specific teaching with lab work, projects, and research assignments. Preparation for secondary-level education.", students: "20-25 per class" },
        ].map((c, i) => (
          <div key={i} className="content-card flex items-start gap-4">
            <GraduationCap size={28} className="text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-display text-lg font-semibold">{c.level}</h3>
              <p className="text-sm text-muted-foreground">Ages: {c.ages} | Class Size: {c.students}</p>
              <p className="text-muted-foreground text-sm mt-2">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default ClassesPrograms;
