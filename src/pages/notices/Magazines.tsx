import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { BookOpen, Download } from "lucide-react";

const Magazines = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Notice & Publications", path: "/notices/announcements" }, { label: "Magazines" }]} />
      <h1 className="page-title">School Magazines</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Our annual school magazine "Prakash" (Light) is a creative compilation of student writings, artwork, school reports, and memories from the academic year.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { year: "2024-25", title: "Prakash — Vol. 12", desc: "Theme: 'The Joy of Learning'. Featuring student essays, poems, artwork, and photographs from the year." },
          { year: "2023-24", title: "Prakash — Vol. 11", desc: "Theme: 'Roots and Wings'. Celebrating our cultural heritage while aspiring for global awareness." },
          { year: "2022-23", title: "Prakash — Vol. 10", desc: "Theme: 'Resilience'. Reflecting the spirit of the school community during challenging times." },
        ].map((mag, i) => (
          <div key={i} className="content-card text-center">
            <div className="w-24 h-32 bg-secondary rounded mx-auto mb-3 flex items-center justify-center">
              <BookOpen size={28} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold">{mag.title}</h3>
            <p className="text-xs text-muted-foreground mb-2">{mag.year}</p>
            <p className="text-sm text-muted-foreground mb-3">{mag.desc}</p>
            <button className="text-sm text-primary font-medium inline-flex items-center gap-1"><Download size={14} /> Download PDF</button>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);
export default Magazines;
