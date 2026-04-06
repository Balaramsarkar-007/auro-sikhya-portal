import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Users, Quote } from "lucide-react";

const PrincipalMessage = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Principal's Message" }]} />
      <h1 className="page-title">Principal's Message</h1>

      <div className="content-card max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="shrink-0 text-center">
            <div className="w-32 h-32 rounded-lg bg-secondary flex items-center justify-center mx-auto">
              <Users size={48} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold mt-3">Dr. Ananda Mohan Das</h3>
            <p className="text-sm text-muted-foreground">Principal</p>
          </div>
          <div>
            <Quote size={32} className="text-primary/30 mb-2" />
            <div className="space-y-4 text-muted-foreground">
              <p>Dear Parents, Students, and Well-wishers,</p>
              <p>It gives me immense joy to welcome you to Sri Aurobindo Purnanga Sikhya Kendra, a school that stands not just for academic excellence, but for the integral development of the human being.</p>
              <p>At our school, we believe that every child is unique and carries within them a divine potential waiting to be unfolded. Our approach to education is inspired by the vision of Sri Aurobindo and The Mother, who envisioned an education that addresses all parts of the being — the body, the life-force, the mind, and the innermost soul.</p>
              <p>We do not merely teach subjects; we cultivate curiosity, creativity, compassion, and character. Our students learn not just from textbooks but from nature, from physical activities, from art and music, from meditation and silence, and most importantly, from the example set by their teachers and elders.</p>
              <p>Our dedicated team of educators works tirelessly to create an atmosphere of love, discipline, and aspiration. We maintain small class sizes to ensure that each child receives individual attention and care.</p>
              <p>I invite you to visit our campus, meet our teachers, interact with our students, and experience the unique spirit of our school. Together, let us nurture the leaders, thinkers, and compassionate individuals of tomorrow.</p>
              <p className="font-semibold text-foreground">With warm regards and blessings,<br />Dr. Ananda Mohan Das</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PrincipalMessage;
