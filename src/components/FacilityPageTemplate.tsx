import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { ReactNode } from "react";

interface FacilityPageProps {
  title: string;
  icon: ReactNode;
  intro: string;
  features: { title: string; desc: string }[];
}

const FacilityPageTemplate = ({ title, icon, intro, features }: FacilityPageProps) => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Facilities", path: "/facilities/classrooms" }, { label: title }]} />
      <h1 className="page-title">{title}</h1>
      <div className="content-card mb-8 flex items-start gap-4">
        <div className="shrink-0">{icon}</div>
        <p className="text-muted-foreground">{intro}</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="content-card">
            <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default FacilityPageTemplate;
