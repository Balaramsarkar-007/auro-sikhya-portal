import Layout from "@/components/layout/Layout";
import Breadcrumb from "@/components/layout/Breadcrumb";

const Examination = () => (
  <Layout>
    <div className="page-container">
      <Breadcrumb items={[{ label: "Academics", path: "/academics/curriculum" }, { label: "Examination & Evaluation" }]} />
      <h1 className="page-title">Examination & Evaluation</h1>
      <div className="content-card mb-8">
        <p className="text-muted-foreground">Our evaluation system goes beyond traditional examinations. We follow a Continuous and Comprehensive Evaluation (CCE) approach that assesses students holistically throughout the year.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="content-card">
          <h3 className="font-display text-lg font-semibold mb-2">Scholastic Assessment</h3>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>• <strong>Unit Tests:</strong> Monthly tests in each subject</li>
            <li>• <strong>Half-Yearly Exam:</strong> Conducted in October</li>
            <li>• <strong>Annual Exam:</strong> Conducted in March</li>
            <li>• <strong>Projects & Assignments:</strong> Regular project work counts towards final grades</li>
            <li>• <strong>Oral Assessments:</strong> Viva voce and presentations for all classes</li>
          </ul>
        </div>
        <div className="content-card">
          <h3 className="font-display text-lg font-semibold mb-2">Co-Scholastic Assessment</h3>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>• <strong>Physical Fitness:</strong> Yoga, sports, and endurance tests</li>
            <li>• <strong>Creative Arts:</strong> Art, music, dance performances</li>
            <li>• <strong>Discipline & Conduct:</strong> Behavioral observations and self-assessment</li>
            <li>• <strong>Social Skills:</strong> Teamwork, leadership, and community service</li>
            <li>• <strong>Inner Growth:</strong> Meditation practice, value-based actions</li>
          </ul>
        </div>
      </div>
      <div className="content-card bg-secondary border-none">
        <h3 className="font-display text-lg font-semibold mb-2">Grading System</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead><tr className="border-b"><th className="py-2 pr-4">Grade</th><th className="py-2 pr-4">Marks Range</th><th className="py-2">Description</th></tr></thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b"><td className="py-2 pr-4 font-semibold">A+</td><td className="py-2 pr-4">91-100</td><td className="py-2">Outstanding</td></tr>
              <tr className="border-b"><td className="py-2 pr-4 font-semibold">A</td><td className="py-2 pr-4">81-90</td><td className="py-2">Excellent</td></tr>
              <tr className="border-b"><td className="py-2 pr-4 font-semibold">B+</td><td className="py-2 pr-4">71-80</td><td className="py-2">Very Good</td></tr>
              <tr className="border-b"><td className="py-2 pr-4 font-semibold">B</td><td className="py-2 pr-4">61-70</td><td className="py-2">Good</td></tr>
              <tr className="border-b"><td className="py-2 pr-4 font-semibold">C</td><td className="py-2 pr-4">51-60</td><td className="py-2">Satisfactory</td></tr>
              <tr><td className="py-2 pr-4 font-semibold">D</td><td className="py-2 pr-4">41-50</td><td className="py-2">Needs Improvement</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </Layout>
);
export default Examination;
