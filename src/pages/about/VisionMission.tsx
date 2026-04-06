import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Eye, Target, Heart } from "lucide-react";

const VisionMission = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Our Vision & Mission" }]} />
      <h1 className="page-title">Our Vision & Mission</h1>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="content-card">
          <Eye size={36} className="text-primary mb-4" />
          <h2 className="section-title">Our Vision</h2>
          <p className="text-muted-foreground mb-3">To create a centre of integral education where every child is nurtured in all dimensions of their being — physical, vital, mental, psychic, and spiritual — in accordance with the educational philosophy of Sri Aurobindo and The Mother.</p>
          <p className="text-muted-foreground">We envision a community of learners who are not merely academically proficient, but are conscious, compassionate, and self-aware individuals ready to contribute positively to society and the world.</p>
        </div>
        <div className="content-card">
          <Target size={36} className="text-accent mb-4" />
          <h2 className="section-title">Our Mission</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" /> To provide an educational environment that fosters the growth of the whole child — body, life, mind, and soul.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" /> To develop the inner faculties of each student and guide them towards self-discovery and self-mastery.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" /> To integrate academic learning with physical culture, creative expression, and ethical development.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" /> To instill values of truth, beauty, goodness, and service in every student.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" /> To create a joyful, nurturing atmosphere where learning is a natural and spontaneous process.</li>
          </ul>
        </div>
      </div>

      <div className="content-card bg-secondary border-none text-center">
        <blockquote className="font-display text-xl italic text-foreground max-w-2xl mx-auto">
          "True education means to bring out the best in a child, to cultivate what is finest and most divine in the human soul."
        </blockquote>
        <cite className="block mt-3 text-muted-foreground">— The Mother</cite>
      </div>
    </div>
  </Layout>
);

export default VisionMission;
