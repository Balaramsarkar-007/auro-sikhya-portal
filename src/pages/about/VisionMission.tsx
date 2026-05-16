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
          <p className="text-muted-foreground mb-3">To be a luminous centre of Integral Education, inspired by the ideals of Sri Aurobindo and The Mother, where each child is helped to unfold the divinity within and develop into a conscious, capable, and compassionate individual.</p>
          <p className="text-muted-foreground">We aspire to nurture future citizens who, through knowledge, character, and inner awakening, become instruments of harmony and positive transformation in society and the world.</p>
        </div>
        <div className="content-card">
          <Target size={36} className="text-accent mb-4" />
          <h2 className="section-title">Our Mission</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" />Create a joyful, disciplined, and nurturing environment for the holistic growth of every child.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" />Support balanced development in the physical, mental, emotional, and spiritual dimensions of life.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" />Inspire curiosity, creativity, self-discipline, courage, sincerity, and a spirit of service among students.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" />Combine academic excellence with character building, cultural values, and personal growth.</li>
            <li className="flex items-start gap-2"><Heart size={16} className="text-primary mt-1 shrink-0" />Prepare students to face life with wisdom, confidence, strength, and dedication toward a higher purpose.</li>
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
