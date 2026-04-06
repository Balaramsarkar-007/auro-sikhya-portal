import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";

const Curriculum = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Academics", path: "/academics/curriculum" }, { label: "Curriculum" }]} />
      <h1 className="page-title">Curriculum</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground mb-3">Our curriculum integrates the best of conventional academics with the principles of integral education. While following the state board syllabus, we enrich it with additional elements that address the physical, vital, mental, psychic, and spiritual development of each child.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="content-card">
          <h3 className="font-display text-lg font-semibold mb-2">Core Subjects</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• English Language & Literature</li><li>• Hindi</li><li>• Odia (Regional Language)</li>
            <li>• Mathematics</li><li>• General Science / EVS</li><li>• Social Studies</li>
            <li>• Sanskrit</li><li>• Computer Studies</li>
          </ul>
        </div>
        <div className="content-card">
          <h3 className="font-display text-lg font-semibold mb-2">Enrichment Areas</h3>
          <ul className="text-muted-foreground text-sm space-y-1">
            <li>• Physical Education & Yoga</li><li>• Art & Craft</li><li>• Music & Dance</li>
            <li>• Value Education</li><li>• Environmental Studies</li><li>• Life Skills</li>
            <li>• Meditation & Concentration</li><li>• Community Service</li>
          </ul>
        </div>
      </div>
      <div className="content-card bg-secondary border-none">
        <h3 className="font-display text-lg font-semibold mb-2">Assessment Approach</h3>
        <p className="text-muted-foreground text-sm">We follow a continuous and comprehensive evaluation (CCE) system that assesses not just academic knowledge but also creativity, participation, character, and overall development. Report cards reflect both scholastic and co-scholastic achievements.</p>
      </div>
    </div>
  </Layout>
);
export default Curriculum;
