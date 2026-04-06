import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Target, CheckCircle } from "lucide-react";

const AimsObjectives = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Aims & Objectives" }]} />
      <h1 className="page-title">Aims & Objectives</h1>

      <div className="content-card mb-8">
        <Target size={36} className="text-primary mb-4" />
        <p className="text-muted-foreground mb-4">Sri Aurobindo Purnanga Sikhya Kendra is committed to providing an education that goes beyond the conventional boundaries of learning. Our aims and objectives are rooted in the integral philosophy of Sri Aurobindo, seeking to develop every aspect of the child's being.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          "To develop the physical capacities of children through structured physical education, yoga, and outdoor activities.",
          "To nurture emotional intelligence, resilience, and positive life skills through vital education.",
          "To cultivate intellectual curiosity, critical thinking, and a love for knowledge through progressive mental education.",
          "To awaken the inner being and develop an intuitive understanding of truth, beauty, and goodness.",
          "To instill a sense of service, compassion, and responsibility towards the community and environment.",
          "To integrate Indian cultural values with modern educational practices for a balanced curriculum.",
          "To maintain a joyful, fear-free, and supportive learning environment for all students.",
          "To prepare students not just for examinations but for life, with skills for self-reliance and leadership.",
        ].map((aim, i) => (
          <div key={i} className="content-card flex items-start gap-3">
            <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
            <p className="text-muted-foreground text-sm">{aim}</p>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default AimsObjectives;
