import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Landmark, BookOpen, Users } from "lucide-react";

const ParentOrganization = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "About Us", path: "/about/vision-mission" }, { label: "Our Parent Organization" }]} />
      <h1 className="page-title">Sri Aurobindo Sadhana Mandir</h1>

      <div className="content-card mb-8">
        <div className="flex items-start gap-4">
          <Landmark size={40} className="text-primary shrink-0" />
          <div>
            <h2 className="section-title">Our Foundation</h2>
            <p className="text-muted-foreground mb-3">Sri Aurobindo Sadhana Mandir, located in Rairangpur, Mayurbhanj, Odisha, is a spiritual and educational organization inspired by the teachings of Sri Aurobindo and The Mother. Established to serve the local community, the Mandir has been a beacon of integral education and spiritual development for decades.</p>
            <p className="text-muted-foreground mb-3">The organization runs multiple educational and social welfare programs, with Sri Aurobindo Purnanga Sikhya Kendra being its flagship educational institution.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="content-card">
          <BookOpen size={28} className="text-accent mb-3" />
          <h3 className="font-display text-lg font-semibold mb-2">Educational Initiatives</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Sri Aurobindo Purnanga Sikhya Kendra (School)</li>
            <li>• Adult literacy programs for rural communities</li>
            <li>• Teacher training workshops on integral education</li>
            <li>• Cultural education and Sanskrit studies</li>
          </ul>
        </div>
        <div className="content-card">
          <Users size={28} className="text-accent mb-3" />
          <h3 className="font-display text-lg font-semibold mb-2">Community Services</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>• Free medical camps for tribal communities</li>
            <li>• Rural development and self-help programs</li>
            <li>• Yoga and meditation sessions for all</li>
            <li>• Environmental awareness and tree planting drives</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default ParentOrganization;
